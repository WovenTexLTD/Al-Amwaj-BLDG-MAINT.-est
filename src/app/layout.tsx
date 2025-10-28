import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Al Amwaj Building Maintenance",
  description: "False Ceiling & Gypsum Works in the UAE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        {/* Header / Navigation */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">Al Amwaj</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="font-medium px-3 py-1.5 rounded-md bg-slate-900 text-white">
                Get a Quote
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Al Amwaj Building Maintenance</p>
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
