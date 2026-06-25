"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteConfig from "@/content/site-config.json";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ヒーロー画像があるのはトップページのみ。それ以外は常に不透明ヘッダー
  const isHeroPage = pathname === "/";

  // 実際に適用するスタイル: ヒーローページ以外は常に「スクロール済み」と同等
  const showSolid = !isHeroPage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        showSolid
          ? "bg-[#fdfbf7]/95 backdrop-blur-xl border-b border-stone-200/60 shadow-[0_1px_20px_rgba(0,0,0,0.04)] py-3"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent py-6"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">

          {/* ロゴ / 店舗名 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-bold tracking-[0.28em] uppercase transition-all duration-700 text-base sm:text-lg ${
                showSolid
                  ? "text-stone-800"
                  : "text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]"
              }`}
            >
              {siteConfig.shopName}
            </Link>
          </div>

          {/* PC向けナビゲーション */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {siteConfig.navigation.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`relative text-[0.68rem] font-medium tracking-[0.16em] uppercase px-3.5 py-2 transition-all duration-300 group ${
                    showSolid
                      ? isActive
                        ? "text-primary"
                        : "text-stone-500 hover:text-stone-900"
                      : isActive
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0.5 left-3.5 right-3.5 h-px transition-all duration-400 origin-left ${
                      showSolid ? "bg-primary" : "bg-white"
                    } ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* スマホ向けハンバーガーボタン */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className={`p-2 focus:outline-none transition-colors duration-300 ${
                showSolid
                  ? "text-stone-700 hover:text-primary"
                  : "text-white hover:text-white/70"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="メニューを開く"
            >
              <div className="w-6 h-5 flex flex-col justify-center gap-1.5">
                <span className={`block h-px w-full bg-current transition-all duration-400 ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-400 ${isMenuOpen ? "opacity-0 w-0" : "w-full"}`} />
                <span className={`block h-px w-full bg-current transition-all duration-400 ${isMenuOpen ? "-rotate-45 -translate-y-[11px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* スマホ向けモバイルメニュー */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="bg-[#fdfbf7]/98 backdrop-blur-xl border-t border-stone-100 px-6 pt-4 pb-6 space-y-0">
          {siteConfig.navigation.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                onClick={handleLinkClick}
                className={`flex items-center px-2 py-3.5 text-sm tracking-[0.1em] border-b border-stone-100/60 transition-all duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
