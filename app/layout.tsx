import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import siteConfig from "@/content/site-config.json";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 動的なテーマカラーをCSSカスタムプロパティとしてインジェクション
  const themeStyles = {
    "--color-primary": siteConfig.theme.primary,
    "--color-accent": siteConfig.theme.accent,
    "--color-bg-base": siteConfig.theme.background,
    "--color-text-base": siteConfig.theme.text,
  } as React.CSSProperties;

  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full scroll-smooth`}
      style={themeStyles}
    >
      <body className={`${notoSansJP.className} min-h-full flex flex-col font-sans bg-bg-base text-text-base antialiased`}>
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
