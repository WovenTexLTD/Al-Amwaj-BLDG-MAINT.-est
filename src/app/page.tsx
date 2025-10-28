import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO with background image + navy overlay */}
      <section className="relative overflow-hidden rounded-3xl border min-h-[520px]">
        {/* background image */}
        <Image
          src="/hero.jpg"
          alt="Al Amwaj project site"
          fill
          priority
          className="object-cover"
        />
        {/* navy tint overlay */}
        <div className="absolute inset-0 bg-[#0B2042]/60" />

        {/* content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 p-8 md:p-12 text-white">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase/7 opacity-80">
              False Ceilings & Gypsum Works
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Precision ceilings, delivered on time.
            </h1>
            <p className="mt-4 text-white/90">
              We design, supply, and install high-quality gypsum and ceiling systems for
              residential, commercial, and institutional projects across the UAE.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="px-5 py-2.5 rounded-md bg-white text-[#0B2042] hover:opacity-90">
                Get a Quote
              </Link>
              <Link href="/projects" className="px-5 py-2.5 rounded-md border border-white/40 hover:bg-white/10">
                View Projects
              </Link>
            </div>

            {/* trust bar */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-white/70">Trusted by</p>
              <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-3">
                {["Ajmal Makan", "Al Hanoo", "Innova", "Ali & Sons", "Tornado"].map((name) => (
                  <div
                    key={name}
                    className="h-9 rounded-md border border-white/30 text-white/80 text-xs flex items-center justify-center backdrop-blur-sm bg-white/10"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* empty right column keeps layout balanced on wide screens */}
          <div className="hidden md:block" />
        </div>

        {/* subtle bottom gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2042]/40 to-transparent" />
      </section>

      {/* SERVICES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0B2042]">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Design Coordination", p: "Shop drawings, site details, contractor coordination." },
            { t: "Supply & Installation", p: "Gypsum ceilings, partitions, acoustic systems." },
            { t: "Quality & Handover", p: "QA/QC, snag resolution, timely delivery." },
          ].map((card) => (
            <div key={card.t} className="p-6 rounded-2xl bg-white border hover:shadow-sm transition">
              <h3 className="font-medium">{card.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0B2042]">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "35 Villas in UAQ", c: "Ajmal Makan City" },
            { t: "Bulgari Villas, Jumeira", c: "Innova Build" },
            { t: "KIZAD Headquarters", c: "Ali & Sons Contracting" },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl overflow-hidden border bg-white">
              <div className="h-36 bg-slate-100 flex items-center justify-center text-slate-400">(image)</div>
              <div className="p-4">
                <h3 className="font-medium">{p.t}</h3>
                <p className="text-sm text-slate-600">{p.c}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/projects" className="inline-block text-sm text-[#0B2042] hover:underline">
          See all projects →
        </Link>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">Have drawings or a BOQ ready?</h3>
          <p className="text-slate-600">Share your scope and we’ll send a clear, timely proposal.</p>
        </div>
        <Link href="/contact" className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90">
          Request a Proposal
        </Link>
      </section>
    </div>
  );
}
