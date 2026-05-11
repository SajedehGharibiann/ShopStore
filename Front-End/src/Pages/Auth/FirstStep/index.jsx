import React, { useState } from "react";
import fetchData from "../../../Utils/fetchData";
import notify from "../../../Utils/notify";

export default function FirstStep({
  phoneNumber,
  changePhone,
  changePageType,
}) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetchData("auth", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber }),
      });
      notify(response?.success ? "success" : "error", response?.message);
      if (response?.success) {
        changePageType(response?.data?.passwordExist ? "password" : "otp");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg">
            <span className="text-2xl text-white">📱</span>
          </div>

          <h2 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Enter your phone number to continue
          </p>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => changePhone(e.target.value)}
            placeholder="Enter phone number..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-indigo-400 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>

        <button
          disabled={loading || !phoneNumber}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Please wait..." : "Continue"}
        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          Secure login with your phone number
        </p>
      </form>
    </div>
  );
}
