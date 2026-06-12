import Link from "next/link";
import { countries } from "../data/countries";

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Countries
        </h1>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/countries/${country.id}`}
              className="
                border
                border-gray-800
                rounded-xl
                p-6
                hover:border-blue-500
                transition
              "
            >
              <h2 className="text-2xl font-bold mb-2">
                {country.flag} {country.name}
              </h2>

              <p className="text-gray-400">
                Currency: {country.currency}
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Famous For:
                </p>

                <div className="mt-2 flex flex-wrap gap-2">

                  {country.famousFor
                    ?.slice(0, 3)
                    .map((item) => (
                      <span
                        key={item}
                        className="
                          text-xs
                          border
                          border-gray-700
                          px-2
                          py-1
                          rounded-full
                        "
                      >
                        {item}
                      </span>
                    ))}

                </div>
              </div>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}