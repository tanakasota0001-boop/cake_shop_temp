import React from "react";
import orderData from "@/content/order.json";

export const HowToOrder = () => {
  return (
    <section id="order" className="py-24 sm:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {orderData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {orderData.subtitle}
          </h2>
        </div>

        {/* ステップフロー */}
        <div className="relative">
          {/* PCでの接続ライン */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-stone-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {orderData.steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-stone-100 shadow-sm relative group hover:shadow-md transition-shadow duration-300"
              >
                {/* ステップ番号バッジ */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg tracking-wider shadow-md group-hover:scale-115 transition-transform duration-300">
                  {step.stepNumber}
                </div>

                <div className="mt-4 space-y-3">
                  <h3 className="text-xl font-bold text-stone-850 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
