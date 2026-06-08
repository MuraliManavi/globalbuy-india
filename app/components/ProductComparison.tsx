type CountryPrice = {
  country: string;
  flag: string;
  price: number;
};

export default function ProductComparison({
  countries,
}: {
  countries: CountryPrice[];
}) {
  const sorted = [...countries].sort((a, b) => a.price - b.price);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {sorted.map((item, index) => (
        <div
          key={item.country}
          className="border border-gray-800 p-4 rounded-xl mb-4"
        >
          <div className="flex justify-between">
            <span>
              {item.flag} {item.country}
            </span>

            <span>₹{item.price.toLocaleString()}</span>
          </div>

          {index === 0 && (
            <p className="text-green-400 mt-2">
              🥇 Best Value Country
            </p>
          )}
        </div>
      ))}
    </div>
  );
}