"use client";

import React from "react";
import heroData from "@/content/hero.json";
import Button from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* 背景画像とオーバーレイ */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroData.backgroundImage}
          alt="Patisserie Fleur background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/80 z-10" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest leading-tight animate-fade-in-up drop-shadow-lg">
          {heroData.title}
        </h1>
        <p className="text-lg sm:text-xl font-light tracking-wider text-stone-200 animate-fade-in-up delay-200 drop-shadow-md max-w-3xl mx-auto">
          {heroData.subtitle}
        </p>
        <div className="pt-6 animate-fade-in-up delay-300">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const menuSection = document.getElementById(heroData.ctaAnchor.replace("#", ""));
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hover:scale-105 duration-300"
          >
            {heroData.ctaText}
          </Button>
        </div>
      </div>

      {/* 下部の矢印（スクロール促し） */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce hidden sm:block">
        <svg
          className="h-6 w-6 opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
