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

    const offers = product.offers
      .map((offer: any) => ({
        ...offer,
        total:
          offer.price +
          offer.shipping +
          offer.duty +
          offer.gst,
      }))
      .sort((a: any, b: any) => a.total - b.total);

    return offers[0];
  };

  const best1 = getBestDeal(product1);
  const best2 = getBestDeal(product2);

  const cheapestProduct =
    best1 &&
    best2 &&
    best1.total < best2.total
      ? {
          name: product1?.name,
          total: best1.total,
          country: best1.country,
        }
      : {
          name: product2?.name,
          total: best2?.total,
          country: best2?.country,
        };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Compare Products
        </h1>

        <div className="mb-10 border border-blue-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-3">
            Product Comparison Summary
          </h2>

          <p className="text-gray-300">
            Compare products across countries and
            discover the lowest landed cost.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div>

            <label className="block mb-2 font-semibold">
              Product 1
            </label>

            <select
              value={product1Id}
              onChange={(e) =>
                setProduct1Id(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-900
                border
                border-gray-700
                text-white
              "
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

            <label className="block mb-2 font-semibold">
              Product 2
            </label>

            <select
              value={product2Id}
              onChange={(e) =>
                setProduct2Id(e.target.value)
              }
              className="
                w-full
                p-4
                rounded-xl
                bg-gray-900
                border
                border-gray-700
                text-white
              "
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

        {cheapestProduct && (
          <div className="mb-10 border border-green-500 rounded-xl p-6">

            <h2 className="text-2xl font-bold text-green-400 mb-3">
              🏆 Cheapest Product
            </h2>

            <p className="text-xl">
              {cheapestProduct.name}
            </p>

            <p className="mt-2">
              Best Country: {cheapestProduct.country}
            </p>

            <p className="mt-2 text-2xl font-bold">
              ₹{cheapestProduct.total?.toLocaleString()}
            </p>

          </div>
        )}

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-800 rounded-xl">

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

                  <td className="p-4 font-bold">
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

                  <td className="p-4 font-bold">
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