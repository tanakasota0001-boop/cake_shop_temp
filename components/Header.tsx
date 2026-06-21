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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ページ遷移時やアンカークリック時にメニューを閉じる
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-stone-800"
          : "bg-primary/95 backdrop-blur-xs py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ロゴ / 店舗名 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-xl font-bold tracking-widest transition-colors duration-300 ${
                isScrolled
                  ? "text-primary hover:text-primary/80"
                  : "text-white hover:text-accent/90"
              }`}
            >
              {siteConfig.shopName}
            </Link>
          </div>

          {/* PC向けナビゲーション */}
          <nav className="hidden lg:flex space-x-6">
            {siteConfig.navigation.map((item, index) => {
              // ブログ詳細ページなどからトップのアンカーへ戻るためのリンク
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-sm font-medium tracking-wider transition-colors py-2 ${
                    isScrolled
                      ? `text-stone-600 hover:text-primary ${isActive ? "font-bold text-primary" : ""}`
                      : `text-white/90 hover:text-white ${isActive ? "font-bold text-accent" : ""}`
                  }`}
                >
                  {item.label}
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
                  : "text-white hover:text-accent"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                // 閉じるアイコン (X)
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // ハンバーガーアイコン
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* スマホ向けモバイルメニュー */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 bg-white" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-inner bg-stone-50 border-t border-stone-100">
          {siteConfig.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={handleLinkClick}
              className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:text-primary hover:bg-stone-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
