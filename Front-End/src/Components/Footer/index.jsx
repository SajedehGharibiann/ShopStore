import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent">
              E-commerce
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Discover premium products, amazing deals, and a seamless shopping
              experience built for modern users.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/30"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/30"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:text-white hover:shadow-lg hover:shadow-slate-700/30"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link className="transition hover:text-cyan-400" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-cyan-400" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-cyan-400" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-cyan-400" to="/">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="transition hover:text-cyan-400">FAQ</li>
              <li className="transition hover:text-cyan-400">
                Shipping & Returns
              </li>
              <li className="transition hover:text-cyan-400">
                Privacy Policy
              </li>
              <li className="transition hover:text-cyan-400">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 text-lg text-cyan-400" />
                <p>123 Market Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-lg text-cyan-400" />
                <p>support@ecommerce.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-lg text-cyan-400" />
                <p>+1 (234) 567-890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-500 md:flex-row">
          <p>© 2026 E-commerce. All rights reserved.</p>
          <p>
            Made with <span className="text-pink-500">❤</span> for modern shopping
          </p>
        </div>
      </div>
    </footer>
  );
}