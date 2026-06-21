import React from "react";
import shopInfoData from "@/content/shop-info.json";

export const ShopInfo = () => {
  return (
    <section id="shop-info" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* セクションタイトル */}
        <div className="text-center space-y-2">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {shopInfoData.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-wider">
            {shopInfoData.subtitle}
          </h2>
        </div>

        {/* コンテンツレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* 左側: 店舗詳細テキスト (12カラム中5カラム) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stone-850 border-b border-stone-100 pb-4 tracking-wide">
                {shopInfoData.shopName}
              </h3>
              
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">住所</h4>
                  <p>{shopInfoData.address}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">電話番号</h4>
                  <p className="text-primary font-semibold hover:opacity-85">
                    <a href={`tel:${shopInfoData.tel.replace(/-/g, "")}`}>
                      {shopInfoData.tel}
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">メールアドレス</h4>
                  <p>{shopInfoData.email}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">営業時間</h4>
                  <p>{shopInfoData.hours}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">定休日</h4>
                  <p>{shopInfoData.closed}</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">アクセス</h4>
                  <p className="text-xs sm:text-sm">{shopInfoData.access}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側: Google Map埋め込み (12カラム中7カラム) */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] w-full rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <iframe
              src={shopInfoData.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${shopInfoData.shopName}の地図`}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;
