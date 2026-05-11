import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
import notify from "../../Utils/notify";
import { logout, updateUser } from "../../Store/Slice/AuthSlice";

export default function Profile() {
  const { user, token } = useSelector((state) => state.auth);

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const dispatch = useDispatch();

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoadingUser(true);

    try {
      const response = await fetchData(`users/${user?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ fullName }),
      });

      if (response?.success) {
        dispatch(updateUser(response?.data));
      }

      notify(
        response?.success ? "success" : "error",
        response?.message
      );
    } catch (error) {
      notify("error", "Something went wrong while updating profile");
    } finally {
      setLoadingUser(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoadingPassword(true);

    try {
      const response = await fetchData(`users/change-password`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      notify(
        response?.success ? "success" : "error",
        response?.message
      );

      if (response?.success) {
        setOldPassword("");
        setNewPassword("");
      }
    } catch (error) {
      notify("error", "Something went wrong while changing password");
    } finally {
      setLoadingPassword(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-white md:px-8">
      <div className="absolute left-[-80px] top-[-80px] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-60px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
            Account Settings
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            My Profile
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Manage your personal information, secure your account, and control
            your session with a premium modern interface.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-3xl font-black text-white shadow-[0_12px_50px_rgba(168,85,247,0.45)]">
                  {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-emerald-400" />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white">
                {user?.fullName || "User Name"}
              </h2>

              <p className="mt-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
                Active Account
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  User ID
                </p>
                <p className="mt-2 break-all text-sm font-medium text-white/90">
                  {user?._id}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Session
                </p>
                <p className="mt-2 text-sm font-medium text-emerald-300">
                  Authenticated
                </p>
              </div>

              <button
                onClick={() => dispatch(logout())}
                className="group mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm font-bold text-red-300 transition duration-300 hover:scale-[1.01] hover:bg-red-500/20"
              >
                <span>Log Out</span>
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <form
              onSubmit={handleUpdateUser}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Personal Information
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Update your display name and keep your profile information up
                  to date.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-fuchsia-500/60 focus:ring-2 focus:ring-fuchsia-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loadingUser}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition duration-300 hover:scale-[1.02] hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingUser ? "Updating..." : "Update User"}
                </button>
              </div>
            </form>

            <form
              onSubmit={handleUpdatePassword}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Change Password
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Protect your account with a strong password and keep your
                  credentials secure.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Old Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loadingPassword}
                className="mt-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingPassword ? "Changing..." : "Change Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}