export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          ❤️ Favorite Products
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-red-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold">
              📱 iPhone 17 Pro
            </h2>

            <p className="text-gray-400 mt-2">
              Saved Product
            </p>
          </div>

          <div className="border border-red-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold">
              💻 MacBook Air
            </h2>

            <p className="text-gray-400 mt-2">
              Saved Product
            </p>
          </div>

          <div className="border border-red-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold">
              ☕ Vietnam Coffee
            </h2>

            <p className="text-gray-400 mt-2">
              Saved Product
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}