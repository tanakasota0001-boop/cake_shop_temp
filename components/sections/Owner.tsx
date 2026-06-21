import React from "react";
import ownerData from "@/content/owner.json";

export const Owner = () => {
  return (
    <section id="owner" className="py-28 sm:py-36 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">

          {/* 左側: シェフ写真 */}
          <div className="lg:col-span-5">
            <div className="relative max-w-sm lg:max-w-none mx-auto">
              {/* 装飾ブロック */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-stone-100 z-0" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] img-zoom shadow-xl z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ownerData.image}
                  alt={ownerData.chefName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg tracking-wide">{ownerData.chefName}</p>
                  <p className="text-white/60 text-xs tracking-[0.2em] uppercase mt-0.5">{ownerData.chefNameEn}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側: テキスト */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="section-eyebrow">{ownerData.title}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-3">
                {ownerData.subtitle}
              </h2>
            </div>

            <div className="w-8 h-px bg-primary/50" />

            <p className="text-stone-600 leading-[1.95] whitespace-pre-line text-[0.9375rem]">
              {ownerData.message}
            </p>

            {/* 略歴タイムライン */}
            <div className="space-y-0 pt-2">
              <h3 className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-5">Career History</h3>
              <div className="space-y-0">
                {ownerData.careers.map((career, index) => (
                  <div key={index} className="flex gap-4 pb-5 relative">
                    {/* タイムラインライン */}
                    {index < ownerData.careers.length - 1 && (
                      <div className="absolute left-[0.4rem] top-4 bottom-0 w-px bg-stone-200" />
                    )}
                    {/* ドット */}
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-[#fdfbf7] flex-shrink-0 mt-0.5 z-10" />
                    <p className="text-sm text-stone-600 leading-relaxed">{career}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
