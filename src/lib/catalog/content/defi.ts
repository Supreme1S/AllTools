import { DEFI_BATCH_1 } from "@/lib/catalog/content/defi/batch1";
import { DEFI_BATCH_2 } from "@/lib/catalog/content/defi/batch2";
import { DEFI_BATCH_3 } from "@/lib/catalog/content/defi/batch3";
import { DEFI_BATCH_4 } from "@/lib/catalog/content/defi/batch4";
import type { PlatformContent } from "@/lib/catalog/content/types";

export const DEFI_CONTENT: Record<string, PlatformContent> = {
  ...DEFI_BATCH_1,
  ...DEFI_BATCH_2,
  ...DEFI_BATCH_3,
  ...DEFI_BATCH_4,
};
