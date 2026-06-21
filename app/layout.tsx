import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import siteConfig from "@/content/site-config.json";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

// Noto Sans JP (ゴシック体 - デフォルト、モダン)
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

// Shippori Mincho (明朝体 - 高級感、和風・フランス菓子)
const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-shippori-mincho",
});

// M PLUS Rounded 1c (丸ゴシック - 親しみやすさ、ファミリー向け)
const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mplus-rounded",
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

  // JSON設定値に応じてフォントクラスとCSS変数を切り替え
  let fontClass = notoSansJP.className;
  let fontVariable = notoSansJP.variable;

  if (siteConfig.fontFamily === "serif" || siteConfig.fontFamily === "mincho") {
    fontClass = shipporiMincho.className;
    fontVariable = shipporiMincho.variable;
  } else if (siteConfig.fontFamily === "rounded") {
    fontClass = mPlusRounded.className;
    fontVariable = mPlusRounded.variable;
  }

  return (
    <html
      lang="ja"
      className={`${fontVariable} h-full scroll-smooth`}
      style={themeStyles}
    >
      <body className={`${fontClass} min-h-full flex flex-col font-sans bg-bg-base text-text-base antialiased`}>
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
