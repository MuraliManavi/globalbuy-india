import { products } from "../../data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1>Product Not Found</h1>
      </main>
    );
  }

  const offers = product.offers
    .map((offer) => ({
      ...offer,
      total:
        offer.price +
        offer.shipping +
        offer.duty +
        offer.gst,
    }))
    .sort((a, b) => a.total - b.total);

  const bestDeal = offers[0];

  const mostExpensive = offers[offers.length - 1];

const savings =
  mostExpensive.total - bestDeal.total;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-gray-400 mb-10">
          Category: {product.category}
        </p>

        <h2 className="text-3xl font-bold mb-6">
          Country Comparison
        </h2>

        <div className="mb-10 border border-green-500 rounded-xl p-6 bg-green-950/20">

  <h2 className="text-2xl font-bold text-green-400 mb-2">
    🏆 Best Deal Found
  </h2>

  <p className="text-lg">
    Buy from <strong>{bestDeal.country}</strong>
  </p>

  <p className="mt-2">
    Total Cost: ₹{bestDeal.total.toLocaleString()}
  </p>

  <p className="mt-2 text-green-300 font-bold">
    You Save ₹{savings.toLocaleString()}
  </p>

</div>

        {/* Ranking Table */}

        <div className="mb-10 overflow-x-auto">
          <table className="w-full border border-gray-800 rounded-xl">

            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-3 text-left">
                  Rank
                </th>

                <th className="p-3 text-left">
                  Country
                </th>

                <th className="p-3 text-left">
                  Total Cost
                </th>
              </tr>
            </thead>

            <tbody>
              {offers.map((offer, index) => (
                <tr
                  key={offer.country}
                  className="border-b border-gray-800"
                >
                  <td className="p-3">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </td>

                  <td className="p-3">
                    {offer.country}
                  </td>

                  <td className="p-3 font-bold">
                    ₹{offer.total.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        

        {/* Country Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {offers.map((offer) => (
            <div
              key={offer.country}
              className={`
                border rounded-xl p-6
                ${
                  offer.country === bestDeal.country
                    ? "border-green-500"
                    : "border-gray-800"
                }
              `}
            >

              <h3 className="text-2xl font-bold mb-4">
                {offer.country}
              </h3>

              <p>
                Price: ₹{offer.price.toLocaleString()}
              </p>

              <p>
                Shipping: ₹{offer.shipping.toLocaleString()}
              </p>

              <p>
                Duty: ₹{offer.duty.toLocaleString()}
              </p>

              <p>
                GST: ₹{offer.gst.toLocaleString()}
              </p>

              <hr className="my-4 border-gray-700" />

              <p className="text-xl font-bold">
                Total: ₹{offer.total.toLocaleString()}
              </p>

              {offer.country === bestDeal.country && (
                <p className="mt-3 text-green-400 font-bold">
                  🏆 Best Deal
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

      <div className="mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Available Sellers
  </h2>

  <div className="flex flex-wrap gap-4">

    <a
      href="https://www.amazon.in"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-yellow-500
        text-black
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      🛒 Amazon
    </a>

    <a
      href="https://www.ebay.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-blue-600
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      🛒 eBay
    </a>

    <a
      href="https://www.aliexpress.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-red-600
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      🛒 AliExpress
    </a>

    <a
      href="https://www.alibaba.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-orange-600
        px-5
        py-3
        rounded-xl
        font-semibold
      "
    >
      🛒 Alibaba
    </a>

  </div>

</div>
    </main>
  );
}