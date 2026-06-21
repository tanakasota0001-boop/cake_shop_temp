import React from "react";
import Link from "next/link";
import siteConfig from "@/content/site-config.json";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 左カラム: ブランド・説明 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest text-white">
              {siteConfig.shopName}
            </h3>
            <p className="text-sm leading-relaxed text-stone-400 max-w-sm">
              厳選された素材を使い、毎日職人が手作りするケーキと洋菓子の専門店。皆様の日常に小さな彩りと甘い幸せをお届けします。
            </p>
            {/* SNSアイコンリンク */}
            <div className="flex space-x-4 pt-2">
              {siteConfig.sns.instagram && (
                <Link
                  href={siteConfig.sns.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
              {siteConfig.sns.twitter && (
                <Link
                  href={siteConfig.sns.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter (X)"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              )}
              {siteConfig.sns.facebook && (
                <Link
                  href={siteConfig.sns.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* 中カラム: 簡易サイトマップ */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wider">Sitemap</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {siteConfig.navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 右カラム: コピーライトと簡易情報 */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-semibold tracking-wider">Contact</h4>
            <p>Tel: 03-1234-5678</p>
            <p>Email: info@patisserie-fleur.example.com</p>
            <p className="pt-4 text-xs text-stone-500">
              &copy; {currentYear} {siteConfig.shopName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
