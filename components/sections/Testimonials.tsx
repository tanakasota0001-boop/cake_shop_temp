import React from "react";
import testimonialsData from "@/content/testimonials.json";

export const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`h-3.5 w-3.5 ${i < rating ? "text-amber-400 fill-current" : "text-stone-200 fill-current"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-stone-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mx-auto">{testimonialsData.title}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-4">
            {testimonialsData.subtitle}
          </h2>
        </div>

        {/* カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-5"
            >
              {/* 引用符 */}
              <svg className="w-8 h-8 text-primary/20 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* 本文 */}
              <p className="text-stone-600 text-[0.9rem] leading-relaxed flex-grow">
                {review.comment}
              </p>

              {/* フッター */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{review.name}</p>
                  <p className="text-stone-400 text-xs mt-0.5">{review.ageGroup}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                  <span className="text-stone-300 text-[0.65rem] tracking-wide">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
