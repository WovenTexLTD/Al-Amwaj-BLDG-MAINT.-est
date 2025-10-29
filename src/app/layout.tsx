// src/app/layout.tsx
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header"; // 👈 new mobile header component

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Al Amwaj Building Maintenance EST.",
  description:
    "False ceilings, gypsum works, and partitions across the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} min-h-screen text-slate-900 antialiased`}
      >
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

        {/* ===== Responsive Header (desktop + mobile) ===== */}
        <Header />

        {/* ===== Page content ===== */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* ===== Footer with contact info ===== */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
            {/* Brand / Copyright */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Al Amwaj Logo"
                  className="h-8 w-auto"
                />
                <span className="font-semibold">
                  Al Amwaj Building Maintenance EST.
                </span>
              </div>
              <p className="text-slate-600">
                © {new Date().getFullYear()} Al Amwaj Building Maintenance EST.
                All rights reserved.
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
                  <a
                    href="tel:+971500000000"
                    className="text-[#0B2042] hover:underline"
                  >
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
              </ul>
            </div>

            {/* Quick links / social */}
            <div>
              <h4 className="font-medium text-[#0B2042] mb-2">Links</h4>
              <ul className="space-y-1 text-slate-700">
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/al-amwaj-building-maintenance-est/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B2042] hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-slate-500">
                  <a href="/privacy" className="hover:underline">
                    Privacy
                  </a>{" "}
                  ·{" "}
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
