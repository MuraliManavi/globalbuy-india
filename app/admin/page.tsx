export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="space-y-4">

        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Add Product
        </button>

        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Add Country
        </button>

        <button className="bg-white text-black px-6 py-3 rounded-xl">
          Update Prices
        </button>

      </div>
    </main>
  );
}