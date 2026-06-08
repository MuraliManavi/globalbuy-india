import Link from "next/link";

const products = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
  },
  {
    id: "macbook-air",
    name: "MacBook Air",
  },
  {
    id: "playstation-6",
    name: "PlayStation 6",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border border-gray-800 rounded-xl p-6 hover:border-white"
          >
            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}