import { WEB3_BATCH_1 } from "@/lib/catalog/content/web3/batch1";
import { WEB3_BATCH_2 } from "@/lib/catalog/content/web3/batch2";
import { WEB3_BATCH_3 } from "@/lib/catalog/content/web3/batch3";
import { WEB3_BATCH_4 } from "@/lib/catalog/content/web3/batch4";
import { WEB3_BATCH_5 } from "@/lib/catalog/content/web3/batch5";
import { WEB3_BATCH_6 } from "@/lib/catalog/content/web3/batch6";
import { WEB3_BATCH_7 } from "@/lib/catalog/content/web3/batch7";
import type { PlatformContent } from "@/lib/catalog/content/types";

export const WEB3_CONTENT: Record<string, PlatformContent> = {
  ...WEB3_BATCH_1,
  ...WEB3_BATCH_2,
  ...WEB3_BATCH_3,
  ...WEB3_BATCH_4,
  ...WEB3_BATCH_5,
  ...WEB3_BATCH_6,
  ...WEB3_BATCH_7,
};
