"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About" },
  { href: "/hire",   label: "Hiring" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change or resize
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Spacer for fixed header height (safe on iOS) */}
      <div className="h-16 lg:h-20" />

      <header
        className="
          fixed inset-x-0 top-0 z-50
          bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70
          border-b border-slate-200
        "
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png" // your logo file in /public
                alt="Al Amwaj"
                width={36}
                height={36}
                className="h-9 w-9 lg:h-10 lg:w-10"
                priority
              />
              <span
                className="
                  text-[15px] xs:text-base lg:text-lg font-semibold tracking-tight text-[#0B2042]
                  line-clamp-1
                "
              >
                Al Amwaj Building Maintenance EST.
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition
                      ${active ? "text-[#0B2042]" : "text-slate-600 hover:text-[#0B2042]"}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA (desktop) */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-[#0B2042] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300"
            >
              <svg
                className={`h-5 w-5 text-slate-700 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-5 w-5 text-slate-700 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`
            lg:hidden overflow-hidden transition-[max-height]
            ${open ? "max-h-[420px]" : "max-h-0"}
          `}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`w-full rounded-md px-3 py-3 text-[15px] font-medium
                      ${active ? "bg-slate-100 text-[#0B2042]" : "text-slate-700 hover:bg-slate-50"}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#0B2042] px-3 py-3 text-[15px] font-medium text-white"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
