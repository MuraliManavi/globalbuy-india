export default function GlobalMarketsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          🌍 Global Markets
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              🇻🇳 Vietnam
            </h2>

            <ul className="space-y-2">
              <li>📱 Smartphones</li>
              <li>☕ Coffee</li>
              <li>🌶 Black Pepper</li>
              <li>👟 Footwear</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              🇱🇰 Sri Lanka
            </h2>

            <ul className="space-y-2">
              <li>🍵 Ceylon Tea</li>
              <li>🌿 Cinnamon</li>
              <li>💎 Sapphires</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              🇳🇵 Nepal
            </h2>

            <ul className="space-y-2">
              <li>🧣 Pashmina</li>
              <li>🧶 Wool Carpets</li>
              <li>🎨 Handicrafts</li>
            </ul>
          </div>

        </div>

      </div>

    </main>
  );
}