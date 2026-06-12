import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Products
        </h1>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="
                border
                border-gray-800
                rounded-xl
                overflow-hidden
                hover:border-blue-500
                transition
              "
            >

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-48
                  object-cover
                "
              />

              <div className="p-6">

                <h2 className="text-xl font-bold mb-2">
                  {product.name}
                </h2>

                <p className="text-gray-400">
                  {product.category}
                </p>

                <div className="mt-4">

                  <p className="text-sm text-gray-500">
                    Available In:
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">

                    {product.offers
                      .slice(0, 3)
                      .map((offer) => (
                        <span
                          key={offer.country}
                          className="
                            text-xs
                            border
                            border-gray-700
                            px-2
                            py-1
                            rounded-full
                          "
                        >
                          {offer.country}
                        </span>
                      ))}

                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}