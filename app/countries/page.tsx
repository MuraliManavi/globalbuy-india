import Link from "next/link";

const countries = [
  {
    id: "uae",
    name: "🇦🇪 UAE",
  },
  {
    id: "usa",
    name: "🇺🇸 USA",
  },
  {
    id: "japan",
    name: "🇯🇵 Japan",
  },
];

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Countries
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Link
            key={country.id}
            href={`/countries/${country.id}`}
            className="border border-gray-800 rounded-xl p-6 hover:border-white"
          >
            <h2 className="text-2xl font-bold">
              {country.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}