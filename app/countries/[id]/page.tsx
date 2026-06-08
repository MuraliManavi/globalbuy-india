const countries = {
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    currency: "AED",
    exchangeRate: "1 AED ≈ ₹23",
    shipping: "DHL Available",
    products: [
      "iPhone",
      "MacBook",
      "PlayStation",
      "Luxury Watches",
    ],
  },

  usa: {
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    exchangeRate: "1 USD ≈ ₹86",
    shipping: "DHL Available",
    products: [
      "Laptops",
      "Graphics Cards",
      "iPhone",
      "Gaming Consoles",
    ],
  },

  japan: {
    name: "Japan",
    flag: "🇯🇵",
    currency: "JPY",
    exchangeRate: "1 JPY ≈ ₹0.60",
    shipping: "DHL Available",
    products: [
      "Cameras",
      "Gaming",
      "Electronics",
      "Automotive Parts",
    ],
  },
};

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const country =
    countries[id as keyof typeof countries];

  if (!country) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1>Country Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          {country.flag} {country.name}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Currency
            </h2>

            <p>{country.currency}</p>
            <p>{country.exchangeRate}</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Shipping
            </h2>

            <p>{country.shipping}</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">
              Top Imports
            </h2>

            {country.products.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

        </div>

      </div>

    </main>
  );
}