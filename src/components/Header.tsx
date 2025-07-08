"use client";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">DevFolio</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Dashboard
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Login
        </a>
      </nav>
    </header>
  );
}
