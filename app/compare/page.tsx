import LandedCostCard from "@/app/components/LandedCostCard";

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Compare Landed Cost
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <LandedCostCard
          country="🇦🇪 UAE"
          productPrice={81500}
          shipping={2500}
          importCharges={4000}
          gst={1500}
        />

        <LandedCostCard
          country="🇺🇸 USA"
          productPrice={83000}
          shipping={3000}
          importCharges={4200}
          gst={1600}
        />

        <LandedCostCard
          country="🇯🇵 Japan"
          productPrice={84200}
          shipping={2800}
          importCharges={4300}
          gst={1700}
        />

      </div>

    </main>
  );
}