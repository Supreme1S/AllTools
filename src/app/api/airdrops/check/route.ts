import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const RPC_URLS = [
  "https://eth.llamarpc.com",
  "https://rpc.ankr.com/eth",
  "https://ethereum-rpc.publicnode.com",
  "https://eth.drpc.org",
];

const BALANCEOF_SIG = "0x70a08231";

function encodeAbi(signature: string, ...args: (string | number)[]): string {
  return "0x" + signature.slice(2) + Array.from(arguments).slice(1).map((a) =>
    typeof a === "number" ? a.toString(16).padStart(64, "0") : a.toLowerCase().replace(/^0x/, "").padStart(64, "0")
  ).join("");
}

async function rpcCall(method: string, params: unknown[]): Promise<unknown> {
  for (const url of RPC_URLS) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
        signal: AbortSignal.timeout(8000),
      });
      const data = await res.json();
      if (data.result !== undefined) return data.result;
    } catch {
      continue;
    }
  }
  throw new Error("All RPC endpoints failed");
}

async function getBalanceAtBlock(contract: string, address: string, blockTag: string | number = "latest"): Promise<bigint> {
  const data = encodeAbi(BALANCEOF_SIG, address);
  const result = await rpcCall("eth_call", [{ to: contract.toLowerCase(), data }, blockTag]);
  if (!result || result === "0x") return 0n;
  return BigInt(result as string);
}

function loadAirdrops() {
  const filePath = path.join(process.cwd(), "data", "airdrops.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function getEthAirdrops() {
  return loadAirdrops().filter((a: any) => a.chain === "ethereum" && a.contract);
}

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address");

  if (!address || address.length < 32) {
    return NextResponse.json({ error: "Invalid address" }, { status: 400 });
  }

  const checksumAddress = address.toLowerCase();
  const airdrops = getEthAirdrops();
  
  const results = await Promise.allSettled(
    airdrops.map(async (airdrop: any) => {
      try {
        const blockTag = airdrop.snapshotBlock && airdrop.snapshotBlock > 0 ? airdrop.snapshotBlock : "latest";
        const balance = await getBalanceAtBlock(airdrop.contract, checksumAddress, blockTag);
        const balanceStr = balance.toString();
        const value = balance > 0n ? Number(balance) / 1e18 * airdrop.athPrice : 0;
        const claimed = balance > 0n;
        return {
          id: airdrop.id,
          name: airdrop.name,
          token: airdrop.token,
          chain: airdrop.chain,
          contract: airdrop.contract,
          athPrice: airdrop.athPrice,
          claimed,
          balance: balanceStr,
          value: Math.round(value),
          snapshotBlock: airdrop.snapshotBlock || 0,
        };
      } catch {
        return {
          id: airdrop.id,
          name: airdrop.name,
          token: airdrop.token,
          chain: airdrop.chain,
          contract: airdrop.contract,
          athPrice: airdrop.athPrice,
          claimed: false,
          balance: "0",
          value: 0,
          snapshotBlock: airdrop.snapshotBlock || 0,
          error: "RPC error",
        };
      }
    })
  );

  const claimed = results
    .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled" && r.value.claimed)
    .map((r) => r.value);
  
  const missed = results
    .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled" && !r.value.claimed && !r.value.error)
    .map((r) => ({
      airdrop: { id: r.value.id, name: r.value.name, token: r.value.token, chain: r.value.chain, athPrice: r.value.athPrice },
      estimate: Math.round(r.value.athPrice * r.value.balance / 1e18 * 1000) || 0,
    }))
    .filter((m) => m.estimate > 0);

  const totalValue = claimed.reduce((sum, c) => sum + c.value, 0);
  const chains = [...new Set(claimed.map((c) => c.chain))];

  return NextResponse.json({
    wallet: checksumAddress,
    claimed,
    missed,
    chains,
    total: Math.round(totalValue),
  });
}