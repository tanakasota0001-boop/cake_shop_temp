"use client";

import React, { useState } from "react";
import galleryData from "@/content/gallery.json";

export const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImgIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImgIndex(null);
    document.body.style.overflow = "";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex + 1) % galleryData.images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((selectedImgIndex - 1 + galleryData.images.length) % galleryData.images.length);
    }
  };

  // Masonry-like layout: first image is wide
  const images = galleryData.images;

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-stone-900">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="section-eyebrow-light">
              {galleryData.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide mt-3">
              {galleryData.subtitle}
            </h2>
          </div>
          <p className="text-stone-500 text-sm tracking-wide hidden sm:block">
            クリックで拡大
          </p>
        </div>

        {/* 画像グリッド (不均等レイアウト) */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[240px] gap-3">
          {images.map((image: any, index) => {
            const isWide = index === 0;
            return (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${isWide ? "col-span-2 row-span-2" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.url || image.image}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <p className="text-white text-sm font-light tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    {image.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ライトボックスモーダル */}
      {selectedImgIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-[55] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          {/* 閉じる */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="閉じる"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 前へ */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-6 text-white/50 hover:text-white transition-colors cursor-pointer z-10 p-2"
            aria-label="前へ"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 画像 */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center gap-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[selectedImgIndex].url || (images[selectedImgIndex] as any).image}
              alt={images[selectedImgIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-stone-400 text-sm tracking-wider font-light">
              {images[selectedImgIndex].caption}
            </p>
            <p className="text-stone-600 text-xs">
              {selectedImgIndex + 1} / {images.length}
            </p>
          </div>

          {/* 次へ */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-10 p-2"
            aria-label="次へ"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
