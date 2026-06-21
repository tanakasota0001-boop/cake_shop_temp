import React from "react";
import orderData from "@/content/order.json";

export const HowToOrder = () => {
  return (
    <section id="order" className="py-28 sm:py-36 bg-[#fdfbf7]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <span className="section-eyebrow mx-auto">{orderData.title}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-4">
            {orderData.subtitle}
          </h2>
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">

          {orderData.steps.map((step, index) => (
            <div key={index} className="relative flex flex-col lg:flex-row">
              {/* ステップカード */}
              <div className="flex-1 px-8 lg:px-10 py-10 lg:py-0 text-center flex flex-col items-center">
                {/* 番号 */}
                <div className="relative mb-6">
                  <span className="text-[5rem] font-bold text-stone-100 leading-none select-none absolute -top-4 left-1/2 -translate-x-1/2 z-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.stepNumber}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>

              {/* 矢印 (最後以外) */}
              {index < orderData.steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center self-center">
                  <svg className="w-5 h-5 text-stone-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* モバイル用縦矢印 */}
              {index < orderData.steps.length - 1 && (
                <div className="flex lg:hidden justify-center py-4">
                  <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
