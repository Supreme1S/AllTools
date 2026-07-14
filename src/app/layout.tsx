import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: {
    default: "AllTools — каталог крипто-сервисов: биржи, кошельки, DeFi, AI, NFT и инфраструктура. Тир-лист, сравнение, гайды и чекер дропов. Без рефералок и партнёрских подборок.",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "AllTools — каталог крипто-сервисов: биржи, кошельки, DeFi, AI, NFT и инфраструктура. Тир-лист, каталог, гайды и много другого полезного.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AllTools — каталог крипто-сервисов",
    description: "AllTools — каталог крипто-сервисов: биржи, кошельки, DeFi, AI, NFT и инфраструктура. Тир-лист, каталог, гайды и много другого полезного.",
    siteName: "AllTools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="hyperliquid" data-color-scheme="dark" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('alltools-theme');if(t)document.documentElement.dataset.theme=t;var c=localStorage.getItem('alltools-color-scheme');if(c)document.documentElement.dataset.colorScheme=c}catch(e){}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%c42","font-size:48px;font-weight:800;color:#a78bfa;text-shadow:0 0 40px rgba(167,139,250,0.3)"),console.log("%cОтвет на главный вопрос жизни, вселенной и всего такого.","font-size:16px;color:#52525b")`,
          }}
        />
      </head>
      <body className={geistSans.className}>
        <svg
          id="grain-wrap"
          className="hidden md:block motion-reduce:hidden"
          aria-hidden="true"
        >
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-filter)" />
        </svg>

        <Header />
        <main className="flex flex-1 flex-col min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
