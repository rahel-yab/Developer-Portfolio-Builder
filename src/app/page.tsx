export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
        AI-powered Developer Portfolio Builder
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mb-8">
        Build your own stunning developer portfolio in minutes. Leverage smart
        templates, AI-powered suggestions, and modern design to showcase your
        skills and projects effortlessly.
      </p>
      <button className="px-8 py-3 bg-black text-white rounded-lg text-lg font-semibold shadow hover:bg-gray-800 transition">
        Get Started
      </button>
    </main>
  );
}
