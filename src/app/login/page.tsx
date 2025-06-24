"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const login = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setResult(res.ok ? data.message : data.error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200">
      <div className="backdrop-blur-xl bg-white/50 shadow-2xl border border-white/30 rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          ✨ Welcome Back
        </h1>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white/70 backdrop-blur border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/70 backdrop-blur border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin"
            />
          </div>

          <button
            onClick={login}
            className="w-full py-2 rounded-xl text-white font-bold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:scale-[1.02]"
          >
            🚀 Login
          </button>

          {result && (
            <div className="text-center text-sm text-red-600 font-medium mt-2">
              {result}
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          API Endpoint: <span className="font-mono">{process.env.NEXT_PUBLIC_BACKEND_URL}</span>
        </p>
      </div>
    </div>
  );
}
