export default function CategoriesPage() {
  const categories = [
    "Electronics",
    "Laptops",
    "Gaming",
    "Fashion",
    "Home Appliances",
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Categories
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="border border-gray-800 rounded-xl p-6"
          >
            {category}
          </div>
        ))}
      </div>
    </main>
  );
}