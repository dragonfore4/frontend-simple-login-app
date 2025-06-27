"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-4 bg-gradient-to-b from-dark-soft via-dark-mute to-dark-soft text-white">
      {/* Logo / App name */}
      <span className="text-2xl font-bold uppercase tracking-wide">
        Tangerine
      </span>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 font-medium capitalize text-gray-400">
        <li>
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/features" className="hover:text-white transition">
            Features
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-white transition">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
