import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-10 text-white shadow-2xl shadow-black/20 backdrop-blur-md sm:px-6 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]" />

      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl font-extrabold text-cyan-400 shadow-lg shadow-cyan-500/10 sm:h-28 sm:w-28 sm:text-5xl">
          404
        </div>

        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Oops! Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          The page you are looking for doesn’t exist, may have been moved, or the
          link might be broken.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
          >
            <FiHome className="text-base" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
          >
            <FiArrowLeft className="text-base" />
            Go Back
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10">
            <FiSearch className="mx-auto text-2xl text-cyan-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Search Again</h3>
            <p className="mt-2 text-sm text-slate-300">
              Try searching for the product or page you need.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-lg hover:shadow-violet-500/10">
            <FiHome className="mx-auto text-2xl text-violet-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Visit Home</h3>
            <p className="mt-2 text-sm text-slate-300">
              Head back to the homepage and explore more.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10">
            <FiArrowLeft className="mx-auto text-2xl text-emerald-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Return Back</h3>
            <p className="mt-2 text-sm text-slate-300">
              Go back to the previous page and continue browsing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}