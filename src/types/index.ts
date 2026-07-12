export interface Service {
  id: string;
  slug: string;
  name: string;
  domain: string;
  category: string;
  subcategory: string | null;
  website_url: string;
  referral_url: string | null;
  outbound_url: string;
  referral_status?: string;
  image: string | null;
  short_description: string;
  long_description: string | null;
  detail_tagline?: string;
  detail_insights?: ProtocolInsight[];
  custody_type: string;
  supports_fiat: boolean;
  supports_p2p: boolean;
  sources?: string[];
  top_rank?: number | null;
  tvl_usd?: number | null;
  created_at: string;
  updated_at: string;
}

export type InsightKind = "fact" | "tip" | "warning" | "highlight";

export interface ProtocolInsight {
  kind: InsightKind;
  text: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content_md: string;
  category: string;
  published: boolean;
}

export interface ServiceEvent {
  id: string;
  service_id: string;
  service_name?: string;
  title: string;
  summary: string;
  impact_level: number;
  happened_at: string;
}

export interface TierEntry {
  tier: string;
  services: Service[];
  min_score: number;
  color: string;
  bg_color: string;
  border_color: string;
}
