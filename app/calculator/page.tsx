"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);

  const duty = (price + shipping) * 0.10;
  const gst = (price + shipping + duty) * 0.18;

  const total =
    price +
    shipping +
    duty +
    gst;

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10">
        Import Cost Calculator
      </h1>

      <div className="space-y-4 max-w-lg">

        <input
          type="number"
          placeholder="Product Price"
          className="w-full p-3 border rounded"
          onChange={(e) =>
            setPrice(Number(e.target.value))
          }
        />

        <input
          type="number"
          placeholder="Shipping Cost"
          className="w-full p-3 border rounded"
          onChange={(e) =>
            setShipping(Number(e.target.value))
          }
        />

        <div className="mt-6 space-y-2">

          <p>Duty: ₹{duty.toFixed(0)}</p>

          <p>GST: ₹{gst.toFixed(0)}</p>

          <p className="font-bold text-2xl">
            Total Cost: ₹{total.toFixed(0)}
          </p>

        </div>

      </div>
    </main>
  );
}