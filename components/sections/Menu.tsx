"use client";

import React, { useState } from "react";
import menuData from "@/content/menu.json";


export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0]?.name || ""
  );

  const selectedCategory = menuData.categories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="menu" className="py-28 sm:py-36 bg-stone-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="section-eyebrow">{menuData.title}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-3">
              {menuData.subtitle}
            </h2>
          </div>

          {/* カテゴリタブ */}
          <div className="flex gap-1 bg-white rounded-full p-1 shadow-sm border border-stone-100 self-start sm:self-auto">
            {menuData.categories.map((category) => {
              const isActive = category.name === activeCategory;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {category.nameJa}
                </button>
              );
            })}
          </div>
        </div>

        {/* メニューグリッド */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {selectedCategory.items.map((item, index) => (
              <article key={index} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                {/* 画像エリア */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  {/* タグ */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-medium tracking-wider bg-amber-500 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* 価格ラベル */}
                  <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-tl-xl">
                    <span className="text-stone-900 font-bold text-base">
                      ¥{item.price.toLocaleString()}
                    </span>
                    <span className="text-stone-400 text-[0.65rem] ml-0.5">税込</span>
                  </div>
                </div>

                {/* テキスト */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-stone-900 tracking-wide mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
