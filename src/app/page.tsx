import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">DevFolio</h1>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          Build your own developer portfolio with ease — powered by smart
          templates and AI suggestions.
        </p>
      </main>
    </>
  );
}
