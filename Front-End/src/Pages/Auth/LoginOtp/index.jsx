import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import notify from "../../../Utils/notify";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slice/AuthSlice";

export default function LoginOtp({ phoneNumber, changePhone, changePageType }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTime, setResendTime] = useState(120);
  const dispatch = useDispatch();
  const formatTime = () => {
    const min = Math.floor(resendTime / 60);
    const sec = resendTime % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };
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
      if (response?.success) {
        changePageType("otp");
        setResendTime(120);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
 
    if (resendTime <= 0) return;

    const timer = setInterval(() => {
      setResendTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetchData("auth/login-otp", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, code }),
      });

      notify(
        response?.data?.success ? "success" : "error",
        response?.data?.message,
      );

      if (response?.data?.success) {
        dispatch(login(response?.data?.data));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-lg shadow-blue-500/30">
            <span className="text-2xl text-white">📩</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white">
            Login with OTP
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Enter the verification code sent to your phone
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              readOnly
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              OTP Code
            </label>
            <input
              type="text"
              value={code}
              placeholder="Enter OTP code..."
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500/40"
            />
          </div>

          <button
            type="button"
            onClick={resendCode}
            disabled={resendTime > 0}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-slate-200 transition duration-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {resendTime > 0 ? `Resend in ${formatTime()}` : "Resend Code"}
          </button>

          <button
            disabled={loading || !phoneNumber || !code}
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="pt-2 text-center">
            <span
              onClick={() => changePageType("password")}
              className="cursor-pointer text-sm font-medium text-cyan-300 transition hover:text-white"
            >
              Login with password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
