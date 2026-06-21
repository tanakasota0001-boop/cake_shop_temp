"use client";

import React, { useState } from "react";
import faqData from "@/content/faq.json";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mx-auto">{faqData.title}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-4">
            {faqData.subtitle}
          </h2>
        </div>

        {/* アコーディオン */}
        <div className="space-y-2">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-primary/30 bg-white" : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-stone-800 font-medium text-sm sm:text-base tracking-wide pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-45" : "bg-stone-100 text-stone-400"}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[400px]" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm sm:text-base text-stone-500 leading-relaxed border-t border-stone-100 pt-4 whitespace-pre-line">
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
