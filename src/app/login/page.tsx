"use client";
import { useState } from "react";
import { useLogger } from "@logtail/next";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const log = useLogger();

  const login = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      log.info("Login successful", { username });
      setResult(data.message);
    } else {
      log.error("Login failed", { status: res.status, error: data.error });
      setResult(data.error || "An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-dark-soft via-dark-mute to-dark-soft text-white text-center">
      {/* Logo / Title */}
      <h1 className="text-5xl font-extrabold tracking-tight mb-2">
        Tangerine<span className="text-orange-400">.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-base mb-10">Please login to continue</p>

      {/* Login Box */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full p-8 text-left transform hover:scale-[1.02] transition-all duration-300 ring-1 ring-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          ✨ Welcome Back
        </h2>

        <div className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white/90 text-black rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/90 text-black rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
              placeholder="admin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={login}
            className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:scale-[1.02] hover:shadow-xl"
          >
            🚀 Login
          </button>

          {/* Result */}
          {result && (
            <div className="text-center text-sm text-red-500 font-medium mt-2">
              {result}
            </div>
          )}
        </div>

        {/* Footer API Display */}
        <p className="mt-6 text-center text-xs text-gray-500">
          API Endpoint:{" "}
          <span className="font-mono">
            {process.env.NEXT_PUBLIC_BACKEND_URL}
          </span>
        </p>
      </div>

      {/* Optional footer */}
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Tangerine App. All rights reserved.
      </footer>
    </div>
  );
}
