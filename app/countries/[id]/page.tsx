import Link from "next/link";
import { countries } from "../../data/countries";
import { products } from "../../data/products";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const country = countries.find(
    (c) => c.id === id
  );

  if (!country) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1>Country Not Found</h1>
      </main>
    );
  }

  const countryProducts = products.filter((product) =>
    product.offers.some(
      (offer) =>
        offer.country.toLowerCase() ===
        country.name.toLowerCase()
    )
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          {country.flag} {country.name}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Currency
            </h2>

            <p>{country.currency}</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Famous For
            </h2>

            {country.famousFor.map((item) => (
              <p key={item}>
                • {item}
              </p>
            ))}
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Shipping
            </h2>

            <p>DHL Available</p>
          </div>

        </div>

        <h2 className="text-3xl font-bold mb-6">
          Products Available
        </h2>

        {countryProducts.length === 0 ? (
          <p className="text-gray-400">
            No products available yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {countryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
              >
                <div className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {product.category}
                  </p>

                  <button
                     className="border border-red-500 px-4 py-2 rounded-xl"
          >
                    ❤️ Save Product
                  </button>
                  <button
                    className="border border-yellow-500 px-4 py-2 rounded-xl"
            >
                    ⭐ Save Country
                  </button>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}