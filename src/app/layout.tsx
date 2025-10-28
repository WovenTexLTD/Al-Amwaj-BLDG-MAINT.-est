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
        {/* Full-page background (image + navy tint + top gradient) */}
        <div className="fixed inset-0 -z-10">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B2042]/55" />
          <div className="absolute inset-x-0 top-0 h-[28vh] bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Al Amwaj Logo" className="h-14 w-auto -my-2" />
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Al Amwaj Building Maintenance EST.
              </Link>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/services" className="hover:text-[#0B2042]">Services</Link>
              <Link href="/projects" className="hover:text-[#0B2042]">Projects</Link>
              <Link href="/about" className="hover:text-[#0B2042]">About</Link>
              <Link
                href="/contact"
                className="font-medium px-3 py-1.5 rounded-md bg-[#0B2042] text-white hover:opacity-90"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
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
