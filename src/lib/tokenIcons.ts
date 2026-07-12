const COINGECKO_ID_MAP: Record<string, string> = {
  UNI: "uniswap",
  "1INCH": "1inch",
  TORN: "tornado-cash",
  BADGER: "badger-dao",
  FIDA: "bonfida",
  POOL: "pooltogether",
  SFP: "safepal",
  GTC: "gitcoin",
  CVX: "convex-finance",
  OSMO: "osmosis",
  ORCA: "orca",
  RARE: "superrare",
  DYDX: "dydx",
  JUNO: "juno-network",
  PSP: "paraswap",
  ENS: "ethereum-name-service",
  AURORA: "aurora",
  CMDX: "comdex",
  SOS: "opendao",
  GAS: "gas-dao",
  LOOKS: "looksrare",
  T: "threshold-network-token",
  X2Y2: "x2y2",
  UMEE: "umee",
  SHD: "shade-protocol",
  STG: "stargate-finance",
  EVMOS: "evmos",
  COW: "cow-protocol",
  CRE: "crescent-network",
  OP: "optimism",
  HOP: "hop-protocol",
  AURA: "aura-finance",
  STRD: "stride",
  KUJI: "kujira",
  SWEAT: "sweat-economy",
  SAFE: "safe",
  APT: "aptos",
  HFT: "hashflow",
  ACX: "across-protocol",
  AXL: "axelar",
  PASG: "passage",
  GLTO: "gelotto",
  BONK: "bonk",
  MARS: "mars-protocol",
  BLUR: "blur",
  ID: "space-id",
  ARB: "arbitrum",
  SUI: "sui",
  ARCH: "archway",
  NTRN: "neutron",
  WLD: "worldcoin-wld",
  CYBER: "cyberconnect",
  SEI: "sei-network",
  TIA: "celestia",
  PYTH: "pyth-network",
  JTO: "jito",
  NLS: "nolus",
  WHALE: "white-whale",
  MANTA: "manta-network",
  ALT: "altlayer",
  WEN: "wen",
  JUP: "jupiter-exchange-solana",
  ZETA: "zetachain",
  DYM: "dymension",
  STRK: "starknet",
  AEVO: "aevo",
  ETHFI: "ether-fi",
  ENA: "ethena",
  W: "wormhole",
  PRCL: "parcl",
  TNSR: "tensor",
  REZ: "renzo",
  KMNO: "kamino-finance",
  SAGA: "saga",
  OMNI: "omni-network",
  MODE: "mode",
  EIGEN: "eigenlayer",
  FRIEND: "friend-tech",
  DRIFT: "drift-protocol",
  NOT: "notcoin",
  LISTA: "lista-dao",
  ZK: "zksync",
  ZRO: "layerzero",
  BLAST: "blast",
  ZEX: "zeta-markets",
  CLOUD: "sanctum",
  HMSTR: "hamster-kombat",
  PUFFER: "puffer-finance",
  SCR: "scroll",
  GRASS: "grass",
  HYPE: "hyperliquid",
  MOVE: "movement",
  ME: "magic-eden",
  PENGU: "pudgy-penguins",
  SWELL: "swell-network",
  DBR: "debridge-finance",
  SHARK: "sharky-fi",
  BLUE: "bluefin",
  INIT: "initia",
  NIL: "nillion",
  POLY: "polymarket",
  MASK: "metamask",
};

