"use client";

import React, { useState } from "react";
import faqData from "@/content/faq.json";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {faqData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {faqData.subtitle}
          </h2>
        </div>

        {/* アコーディオンリスト */}
        <div className="space-y-4">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200 rounded-2xl overflow-hidden bg-stone-50/50 hover:bg-stone-50/80 transition-colors duration-300"
              >
                {/* 質問部分 (ヘッダー) */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-stone-800 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 tracking-wide text-sm sm:text-base">
                    Q. {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2">
                    {isOpen ? (
                      // マイナスボタン
                      <svg
                        className="h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      // プラスボタン
                      <svg
                        className="h-5 w-5 text-stone-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* 回答部分 (コンテンツ) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-stone-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-sm sm:text-base text-stone-600 leading-relaxed bg-white whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
