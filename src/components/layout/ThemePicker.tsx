"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  applyThemeInstant,
  applyThemeSmooth,
  readStoredTheme,
  applyColorScheme,
  readStoredColorScheme,
} from "@/lib/theme-wave";
import {
  DEFAULT_THEME_ID,
  SITE_THEMES,
  getThemeById,
  type SiteThemeId,
  type ColorScheme,
} from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

export function ThemePicker() {
  const [active, setActive] = useState<SiteThemeId>(DEFAULT_THEME_ID);
  const [scheme, setScheme] = useState<ColorScheme>("dark");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeTheme = useMemo(() => getThemeById(active), [active]);
  const menuThemes = useMemo(
    () => SITE_THEMES.filter((theme) => theme.id !== active),
    [active],
  );

  useEffect(() => {
    const theme = readStoredTheme();
    applyThemeInstant(theme);
    setActive(theme);
    const cs = readStoredColorScheme();
    applyColorScheme(cs);
    setScheme(cs);
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openMenu() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMenuOpen(true);
  }

  function scheduleCloseMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setMenuOpen(false);
      closeTimer.current = null;
    }, 220);
  }

  function toggleMenu() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMenuOpen((open) => !open);
  }

  function pickTheme(id: SiteThemeId) {
    if (id === active) return;
    setActive(id);
    applyThemeSmooth(id);
    setMenuOpen(false);
  }

  function toggleColorScheme() {
    const next = scheme === "dark" ? "light" : "dark";
    setScheme(next);
    applyColorScheme(next);
  }

  if (!mounted) {
    return (
      <div className="theme-picker" aria-hidden="true">
        <div className="theme-picker-anchor">
          <span className="theme-swatch theme-swatch-current theme-swatch-placeholder" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("theme-picker", menuOpen && "theme-picker-open")}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleCloseMenu}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleCloseMenu();
        }
      }}
    >
      <div className="theme-picker-anchor">
        <button
          type="button"
          className="theme-swatch theme-swatch-scheme"
          aria-label={scheme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"}
          onClick={toggleColorScheme}
        >
          {scheme === "dark" ? (
            <Sun size={20} strokeWidth={2} />
          ) : (
            <Moon size={20} strokeWidth={2} />
          )}
        </button>
        <div className="theme-picker-trigger-wrap">
          <button
            type="button"
            className="theme-swatch theme-swatch-current theme-swatch-trigger"
            style={{ "--swatch-color": activeTheme.swatch } as React.CSSProperties}
            aria-label="Текущая цветовая схема"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          />

          <div className="theme-picker-menu" role="group" aria-label="Выбор цветовой схемы">
            {menuThemes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className="theme-swatch theme-swatch-option"
                style={{ "--swatch-color": theme.swatch } as React.CSSProperties}
                aria-label="Сменить цветовую схему"
                onClick={() => {
                  pickTheme(theme.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
