import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-400"
        >
          GlobalBuy India
        </Link>

        <div className="flex flex-wrap gap-6 text-sm md:text-base">

          <Link
            href="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-blue-400 transition"
          >
            Products
          </Link>

          <Link
            href="/countries"
            className="hover:text-blue-400 transition"
          >
            Countries
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-400 transition"
          >
            Compare
          </Link>

          <Link
            href="/calculator"
            className="hover:text-blue-400 transition"
          >
            Calculator
          </Link>

          <Link
            href="/global-markets"
            className="hover:text-blue-400 transition"
          >
            Global Markets
          </Link>

          <Link
            href="/favorites"
            className="hover:text-red-400 transition"
          >
            ❤️ Favorites
          </Link>

          <Link
            href="/watchlist"
            className="hover:text-yellow-400 transition"
          >
            ⭐ Watchlist
          </Link>

          <Link
            href="/faq"
            className="hover:text-blue-400 transition"
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </Link>

          <Link
            href="/admin"
            className="hover:text-blue-400 transition"
          >
            Admin
          </Link>

        </div>

      </div>

    </nav>
  );
}