import React from "react";
import Link from "next/link";
import ctaData from "@/content/cta.json";

export const FinalCta = () => {
  return (
    <section
      id="cta"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2c1a10 0%, #1c1008 40%, #3d2b1c 100%)",
      }}
    >
      {/* 装飾: 背景テクスチャ */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #fff 0px,
            #fff 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      {/* 中央グロー */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 text-center">
        {/* Eyebrow */}
        <p className="text-primary/70 text-xs tracking-[0.3em] uppercase mb-6 font-light">
          ご注文・お問い合わせ
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-wide leading-tight mb-5">
          {ctaData.title}
        </h2>
        <p className="text-stone-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line mb-12">
          {ctaData.description}
        </p>

        {/* ボタン群 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaData.buttons.map((btn, index) => {
            const isTel = btn.link.startsWith("tel:");

            const buttonClass = btn.primary
              ? "inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-medium tracking-[0.12em] bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
              : "inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-medium tracking-[0.12em] border border-white/25 text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300";

            const content = (
              <span className="flex items-center gap-2">
                {isTel && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
                {btn.text}
              </span>
            );

            if (isTel) {
              return (
                <a key={index} href={btn.link} className={buttonClass}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={index} href={btn.link} className={buttonClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
