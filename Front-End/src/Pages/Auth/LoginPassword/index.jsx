import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slice/AuthSlice";
import fetchData from "../../../Utils/fetchData";
import notify from "../../../Utils/notify";

export default function LoginPassword({
  phoneNumber,
  changePhone,
  changePageType,
}) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const resendCode = async () => {
    try {
      const response = await fetchData("auth/resend-code", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber }),
      });
      notify(response?.success ? "success" : "error", response?.message);
      if (response?.data?.success) {
        changePageType("otp");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetchData("auth/login-password", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      notify(
        response?.success ? "success" : "error",
        response?.message
      );

      if (response?.success) {
        dispatch(login(response?.data));;
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 shadow-lg shadow-fuchsia-500/30">
            <span className="text-2xl text-white">🔐</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Enter Password
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Log in securely to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Phone Number
            </label>
            <input
              type="text"
              readOnly
              value={phoneNumber}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-violet-400 focus:bg-white/10 focus:ring-2 focus:ring-violet-500/40"
            />
          </div>

          <button
            disabled={loading || !phoneNumber || !password}
            className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <span
            onClick={resendCode}
            className="cursor-pointer font-medium text-violet-300 transition hover:text-white"
          >
            Login with OTP
          </span>

          <span
            onClick={() => changePageType("forgot")}
            className="cursor-pointer font-medium text-pink-300 transition hover:text-white"
          >
            Forgot password?
          </span>
        </div>
      </div>
    </div>
  );
}