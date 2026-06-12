import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-bold mb-6">
          GlobalBuy India
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          Compare global prices and discover the best country
          to buy products from.
        </p>

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

    </main>
  );
}