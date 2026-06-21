import React from "react";
import conceptData from "@/content/concept.json";

export const Concept = () => {
  return (
    <section id="concept" className="py-28 sm:py-36 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* 左側: テキスト */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-eyebrow">
                {conceptData.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide leading-tight mt-3">
                {conceptData.subtitle}
              </h2>
            </div>

            <div className="w-8 h-px bg-primary/50" />

            <div className="space-y-5 text-stone-600 leading-[1.95] text-[0.9375rem]">
              {conceptData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* 特徴リスト */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-stone-100">
              {[
                { num: "100%", label: "国産・産地直送素材" },
                { num: "Daily", label: "毎日手作り" },
                { num: "No", label: "人工添加物不使用" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-primary font-bold text-sm tracking-wider">{item.num}</p>
                  <p className="text-stone-500 text-xs leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右側: 画像コンポジション */}
          <div className="relative h-[460px] sm:h-[560px] w-full">
            {/* 背景の装飾ブロック */}
            <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-stone-100 rounded-xl z-0" />

            {/* メイン画像 */}
            <div className="absolute top-4 right-4 w-[82%] h-[80%] rounded-xl overflow-hidden shadow-xl z-10 img-zoom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={conceptData.image}
                alt="Patisserie Fleur のこだわりのケーキ"
                className="w-full h-full object-cover"
              />
            </div>

            {/* サブ画像 */}
            <div className="absolute bottom-0 left-0 w-[46%] h-[46%] rounded-xl overflow-hidden shadow-2xl z-20 border-[3px] border-[#fdfbf7] img-zoom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={conceptData.subImage}
                alt="ケーキ作りの素材"
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
