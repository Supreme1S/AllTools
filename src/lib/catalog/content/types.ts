export interface PlatformContent {
  short: string;
  long: string;
  tagline: string;
  /** Подробный блок «Главное» на странице сервиса */
  highlight: string;
  /** 3 интересных факта */
  facts?: string[];
  tips?: string[];
  warnings?: string[];
}
