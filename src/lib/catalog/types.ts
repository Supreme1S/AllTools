export type ExternalSource = "crypton" | "maxy";

export type ReferralStatus =
  | "ready"
  | "manual_exchange"
  | "manual_kyc"
  | "no_program"
  | "pending";

export type SourceRecord = {
  source: ExternalSource;
  externalId?: string | number;
  name: string;
  url: string;
  image?: string | null;
  category?: string | null;
  features?: string[];
};

export type EnrichmentRecord = {
  source: "defillama";
  protocolSlug: string;
  category?: string;
  tvl?: number;
  url?: string;
  logo?: string;
  matchScore: number;
};

export type CatalogTool = {
  id: string;
  slug: string;
  name: string;
  domain: string;
  category: string | null;
  image: string | null;
  description: string | null;
  website_url: string;
  referral_url: string | null;
  outbound_url: string;
  referral_status: ReferralStatus;
  sources: ExternalSource[];
  verified_overlap: boolean;
  enrichment?: EnrichmentRecord;
};

export type CatalogSnapshot = {
  syncedAt: string;
  stats: {
    total: number;
    crypton: number;
    maxy: number;
    overlap_internal: number;
    with_referral: number;
    enriched: number;
    manual_exchange: number;
    manual_kyc: number;
  };
  tools: CatalogTool[];
};

export type ReferralEntry = {
  url: string;
  status?: ReferralStatus;
  note?: string;
  updatedAt?: string;
};

export type ReferralsRegistry = {
  version: 1;
  updatedAt: string;
  entries: Record<string, ReferralEntry>;
  manual_kyc_domains: string[];
  exchange_domains: string[];
};
