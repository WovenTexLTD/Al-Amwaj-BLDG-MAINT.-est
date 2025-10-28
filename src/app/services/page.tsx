import Link from "next/link";

export default function Services() {
  return (
    <div className="space-y-16">
      {/* ===== HERO SECTION ===== */}
      <section className="rounded-3xl bg-white border p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE — TEXT */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
            Services
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
            False ceilings & gypsum solutions—built to spec, delivered on time.
          </h1>
          <p className="mt-4 text-slate-600">
            Al Amwaj provides coordinated, high-quality ceiling and partition works for
            residential, commercial, and institutional projects across the UAE. Our teams
            align closely with main contractors to avoid rework and keep programs on schedule.
          </p>
        </div>

        {/* RIGHT SIDE — IMAGE AREA */}
        <div className="relative h-[260px] md:h-[340px] rounded-2xl overflow-hidden bg-slate-100 border">
          <img
            src="/services-hero.png"
            alt="Services hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "False Ceiling Installation",
              desc:
                "Supply & install of gypsum board ceilings, MF/C-channel systems, concealed and exposed grids, bulkheads and feature ceilings according to project specs.",
            },
            {
              title: "Gypsum Partitions",
              desc:
                "Fire-rated and acoustic stud partitions, shaft walls, moisture-resistant boards for wet areas, doors & openings coordination, trims and protection.",
            },
            {
              title: "Acoustic Systems",
              desc:
                "Acoustic ceilings and wall linings, perforated boards, mineral fiber tiles, baffles and rafts; NRC/SRC targets achieved with tested assemblies.",
            },
            {
              title: "Maintenance & Repairs",
              desc:
                "Patch and repair, water-damage replacement, ceiling access panels, repainting readiness, and post-handover support.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-white border hover:shadow-sm transition"
            >
              <h3 className="font-medium text-[#0B2042]">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">Share your drawings or BOQ</h3>
          <p className="text-slate-600">We’ll review scope and send a clear, timely proposal.</p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90"
        >
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
