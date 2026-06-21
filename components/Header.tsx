"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import siteConfig from "@/content/site-config.json";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    // 初期ロード時にも状態を同期
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-stone-100/80 shadow-sm py-3"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ロゴ / 店舗名 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-bold tracking-[0.2em] uppercase transition-all duration-500 text-lg sm:text-xl ${
                isScrolled
                  ? "text-primary"
                  : "text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]"
              }`}
            >
              {siteConfig.shopName}
            </Link>
          </div>

          {/* PC向けナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-1">
            {siteConfig.navigation.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`relative text-xs font-medium tracking-[0.12em] uppercase px-3 py-2 rounded-md transition-all duration-300 group ${
                    isScrolled
                      ? isActive
                        ? "text-primary"
                        : "text-stone-500 hover:text-primary"
                      : isActive
                        ? "text-white font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]"
                        : "text-white/90 hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {item.label}
                  {/* アクティブ時のアンダーライン */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-px bg-current transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? "text-stone-600 hover:text-primary"
                  : "text-white hover:text-white/70"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">メニューを開く</span>
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-full bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* スマホ向けモバイルメニュー */}
      <div
        className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-stone-100 px-4 pt-3 pb-5 space-y-0.5">
          {siteConfig.navigation.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                onClick={handleLinkClick}
                className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium tracking-wider transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-stone-600 hover:text-primary hover:bg-stone-50"
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
