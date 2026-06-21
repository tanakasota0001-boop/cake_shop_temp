import React from "react";
import Link from "next/link";
import ctaData from "@/content/cta.json";
import Button from "@/components/ui/Button";

export const FinalCta = () => {
  return (
    <section id="cta" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* 装飾用の背景サークル */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-850 tracking-wider">
            {ctaData.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {ctaData.description}
          </p>
        </div>

        {/* ボタン群 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {ctaData.buttons.map((btn, index) => {
            const isTel = btn.link.startsWith("tel:");
            
            if (isTel) {
              return (
                <a key={index} href={btn.link} className="w-full sm:w-auto">
                  <Button
                    variant={btn.primary ? "primary" : "outline"}
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 duration-300"
                  >
                    {/* 電話アイコン */}
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {btn.text}
                  </Button>
                </a>
              );
            }

            return (
              <Link key={index} href={btn.link} className="w-full sm:w-auto">
                <Button
                  variant={btn.primary ? "primary" : "outline"}
                  size="lg"
                  className="w-full sm:w-auto hover:scale-105 duration-300"
                >
                  {btn.text}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
