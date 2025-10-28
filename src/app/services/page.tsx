import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "False Ceiling Installation",
      desc:
        "Supply & install of gypsum board ceilings, MF/C-channel systems, concealed/exposed grids, bulkheads and feature ceilings according to project specs.",
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
        "Patch & repair, water-damage replacement, ceiling access panels, repainting readiness, and post-handover support.",
    },
  ];

  const steps = [
    { k: "01", h: "Consult & Site Survey", p: "We review drawings/BOQ, visit site if needed, and align on program & access." },
    { k: "02", h: "Shop Drawings", p: "Layouts, sections and details coordinated with MEP, sprinklers and lighting." },
    { k: "03", h: "Supply & Install", p: "Materials delivered with batch records; install to spec with level/plumb checks." },
    { k: "04", h: "QA/QC", p: "Acoustic/fire assemblies verified; snag list closed before paint and handover." },
    { k: "05", h: "Handover", p: "As-builts and warranties submitted; post-handover maintenance available." },
  ];

  const brands = ["Knauf", "Gyproc", "Armstrong", "Owa", "Rockfon", "Saint-Gobain"];

  const faqs = [
    {
      q: "Do you handle shop drawings and coordination?",
      a: "Yes. We prepare coordinated ceiling/partition layouts, details, and sections aligned with MEP, sprinklers, and lighting.",
    },
    {
      q: "Can you meet acoustic or fire ratings?",
      a: "We install tested assemblies per manufacturer data sheets and submit method statements for approval.",
    },
    {
      q: "Which areas do you cover?",
      a: "UAE-wide. For large programs we stage crews to match site releases.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* HERO — white card with image area */}
      <section className="rounded-3xl bg-white border p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: text */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
            Services
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
            False ceilings & gypsum solutions—built to spec, delivered on time.
          </h1>
          <p className="mt-4 text-slate-600">
            Al Amwaj provides coordinated, high-quality ceiling and partition works for residential, commercial, and
            institutional projects across the UAE. Our teams align closely with main contractors to avoid rework and keep
            programs on schedule.
          </p>
        </div>
        {/* RIGHT: image box (put your image at /public/services-hero.png) */}
        <div className="relative h-[260px] md:h-[340px] rounded-2xl overflow-hidden bg-slate-100 border">
          <img src="/services-hero.png" alt="Services hero" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">What we do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white border hover:shadow-sm transition">
              <h3 className="font-medium text-[#0B2042]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Our process</h2>
        <ol className="grid md:grid-cols-5 gap-4">
          {steps.map((st) => (
            <li key={st.k} className="rounded-2xl bg-white border p-5">
              <div className="text-xs font-semibold text-[#0B2042]/70">{st.k}</div>
              <div className="mt-1 font-medium text-[#0B2042]">{st.h}</div>
              <p className="mt-2 text-sm text-slate-600">{st.p}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BRANDS / SYSTEMS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Systems we work with</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {brands.map((b) => (
            <div key={b} className="h-12 rounded-xl bg-white/90 border flex items-center justify-center text-sm text-slate-600">
              {b}
            </div>
          ))}
        </div>
        <p className="text-xs text-white/70">
          *Brand availability may vary by project; we install equivalent systems to specification upon approval.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl bg-white border p-4">
              <summary className="cursor-pointer font-medium text-[#0B2042]">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">Share your drawings or BOQ</h3>
          <p className="text-slate-600">We’ll review scope and send a clear, timely proposal.</p>
        </div>
        <Link href="/contact" className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90">
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
