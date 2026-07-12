export type SiteThemeId =
  | "hyperliquid"
  | "uniswap"
  | "binance"
  | "optimism"
  | "abstract"
  | "polymarket"
  | "solana";

export type SiteTheme = {
  id: SiteThemeId;
  swatch: string;
  accent: string;
  accentRgb: string;
  accentDim: string;
  accentLight: string;
};

/** Site color schemes */
export const SITE_THEMES: SiteTheme[] = [
  {
    id: "hyperliquid",
    swatch: "#95F2DC",
    accent: "#95F2DC",
    accentRgb: "149 242 220",
    accentDim: "#7ee8cc",
    accentLight: "#c4fff0",
  },
  {
    id: "uniswap",
    swatch: "#fc72ff",
    accent: "#fc72ff",
    accentRgb: "252 114 255",
    accentDim: "#e065e6",
    accentLight: "#fda4ff",
  },
  {
    id: "binance",
    swatch: "#f0b90b",
    accent: "#f0b90b",
    accentRgb: "240 185 11",
    accentDim: "#d4a30a",
    accentLight: "#f5cc3a",
  },
  {
    id: "optimism",
    swatch: "#f24555",
    accent: "#f24555",
    accentRgb: "242 69 85",
    accentDim: "#d83a47",
    accentLight: "#f5606d",
  },
  {
    id: "abstract",
    swatch: "#2bda64",
    accent: "#2bda64",
    accentRgb: "43 218 100",
    accentDim: "#24ba55",
    accentLight: "#4ae87a",
  },
  {
    id: "polymarket",
    swatch: "#4a7dff",
    accent: "#4a7dff",
    accentRgb: "74 125 255",
    accentDim: "#3a6ae8",
    accentLight: "#6b9aff",
  },
  {
    id: "solana",
    swatch: "#9945ff",
    accent: "#9945ff",
    accentRgb: "153 69 255",
    accentDim: "#8232e0",
    accentLight: "#b06aff",
  },
];

export const DEFAULT_THEME_ID: SiteThemeId = "hyperliquid";
export const THEME_STORAGE_KEY = "alltools-theme";

/* ── Color scheme (light / dark) ── */
export type ColorScheme = "light" | "dark";
export const COLOR_SCHEME_STORAGE_KEY = "alltools-color-scheme";
export const DEFAULT_COLOR_SCHEME: ColorScheme = "dark";

export function isSiteThemeId(value: string): value is SiteThemeId {
  return SITE_THEMES.some((theme) => theme.id === value);
}

export function getThemeById(id: SiteThemeId): SiteTheme {
  return SITE_THEMES.find((theme) => theme.id === id) ?? SITE_THEMES[0];
}
