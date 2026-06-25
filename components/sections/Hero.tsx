"use client";

import React from "react";
import heroData from "@/content/hero.json";
import Button from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] flex items-end justify-center overflow-hidden bg-stone-950"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroData.backgroundImage}
          alt="Patisserie Fleur"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        {/* 下からの濃いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-900/30" />
      </div>

      {/* コンテンツ — 画面下寄り配置 */}
      <div className="relative z-20 w-full max-w-[1320px] mx-auto px-6 lg:px-10 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-stone-300/80 text-xs tracking-[0.3em] uppercase mb-6 font-light animate-fade-in">
            Artisan Pâtisserie · Since 2020
          </p>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-[1.15] tracking-wide mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-base sm:text-lg font-light tracking-wide leading-relaxed mb-10 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            {heroData.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const menuSection = document.getElementById(heroData.ctaAnchor.replace("#", ""));
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:scale-[1.03] transition-transform duration-300 text-sm tracking-[0.12em]"
            >
              {heroData.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
