"use client";

import React, { useState } from "react";
import menuData from "@/content/menu.json";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const Menu = () => {
  // 初期選択状態を最初のカテゴリにする
  const [activeCategory, setActiveCategory] = useState(
    menuData.categories[0]?.name || ""
  );

  const selectedCategory = menuData.categories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="menu" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {menuData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {menuData.subtitle}
          </h2>
        </div>

        {/* カテゴリタブ切替 */}
        <div className="flex justify-center border-b border-stone-200">
          <div className="flex space-x-8 -mb-px">
            {menuData.categories.map((category) => {
              const isActive = category.name === activeCategory;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm sm:text-base tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-primary text-primary font-bold scale-105"
                      : "border-transparent text-stone-400 hover:text-stone-600 hover:border-stone-300"
                  }`}
                >
                  {category.nameJa}
                </button>
              );
            })}
          </div>
        </div>

        {/* メニューアイテムグリッド */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {selectedCategory.items.map((item, index) => (
              <Card key={index} className="flex flex-col bg-white">
                {/* メニュー画像 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* タグ表示 */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="accent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* 詳細テキスト */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-bold text-stone-850 tracking-wide">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        &yen;{item.price.toLocaleString()}
                        <span className="text-stone-400 text-xs font-normal ml-0.5">
                          (税込)
                        </span>
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
