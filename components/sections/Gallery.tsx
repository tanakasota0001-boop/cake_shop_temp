"use client";

import React, { useState } from "react";
import galleryData from "@/content/gallery.json";

export const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImgIndex(index);
    document.body.style.overflow = "hidden"; // スクロール防止
  };

  const closeModal = () => {
    setSelectedImgIndex(null);
    document.body.style.overflow = ""; // スクロール再開
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      const nextIndex = (selectedImgIndex + 1) % galleryData.images.length;
      setSelectedImgIndex(nextIndex);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      const prevIndex =
        (selectedImgIndex - 1 + galleryData.images.length) % galleryData.images.length;
      setSelectedImgIndex(prevIndex);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {galleryData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {galleryData.subtitle}
          </h2>
        </div>

        {/* 画像グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryData.images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* ホバー時のオーバーレイ */}
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                  <p className="text-sm font-medium tracking-wide">
                    {image.caption}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs border border-white/60 rounded-full font-light bg-white/10 backdrop-blur-xs">
                    拡大表示
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 拡大表示モーダル */}
      {selectedImgIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-55 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          {/* 閉じるボタン */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/80 hover:text-white cursor-pointer"
            aria-label="閉じる"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 前へボタン */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-xs cursor-pointer select-none"
            aria-label="前へ"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* コンテンツエリア */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center space-y-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryData.images[selectedImgIndex].url}
              alt={galleryData.images[selectedImgIndex].caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            />
            <p className="text-white text-base tracking-wider font-light text-center px-4">
              {galleryData.images[selectedImgIndex].caption}
            </p>
          </div>

          {/* 次へボタン */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-xs cursor-pointer select-none"
            aria-label="次へ"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
