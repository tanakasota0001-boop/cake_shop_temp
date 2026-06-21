import React from "react";
import conceptData from "@/content/concept.json";

export const Concept = () => {
  return (
    <section id="concept" className="py-24 sm:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左側: テキスト */}
          <div className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase block">
                {conceptData.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
                {conceptData.subtitle}
              </h2>
            </div>
            <div className="space-y-6 text-stone-600 leading-relaxed text-base">
              {conceptData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 右側: 重なり合う美しい画像レイアウト */}
          <div className="relative h-[450px] sm:h-[550px] w-full max-w-lg mx-auto lg:max-w-none">
            {/* メインの大きい画像 */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={conceptData.image}
                alt="Our cakes and details"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* サブの小さい画像 (左下に浮かぶ) */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={conceptData.subImage}
                alt="Baking ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
