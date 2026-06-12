export default function WatchlistPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          ⭐ Watchlist
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-yellow-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold">
              📱 iPhone 17 Pro
            </h2>

            <p className="mt-2">
              Waiting for better deal...
            </p>
          </div>

          <div className="border border-yellow-500 rounded-xl p-6">
            <h2 className="text-2xl font-bold">
              🇦🇪 UAE
            </h2>

            <p className="mt-2">
              Favorite Import Market
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}