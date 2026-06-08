const products = {
  "iphone-17-pro": {
    name: "iPhone 17 Pro",
    image: "https://placehold.co/800x500",
    prices: [
      { country: "🇦🇪 UAE", price: 81500 },
      { country: "🇺🇸 USA", price: 83000 },
      { country: "🇯🇵 Japan", price: 84200 },
    ],
  },

  "playstation-6": {
    name: "PlayStation 6",
    image: "https://placehold.co/800x500",
    prices: [
      { country: "🇯🇵 Japan", price: 42000 },
      { country: "🇺🇸 USA", price: 43500 },
      { country: "🇦🇪 UAE", price: 44500 },
    ],
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product =
    products[id as keyof typeof products];

  if (!product) {
    return (
      <main className="p-10">
        <h1>Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl mb-8 w-full max-w-3xl"
      />

      <h1 className="text-5xl font-bold mb-8">
        {product.name}
      </h1>

      <div className="space-y-4">

        {product.prices.map((item, index) => (
          <div
            key={item.country}
            className="border border-gray-800 rounded-xl p-6"
          >
            <p className="text-2xl">
              {index === 0 ? "🥇 " : ""}
              {item.country}
            </p>

            <p className="text-xl">
              ₹{item.price.toLocaleString()}
            </p>

            <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}

      </div>

    </main>
  );
}