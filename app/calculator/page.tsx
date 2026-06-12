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

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Landed Cost Calculator
        </h1>

        <div className="border border-gray-800 rounded-2xl p-8">

          <div className="grid gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Product Price (₹)
              </label>

              <input
                type="number"
                value={productPrice}
                onChange={(e) =>
                  setProductPrice(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Shipping Cost (₹)
              </label>

              <input
                type="number"
                value={shipping}
                onChange={(e) =>
                  setShipping(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Import Duty (%)
              </label>

              <input
                type="number"
                value={duty}
                onChange={(e) =>
                  setDuty(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                GST (%)
              </label>

              <input
                type="number"
                value={gst}
                onChange={(e) =>
                  setGst(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Insurance (₹)
              </label>

              <input
                type="number"
                value={insurance}
                onChange={(e) =>
                  setInsurance(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Handling Fee (₹)
              </label>

              <input
                type="number"
                value={handling}
                onChange={(e) =>
                  setHandling(Number(e.target.value))
                }
                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white"
              />
            </div>

          </div>

        </div>

        <div className="mt-10 border border-green-500 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Cost Breakdown
          </h2>

          <div className="space-y-3 text-lg">

            <p>
              Product Price:
              <span className="float-right">
                ₹{productPrice.toLocaleString()}
              </span>
            </p>

            <p>
              Shipping:
              <span className="float-right">
                ₹{shipping.toLocaleString()}
              </span>
            </p>

            <p>
              Duty ({duty}%):
              <span className="float-right">
                ₹{dutyAmount.toLocaleString()}
              </span>
            </p>

            <p>
              GST ({gst}%):
              <span className="float-right">
                ₹{gstAmount.toLocaleString()}
              </span>
            </p>

            <p>
              Insurance:
              <span className="float-right">
                ₹{insurance.toLocaleString()}
              </span>
            </p>

            <p>
              Handling:
              <span className="float-right">
                ₹{handling.toLocaleString()}
              </span>
            </p>

          </div>

          <hr className="my-6 border-gray-700" />

          <div className="text-center">

            <h3 className="text-3xl font-bold text-green-400">
              Total Landed Cost
            </h3>

            <p className="text-5xl font-bold mt-4">
              ₹{total.toLocaleString()}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}