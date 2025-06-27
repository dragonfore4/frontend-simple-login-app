export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-b from-dark-soft via-dark-mute to-dark-soft text-white text-center min-h-100vh">
      {/* Logo / App Name */}
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Tangerine<span className="text-orange-400">.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 max-w-xl mb-10">
        The fastest way to manage your tasks, goals, and ideas. Simple. Elegant.
        Powerful.
      </p>

      {/* Call to Action */}
      <a
        href="/login"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition-all"
      >
        Get Started
      </a>

      {/* Optional footer */}
      <footer className="mt-20 text-sm text-gray-500">
        © 2025 Tangerine App. All rights reserved.
      </footer>
    </div>
  );
}
