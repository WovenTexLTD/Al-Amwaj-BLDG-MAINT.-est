// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Al Amwaj Building Maintenance EST.",
  description: "False ceilings, gypsum works, and partitions across the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen text-slate-900`}>
        {/* ===== Global background image with navy overlay ===== */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/hero.png" // background image in /public
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B2042]/55" />
          <div className="absolute inset-x-0 top-0 h-[28vh] bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* ===== Header / Nav ===== */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Logo + name */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png" // logo file in /public
                alt="Al Amwaj Logo"
                className="h-12 w-auto -my-2"
              />
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Al Amwaj Building Maintenance EST.
              </Link>
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm items-center">
              <Link href="/services" className="hover:text-[#0B2042] transition">
                Services
              </Link>
              <Link href="/projects" className="hover:text-[#0B2042] transition">
                Projects
              </Link>
              <Link href="/about" className="hover:text-[#0B2042] transition">
                About
              </Link>
              <Link
                href="/hire"
                className="font-medium px-3 py-1.5 rounded-md border border-[#0B2042] text-[#0B2042] hover:bg-[#0B2042] hover:text-white transition"
              >
                Hiring
              </Link>
              <Link
                href="/contact"
                className="font-medium px-3 py-1.5 rounded-md bg-[#0B2042] text-white hover:opacity-90 transition"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </header>

        {/* ===== Page content ===== */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* ===== Footer with contact info ===== */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
            {/* Brand / Copyright */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Al Amwaj Logo" className="h-8 w-auto" />
                <span className="font-semibold">
                  Al Amwaj Building Maintenance EST.
                </span>
              </div>
              <p className="text-slate-600">
                © {new Date().getFullYear()} Al Amwaj Building Maintenance EST. All
                rights reserved.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-[#0B2042] mb-2">Contact</h4>
              <ul className="space-y-1 text-slate-700">
                <li>
                  <span className="block">Office:</span>
                  <address className="not-italic">
                    Dubai, United Arab Emirates
                    <br />
                    Business Bay (replace with exact address)
                  </address>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+971500000000" className="text-[#0B2042] hover:underline">
                    +971 50 000 0000
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@alamwaj.com"
                    className="text-[#0B2042] hover:underline"
                  >
                    info@alamwaj.com
                  </a>
                </li>
                {/* Optional WhatsApp */}
                {/* <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B2042] hover:underline"
                  >
                    +971 50 000 0000
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Quick links / social */}
            <div>
              <h4 className="font-medium text-[#0B2042] mb-2">Links</h4>
              <ul className="space-y-1 text-slate-700">
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/your-company-slug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B2042] hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-slate-500">
                  <Link href="/privacy" className="hover:underline">
                    Privacy
                  </Link>{" "}
                  ·{" "}
                  <Link href="/terms" className="hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
