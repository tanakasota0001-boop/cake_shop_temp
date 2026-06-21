import React from "react";
import shopInfoData from "@/content/shop-info.json";

export const ShopInfo = () => {
  return (
    <section id="shop-info" className="py-28 sm:py-36 bg-[#fdfbf7]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-14">
          <span className="section-eyebrow mx-auto">{shopInfoData.title}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-wide mt-4">
            {shopInfoData.subtitle}
          </h2>
        </div>

        {/* レイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* 店舗情報 */}
          <div className="lg:col-span-4 space-y-0">
            <h3 className="text-xl font-bold text-stone-900 tracking-wide pb-5 border-b border-stone-200 mb-0">
              {shopInfoData.shopName}
            </h3>

            {[
              { label: "住所", value: shopInfoData.address },
              { label: "電話番号", value: shopInfoData.tel, isTel: true },
              { label: "メール", value: shopInfoData.email },
              { label: "営業時間", value: shopInfoData.hours },
              { label: "定休日", value: shopInfoData.closed },
              { label: "アクセス", value: shopInfoData.access, small: true },
            ].map((item, i) => (
              <div key={i} className="py-4 border-b border-stone-100 flex gap-4">
                <span className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-stone-400 flex-shrink-0 w-20 mt-0.5">
                  {item.label}
                </span>
                {item.isTel ? (
                  <a
                    href={`tel:${shopInfoData.tel.replace(/-/g, "")}`}
                    className="text-primary font-semibold hover:opacity-80 transition-opacity text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className={`text-stone-700 ${item.small ? "text-xs" : "text-sm"} leading-relaxed`}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="lg:col-span-8 h-[360px] lg:h-auto min-h-[360px] rounded-2xl overflow-hidden border border-stone-200">
            <iframe
              src={shopInfoData.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${shopInfoData.shopName}の地図`}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
