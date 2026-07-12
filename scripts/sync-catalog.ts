import { syncCatalog } from "../src/lib/catalog/sync";

syncCatalog()
  .then((snapshot) => {
    console.log("Catalog synced");
    console.log(JSON.stringify(snapshot.stats, null, 2));
    console.log(
      `Sample: ${snapshot.tools
        .slice(0, 8)
        .map((tool) => `${tool.name} → ${tool.outbound_url}`)
        .join("\n         ")}`,
    );
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
