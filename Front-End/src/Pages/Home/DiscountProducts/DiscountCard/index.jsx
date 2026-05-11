import React from "react";

export default function DiscountCard({
  id,
  ratingCount,
  avgRating,
  title,
  description,
  image,
  quantity,
  price,
  discountPercent,
  priceAfterDiscount,
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
      <div className="relative h-[290px] overflow-hidden">
        <img
          src={import.meta.env.VITE_FILE_URL + image || "https://via.placeholder.com/600x600"}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 z-20 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          -{discountPercent || 0}%
        </div>

        <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {quantity > 0 ? `${quantity} left` : "Out of stock"}
        </div>

        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300 backdrop-blur-md">
          <span>★</span>
          <span>{avgRating || 0}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/70">{ratingCount || 0}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-1 text-lg font-extrabold capitalize tracking-tight text-white md:text-xl">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-[44px] text-sm leading-6 text-slate-400">
          {description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white">
                ${priceAfterDiscount || 0}
              </span>
              <span className="text-sm text-slate-500 line-through">
                ${price || 0}
              </span>
            </div>

            <p className="mt-1 text-xs font-medium text-emerald-300">
              Save {discountPercent || 0}% today
            </p>
          </div>

          <button className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-900 transition duration-300 hover:scale-105 hover:bg-slate-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}