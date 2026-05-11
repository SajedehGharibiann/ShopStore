import React from "react";
import { CiLogin, CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const cartLength = useSelector((state) => state.cart.items).length;
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <Link to="/" className="w-fit">
            <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent sm:text-3xl">
              E-commerce
            </h1>
          </Link>

          <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
            <li>
              <Link
                to="/about"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/products/all/all-category"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:w-auto lg:justify-end">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
            />
            <div>{/* search result */}</div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <div className="relative">
              <button
                onClick={() => navigate("/cart")}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <CiShoppingCart />
              </button>

              {cartLength > 0 && (
                <span className="absolute -right-1 -top-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-1 text-xs font-bold text-white shadow-md">
                  {cartLength}
                </span>
              )}
            </div>

            {token ? (
              <button
                onClick={() => navigate("/profile")}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <CiUser />
              </button>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/30"
              >
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}