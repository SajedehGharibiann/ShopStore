import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import CardCategory from "./CardCategory";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData("categories?limit=10&page=1");
        console.log(response);
        setCategories(response?.data || []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-16 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-xl">
            Featured Categories
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Discover premium collections with a bold modern layout and luxury
            shopping feel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories?.map((cat) => (
            <CardCategory
              key={cat?._id}
              id={cat?._id}
              title={cat?.title}
              image={cat?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}