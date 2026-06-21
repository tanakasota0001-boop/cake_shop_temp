import React from "react";
import testimonialsData from "@/content/testimonials.json";
import Card from "@/components/ui/Card";

export const Testimonials = () => {
  // 星評価の星アイコンを生成するヘルパー
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-amber-400 fill-current" : "text-stone-200"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {testimonialsData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {testimonialsData.subtitle}
          </h2>
        </div>

        {/* お客様の声カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.reviews.map((review, index) => (
            <Card key={index} className="flex flex-col h-full bg-stone-50 border border-stone-100 p-8 space-y-6">
              {/* レビューヘッダー（星評価と日付） */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-stone-400 text-xs tracking-wider">
                  {review.date}
                </span>
              </div>

              {/* レビューコメント本文 */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed flex-grow">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* 投稿者情報 */}
              <div className="border-t border-stone-200/60 pt-4 flex items-center justify-between">
                <span className="font-bold text-stone-800 text-sm tracking-wide">
                  {review.name}
                </span>
                <span className="text-stone-400 text-xs font-light">
                  {review.ageGroup}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
