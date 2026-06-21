import React from "react";
import ownerData from "@/content/owner.json";

export const Owner = () => {
  return (
    <section id="owner" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 左側: シェフの写真 (12カラム中5カラム) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm lg:max-w-none w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ownerData.image}
                alt={ownerData.chefName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-light">
                  お菓子づくりにかける情熱を、一品一品に込めて。
                </p>
              </div>
            </div>
          </div>

          {/* 右側: メッセージと経歴 (12カラム中7カラム) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase block">
                {ownerData.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
                {ownerData.subtitle}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-2xl font-bold text-stone-800">
                  {ownerData.chefName}
                </span>
                <span className="text-stone-400 text-sm ml-3 font-light tracking-wide uppercase">
                  {ownerData.chefNameEn}
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed whitespace-pre-line text-base">
                {ownerData.message}
              </p>
            </div>

            {/* 略歴リスト */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-stone-800 font-semibold tracking-wider">Career History</h3>
              <ul className="space-y-3">
                {ownerData.careers.map((career, index) => (
                  <li key={index} className="flex items-start text-sm text-stone-600">
                    <span className="text-primary mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
