import "./globals.css";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Al Amwaj Building Maintenance EST.",
  description: "False Ceiling & Gypsum Works in the UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen text-slate-900`}>
        {/* ===== GLOBAL BACKGROUND IMAGE ===== */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/hero.png" // main site background image (in /public)
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* navy overlay */}
          <div className="absolute inset-0 bg-[#0B2042]/55" />
          {/* white fade at top */}
          <div className="absolute inset-x-0 top-0 h-[28vh] bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* LOGO + COMPANY NAME */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png" // logo file in /public
                alt="Al Amwaj Logo"
                className="h-12 w-auto -my-2" // larger logo without enlarging header
              />
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Al Amwaj Building Maintenance EST.
              </Link>
            </div>

            {/* NAVIGATION LINKS */}
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

              {/* HIRING BUTTON */}
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

        {/* ===== PAGE CONTENT ===== */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Al Amwaj Building Maintenance EST.</p>
            <div className="flex gap-6">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
