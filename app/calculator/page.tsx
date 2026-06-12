"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [productPrice, setProductPrice] = useState(50000);
  const [shipping, setShipping] = useState(3000);
  const [duty, setDuty] = useState(20);
  const [gst, setGst] = useState(18);
  const [insurance, setInsurance] = useState(500);
  const [handling, setHandling] = useState(250);

  const dutyAmount = (productPrice * duty) / 100;

  const gstAmount =
    ((productPrice + shipping + dutyAmount) * gst) / 100;

  const total =
    productPrice +
    shipping +
    dutyAmount +
    gstAmount +
    insurance +
    handling;

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Landed Cost Calculator
        </h1>

        <div className="grid gap-4">

          <input
            type="number"
            value={productPrice}
            onChange={(e) =>
              setProductPrice(Number(e.target.value))
            }
            placeholder="Product Price"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            value={shipping}
            onChange={(e) =>
              setShipping(Number(e.target.value))
            }
            placeholder="Shipping Cost"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            value={duty}
            onChange={(e) =>
              setDuty(Number(e.target.value))
            }
            placeholder="Import Duty %"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            value={gst}
            onChange={(e) =>
              setGst(Number(e.target.value))
            }
            placeholder="GST %"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            value={insurance}
            onChange={(e) =>
              setInsurance(Number(e.target.value))
            }
            placeholder="Insurance"
            className="p-4 rounded-xl text-black"
          />

          <input
            type="number"
            value={handling}
            onChange={(e) =>
              setHandling(Number(e.target.value))
            }
            placeholder="Handling Fee"
            className="p-4 rounded-xl text-black"
          />

        </div>

        <div className="mt-10 border border-green-500 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Cost Breakdown
          </h2>

          <p>Product Price: ₹{productPrice.toLocaleString()}</p>

          <p>Shipping: ₹{shipping.toLocaleString()}</p>

          <p>
            Duty ({duty}%): ₹
            {dutyAmount.toLocaleString()}
          </p>

          <p>
            GST ({gst}%): ₹
            {gstAmount.toLocaleString()}
          </p>

          <p>
            Insurance: ₹
            {insurance.toLocaleString()}
          </p>

          <p>
            Handling: ₹
            {handling.toLocaleString()}
          </p>

          <hr className="my-4 border-gray-700" />

          <h3 className="text-3xl font-bold text-green-400">
            Total Landed Cost
          </h3>

          <p className="text-4xl font-bold mt-3">
            ₹{total.toLocaleString()}
          </p>

        </div>

      </div>

    </main>
  );
}