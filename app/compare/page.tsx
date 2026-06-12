"use client";

import { useState } from "react";
import { products } from "../data/products";

export default function ComparePage() {
  const [product1Id, setProduct1Id] = useState(
    products[0]?.id || ""
  );

  const [product2Id, setProduct2Id] = useState(
    products[1]?.id || ""
  );

  const product1 = products.find(
    (p) => p.id === product1Id
  );

  const product2 = products.find(
    (p) => p.id === product2Id
  );

  const getBestDeal = (product: any) => {
    if (!product) return null;

    const offers = product.offers.map((offer: any) => ({
      ...offer,
      total:
        offer.price +
        offer.shipping +
        offer.duty +
        offer.gst,
    }));

    return offers.sort(
      (a: any, b: any) => a.total - b.total
    )[0];
  };

  const best1 = getBestDeal(product1);
  const best2 = getBestDeal(product2);

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Compare Products
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div>
            <label className="block mb-2">
              Product 1
            </label>

            <select
              value={product1Id}
              onChange={(e) =>
                setProduct1Id(e.target.value)
              }
              className="w-full p-3 rounded-xl text-black"
            >
              {products.map((product) => (
                <option
                  key={product.id}
                  value={product.id}
                >
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Product 2
            </label>

            <select
              value={product2Id}
              onChange={(e) =>
                setProduct2Id(e.target.value)
              }
              className="w-full p-3 rounded-xl text-black"
            >
              {products.map((product) => (
                <option
                  key={product.id}
                  value={product.id}
                >
                  {product.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-800">

            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-4 text-left">
                  Product
                </th>

                <th className="p-4 text-left">
                  Best Country
                </th>

                <th className="p-4 text-left">
                  Total Cost
                </th>
              </tr>
            </thead>

            <tbody>

              {product1 && best1 && (
                <tr className="border-b border-gray-800">

                  <td className="p-4">
                    {product1.name}
                  </td>

                  <td className="p-4">
                    🏆 {best1.country}
                  </td>

                  <td className="p-4">
                    ₹{best1.total.toLocaleString()}
                  </td>

                </tr>
              )}

              {product2 && best2 && (
                <tr>

                  <td className="p-4">
                    {product2.name}
                  </td>

                  <td className="p-4">
                    🏆 {best2.country}
                  </td>

                  <td className="p-4">
                    ₹{best2.total.toLocaleString()}
                  </td>

                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}