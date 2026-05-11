import React from "react";
import { FiUsers, FiAward, FiShoppingBag, FiShield } from "react-icons/fi";

export default function About() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-10 text-white shadow-2xl shadow-black/20 backdrop-blur-md sm:px-6 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            About Us
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We build a better shopping experience
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Welcome to our E-commerce platform, where style, quality, and
            convenience come together. We are passionate about delivering
            premium products and a smooth online shopping journey for every
            customer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-cyan-500/10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Founded with a vision to make online shopping easier and more
              enjoyable, our platform offers carefully selected products that
              fit modern lifestyles. We focus on quality, affordability, and
              excellent customer service so every purchase feels worth it.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Our goal is simple: provide customers with trusted products,
              secure shopping, and fast support while creating a brand people
              love to return to.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
              <FiShoppingBag className="text-3xl text-cyan-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Premium Products
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Carefully selected products that combine quality, value, and
                style.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10">
              <FiUsers className="text-3xl text-purple-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Customer First
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We put customer satisfaction at the center of everything we do.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10">
              <FiShield className="text-3xl text-emerald-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Secure Shopping
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Safe payments and trusted service for a worry-free experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-400/30 hover:shadow-lg hover:shadow-pink-500/10">
              <FiAward className="text-3xl text-pink-500" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Quality Promise
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We aim to deliver excellence with every product and every order.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-extrabold text-cyan-500">10K+</h3>
            <p className="mt-2 text-sm text-slate-300">Happy Customers</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-extrabold text-purple-500">500+</h3>
            <p className="mt-2 text-sm text-slate-300">Premium Products</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-3xl font-extrabold text-emerald-500">99%</h3>
            <p className="mt-2 text-sm text-slate-300">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}