const CONTRACT_TO_COINGECKO: Record<string, string> = {
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": "uniswap",
  "0x111111111117dc0aa78b770fa6a738034120c302": "1inch",
  "0x77777feddddffc19ff86db637967013e6c6a116c": "tornado-cash",
  "0x3472a5a71965499acd81997a54bba8d852c6e53d": "badger-dao",
  "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": "pooltogether",
  "0xac8ea871e2d5f4be618905f36f73c760f8cfdc9e": "safepal",
  "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f": "gitcoin",
  "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b": "convex-finance",
  "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72": "ethereum-name-service",
  "0xcafe001067cdef266afb7eb5a286dcfd277f3de5": "paraswap",
  "0x3b484b82567a09e2588a13d54d032153f0c0aee0": "opendao",
  "0x6bba316c48b49bd1eac44573c5c871ff02958469": "gas-dao",
  "0xcdf7028ceab81fa0c6971208e83fa7872994bee5": "threshold-network-token",
  "0x1fe44fbaaf5dc4d958ca61faaa29cef0d0d5b1fd": "x2y2",
  "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6": "stargate-finance",
  "0xc0c293ce456ff0ed870add98a0828dd4d2903dbf": "aura-finance",
  "0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc": "hop-protocol",
  "0x44108f0223a3c3028f5fe7aec7f9bb2e66bef82f": "across-protocol",
  "0x7ab889dcfac5b0b6e5c7f5a5a19187ea7c0a1d7a": "aptos",
  "0xb3999f658c0391d94a37f7ff328f3fec942bcadc": "hashflow",
  "0x14778860e937f509e651192a90589de711fb88a9": "cyberconnect",
  "0x47b4d7db6baadf2a553e34dedfa8e725eee6743a": "celestia",
  "0x4305fb66699c3b2702d4d05cf36551390a4c69c6": "pyth-network",
  "0x95cef15241be50ac97da74052caccffda5a2ba01": "manta-network",
  "0x8457ca5040ad67fdebbcc8edce889a335bc0fbfb": "altlayer",
  "0x3b50805453023a91a8bf641e279401a0b23fa6f9": "renzo",
  "0x4d1c297d39c5c1277964d0e3f8aa901493664530": "puffer-finance",
  "0x0a6e7ba5042b38349e437ec6db6214aec7b35676": "swell-network",
  "0xec53bf9167f50cdeb3ae105f56099aaab9061f83": "eigenlayer",
  "0x0bd4887f7d41b35cd75dff9ffee2857306f27270": "friend-tech",
  "0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad": "blast",
  "0x307d35c583f0b88c14483f9c5cb5fb33c6cf4b9a": "movement",
  "0x57e114b691db790c35207b2e685d4a43181e6061": "ethena",
  "0xb0ffa8000886e57f86dd5264b9582b2ad87b2b91": "wormhole",
};

async function fetchCoinGeckoImage(coinId: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.image?.small || data.image?.thumb || null;
  } catch {
    return null;
  }
}

function getGoogleFavicon(domain: string): string {
  return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
}

function getCryptoLogosUrl(symbol: string): string {
  return `https://raw.githubusercontent.com/cryptologos/cryptologos/master/svg/${symbol.toLowerCase()}.svg`;
}

function getTokenSymbolFromContract(contract: string): string {
  const entry = CONTRACT_TO_COINGECKO[contract.toLowerCase()];
  if (entry) return entry;
  return "";
}

export async function getTokenIconUrl(token: string, contract?: string): Promise<string> {
  let coinId = COINGECKO_ID_MAP[token.toUpperCase()];
  
  if (!coinId && contract) {
    coinId = getTokenSymbolFromContract(contract);
  }

  if (coinId) {
    const cgImage = await fetchCoinGeckoImage(coinId);
    if (cgImage) return cgImage;
  }

  if (contract) {
    return getCryptoLogosUrl(token);
  }

  return getGoogleFavicon(`coinmarketcap.com/currencies/${token.toLowerCase()}`);
}

export function getTokenIconUrlSync(token: string, contract?: string): string {
  let coinId = COINGECKO_ID_MAP[token.toUpperCase()];
  
  if (!coinId && contract) {
    coinId = getTokenSymbolFromContract(contract);
  }

  if (coinId) {
    return `https://assets.coingecko.com/coins/images/1/small/${coinId}.png`;
  }

  if (contract) {
    return getCryptoLogosUrl(token);
  }

  return getGoogleFavicon(`coinmarketcap.com/currencies/${token.toLowerCase()}`);
}