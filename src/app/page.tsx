import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO – full-width band, no card */}
      <section className="rounded-2xl bg-gradient-to-br from-[#EAF2FF] via-white to-[#F7FAFF] border">
        <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
              False Ceilings & Gypsum Works
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#0B2042]">
              Precision ceilings, delivered on time.
            </h1>
            <p className="mt-4 text-slate-600">
              We design, supply, and install high-quality gypsum and ceiling systems for
              residential, commercial, and institutional projects across the UAE. Coordinated
              execution, clean finishes, and reliable handover.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90">
                Get a Quote
              </Link>
              <Link href="/projects" className="px-5 py-2.5 rounded-md border hover:bg-white/60">
                View Projects
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-slate-500">Trusted by</p>
              <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-4">
                {["Ajmal Makan", "Al Hanoo", "Innova", "Ali & Sons", "Tornado"].map((name) => (
                  <div
                    key={name}
                    className="h-10 rounded-md bg-white border text-slate-500 text-xs flex items-center justify-center"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-2xl bg-slate-100 border min-h-[280px] md:min-h-[360px] flex items-center justify-center text-slate-400">
            (Add hero photo as <code>/public/hero.jpg</code>)
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid md:grid-cols-3 text-center border-t bg-white">
          {[
            { k: "15/120", v: "Technicians (available/capacity)" },
            { k: "On-Time", v: "Delivery & Handover" },
            { k: "UAE-Wide", v: "Residential & Commercial" },
          ].map((s) => (
            <div key={s.k} className="p-6">
              <div className="text-2xl font-semibold text-[#0B2042]">{s.k}</div>
              <div className="text-xs text-slate-500 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0B2042]">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Design Coordination", p: "Shop drawings and on-site planning with main contractors." },
            { t: "Supply & Installation", p: "Gypsum ceilings, partitions, and acoustic systems to spec." },
            { t: "Quality & Handover", p: "QA/QC, snag resolution, and timely delivery." },
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
      <
