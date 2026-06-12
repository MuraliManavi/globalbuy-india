export default function FAQPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">

        <div>
          <h2 className="text-2xl font-bold">
            What is GlobalBuy India?
          </h2>
          <p>
            A platform that helps Indian consumers compare
            international product prices and identify the best deals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Do you sell products directly?
          </h2>
          <p>
            No. Customers purchase directly from international sellers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            How is shipping calculated?
          </h2>
          <p>
            Shipping estimates are based on international logistics partners.
          </p>
        </div>

      </div>
    </main>
  );
}