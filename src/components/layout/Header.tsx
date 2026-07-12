"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemePicker } from "@/components/layout/ThemePicker";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/tools") return pathname === "/tools" || pathname.startsWith("/tools/");
  if (href === "/guides") return pathname === "/guides" || pathname.startsWith("/guides/");
  if (href === "/more") {
    return (
      pathname === "/more" ||
      pathname.startsWith("/compare") ||
      pathname.startsWith("/methodology") ||
      pathname.startsWith("/news")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header-bar">
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="На главную">
          <span className="header-logo-white">all</span>
          <span className="header-logo-accent">tools</span>
        </Link>

        <nav className="header-nav" aria-label="Основная навигация">
          {NAV_ITEMS.map((item, i) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "header-link",
                  `header-link-${i + 1}`,
                  active && "header-link-active",
                )}
                aria-current={active ? "page" : undefined}
              >
                <span className="header-link-text">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <ThemePicker />
        </div>
      </div>
    </header>
  );
}
