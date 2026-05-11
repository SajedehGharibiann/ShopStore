import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardCategory({ id, image, title }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${id}/${title.replaceAll(" ", "-")}`)}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      <div className="relative h-[340px] w-full overflow-hidden">
        <img
          src={import.meta.env.VITE_FILE_URL + image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl transition duration-700 group-hover:scale-150" />
        <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl transition duration-700 group-hover:scale-150" />

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div>
            <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
              Category
            </span>
          </div>

          <div>
            <h3 className="max-w-[80%] text-2xl font-extrabold capitalize text-white drop-shadow-lg">
              {title}
            </h3>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-white/75 transition duration-300 group-hover:text-white">
                Explore Collection
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-900 transition duration-500 group-hover:rotate-45 group-hover:scale-110">
                ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
