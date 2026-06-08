type Props = {
  country: string;
  productPrice: number;
  shipping: number;
  importCharges: number;
  gst: number;
};

export default function LandedCostCard({
  country,
  productPrice,
  shipping,
  importCharges,
  gst,
}: Props) {
  const total =
    productPrice +
    shipping +
    importCharges +
    gst;

  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        {country}
      </h2>

      <p>Product: ₹{productPrice.toLocaleString()}</p>
      <p>Shipping: ₹{shipping.toLocaleString()}</p>
      <p>Import: ₹{importCharges.toLocaleString()}</p>
      <p>GST: ₹{gst.toLocaleString()}</p>

      <hr className="my-4" />

      <h3 className="text-xl font-bold">
        Total: ₹{total.toLocaleString()}
      </h3>
    </div>
  );
}