import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          GlobalBuy India
        </Link>

        <div className="flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/countries">
            Countries
          </Link>

          <Link href="/compare">
            Compare
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/faq">
            FAQ
          </Link>

          <Link href="/admin">
            Admin
          </Link> 

          <Link href="/calculator">
            Calculator
          </Link>

          <Link href="/global-markets">
            Global Markets
          </Link>

        </div>

      </div>
    </nav>
  );
}