import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import fetchData from "../../../Utils/fetchData";
import DiscountCard from "./DiscountCard";

export default function DiscountProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData(
          "product-variants?sort=-discountPercent&limit=10&populate=productId",
        );
        console.log("aaa", response?.data);
        setProducts(response?.data|| []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 md:px-8 lg:px-12">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-xl">
              Best Deals
            </span>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Discount Products
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
              Hot offers with a premium card style and smooth shopping feel.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-5">
          <Swiper
            spaceBetween={24}
            freeMode={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            className="discount-products-swiper"
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {products?.map((pr) => (
              <SwiperSlide key={pr?._id} className="pb-14">
                <DiscountCard
                  id={pr?._id}
                  ratingCount={pr?.productId?.ratingCount}
                  avgRating={pr?.productId?.avgRating}
                  title={pr?.productId?.title}
                  description={pr?.productId?.description}
                  image={pr?.productId?.images?.at(0)}
                  quantity={pr?.quantity}
                  price={pr?.price}
                  discountPercent={pr?.discountPercent}
                  priceAfterDiscount={pr?.priceAfterDiscount}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
