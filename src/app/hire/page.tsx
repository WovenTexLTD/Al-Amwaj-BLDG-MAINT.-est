import Link from "next/link";

export default function Hire() {
  const roles = [
    {
      title: "Site Engineer – Gypsum & Ceilings",
      desc: "Responsible for site supervision, material planning, and coordination with the main contractor to ensure project delivery and quality compliance.",
    },
    {
      title: "Project Coordinator",
      desc: "Assists in scheduling, procurement follow-up, documentation, and overall coordination between site and office teams.",
    },
    {
      title: "Foreman / Supervisor",
      desc: "Leads technician teams, ensures safety compliance, manages daily targets, and maintains quality workmanship on site.",
    },
    {
      title: "Gypsum & Ceiling Technicians",
      desc: "Experienced in ceiling installation, partitions, and finishing works according to technical specifications and drawings.",
    },
    {
      title: "Helpers & Support Staff",
      desc: "Assist installation teams, maintain tools, and ensure clean, safe work environments.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="rounded-3xl bg-white border p-8 md:p-12 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
          Careers
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
          Join our team at Al Amwaj
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We’re always looking for talented, hardworking professionals to join our growing
          team. Whether you’re an experienced site engineer or a skilled technician, Al Amwaj
          offers opportunities to work on high-quality projects across the UAE.
        </p>
      </section>

      {/* Roles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white text-center">
          Positions We Commonly Hire
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl bg-white border hover:shadow-sm transition text-left"
            >
              <h3 className="font-medium text-[#0B2042]">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Message + CTA */}
      <section className="rounded-2xl border bg-white p-8 md:p-10 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-[#0B2042]">Interested in joining us?</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          If you’d like to apply for a role or be considered for future opportunities,
          please reach out to our team through the contact form. Include your CV and mention
          the position you’re interested in.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-2 px-6 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
