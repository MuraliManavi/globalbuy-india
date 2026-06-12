"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Countries", href: "/countries" },
    { name: "Compare", href: "/compare" },
    { name: "Calculator", href: "/calculator" },
    { name: "Global Markets", href: "/global-markets" },
    { name: "❤️ Favorites", href: "/favorites" },
    { name: "⭐ Watchlist", href: "/watchlist" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-400"
        >
          GlobalBuy India
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-6
                py-4
                border-b
                border-gray-800
                hover:bg-gray-900
              "
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
}