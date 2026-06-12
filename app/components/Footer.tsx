import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
      <div className="mb-4 flex justify-center gap-6">
        <Link
          href="/privacy-policy"
          className="hover:text-white transition"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          className="hover:text-white transition"
        >
          Terms & Conditions
        </Link>
      </div>

      <p>© 2026 GlobalBuy India. All Rights Reserved.</p>
    </footer>
  );
}