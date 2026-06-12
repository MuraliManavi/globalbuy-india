"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "./data/products";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-bold mb-6">
          GlobalBuy India
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Compare global prices and discover the best country
          to buy products from.
        </p>

        <div className="max-w-2xl mx-auto mb-10">

          <input
            type="text"
            placeholder="Search Products (iPhone, Coffee, Tea...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl text-black"
          />

          {search && (
            <div className="mt-4 space-y-3">

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                  >
                    <div className="border border-gray-800 rounded-xl p-4 hover:border-blue-500 transition text-left">
                      <h3 className="font-bold">
                        {product.name}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {product.category}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="border border-gray-800 rounded-xl p-4">
                  No products found
                </div>
              )}

            </div>
          )}

        </div>

        <div className="flex justify-center gap-4">

          <Link
            href="/products"
            className="bg-white text-black px-6 py-3 rounded-xl"
          >
            Browse Products
          </Link>

          <Link
            href="/countries"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Explore Countries
          </Link>

        </div>

      </section>

      {/* Why GlobalBuy India */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Why GlobalBuy India?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-800 p-6 rounded-xl">
            🌎 Compare Countries
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            🚚 DHL Shipping Support
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            💰 Find Best Prices
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              1️⃣ Search Product
            </h3>

            <p>
              Find products from international markets.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              2️⃣ Compare Countries
            </h3>

            <p>
              Compare prices from UAE, USA, Japan and more.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              3️⃣ Find Best Deal
            </h3>

            <p>
              Discover the cheapest overall option.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              4️⃣ Estimate Cost
            </h3>

            <p>
              Include shipping, duties and taxes.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              5️⃣ Buy From Seller
            </h3>

            <p>
              Purchase directly from trusted international sellers.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              6️⃣ Ship via DHL
            </h3>

            <p>
              Receive your order in India through DHL.
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    🔥 Today's Best Deals
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="border border-green-500 p-6 rounded-xl">
      <h3 className="text-xl font-bold">
        iPhone 17 Pro
      </h3>

      <p className="mt-2">
        🏆 UAE
      </p>

      <p className="text-green-400">
        ₹89,500
      </p>
    </div>

    <div className="border border-green-500 p-6 rounded-xl">
      <h3 className="text-xl font-bold">
        MacBook Air
      </h3>

      <p className="mt-2">
        🏆 USA
      </p>

      <p className="text-green-400">
        ₹98,200
      </p>
    </div>

    <div className="border border-green-500 p-6 rounded-xl">
      <h3 className="text-xl font-bold">
        Ceylon Tea
      </h3>

      <p className="mt-2">
        🏆 Sri Lanka
      </p>

      <p className="text-green-400">
        ₹1,030
      </p>
    </div>

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    📈 Trending Products
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="border border-gray-800 p-6 rounded-xl">
      📱 iPhone 17 Pro
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      💻 MacBook Air
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      ☕ Vietnam Coffee
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🍵 Ceylon Tea
    </div>

  </div>

</section>
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    🌍 Top Countries
  </h2>

  <div className="grid md:grid-cols-5 gap-6 text-center">

    <div className="border border-gray-800 p-6 rounded-xl">
      🥇 UAE
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🥈 Vietnam
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🥉 Japan
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🇱🇰 Sri Lanka
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🇳🇵 Nepal
    </div>

  </div>

</section>
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    🌍 Top Countries
  </h2>

  <div className="grid md:grid-cols-5 gap-6 text-center">

    <div className="border border-gray-800 p-6 rounded-xl">
      🥇 UAE
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🥈 Vietnam
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🥉 Japan
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🇱🇰 Sri Lanka
    </div>

    <div className="border border-gray-800 p-6 rounded-xl">
      🇳🇵 Nepal
    </div>

  </div>

</section>


      {/* Featured Countries */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Markets
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <Link href="/countries/uae">
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              🇦🇪 UAE
            </div>
          </Link>

          <Link href="/countries/vietnam">
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              🇻🇳 Vietnam
            </div>
          </Link>

          <Link href="/countries/japan">
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              🇯🇵 Japan
            </div>
          </Link>

          <Link href="/countries/sri-lanka">
            <div className="border border-gray-800 p-6 rounded-xl text-center">
              🇱🇰 Sri Lanka
            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}