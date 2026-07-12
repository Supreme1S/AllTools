import {
  DEFAULT_THEME_ID,
  THEME_STORAGE_KEY,
  isSiteThemeId,
  type SiteThemeId,
  type ColorScheme,
  COLOR_SCHEME_STORAGE_KEY,
  DEFAULT_COLOR_SCHEME,
} from "@/lib/themes";

export const THEME_TRANSITION_MS = 500;

let transitionTimer: ReturnType<typeof setTimeout> | null = null;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function readStoredTheme(): SiteThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME_ID;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isSiteThemeId(stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME_ID;
}

function persistTheme(id: SiteThemeId) {
  document.documentElement.dataset.theme = id;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}

export function applyThemeInstant(id: SiteThemeId) {
  if (transitionTimer) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
  }
  document.documentElement.classList.remove("theme-color-transition");
  persistTheme(id);
}

export function applyThemeSmooth(id: SiteThemeId) {
  if (typeof document === "undefined") return;

  if (prefersReducedMotion()) {
    applyThemeInstant(id);
    return;
  }

  const root = document.documentElement;

  if (transitionTimer) clearTimeout(transitionTimer);

  root.classList.add("theme-color-transition");
  persistTheme(id);

  transitionTimer = setTimeout(() => {
    root.classList.remove("theme-color-transition");
    transitionTimer = null;
  }, THEME_TRANSITION_MS);
}

/* ── Color scheme (light / dark) ── */

export function readStoredColorScheme(): ColorScheme {
  if (typeof window === "undefined") return DEFAULT_COLOR_SCHEME;
  try {
    const stored = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_COLOR_SCHEME;
}

export function applyColorScheme(id: ColorScheme) {
  document.documentElement.dataset.colorScheme = id;
  try {
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}
