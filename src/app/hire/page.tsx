import Link from "next/link";

type Role = {
  title: string;
  location: string;
  type: string;
  summary: string;
  details: string[];
  emailSubject: string;
};

export default function Hire() {
  const roles: Role[] = [
    {
      title: "Site Engineer – Gypsum & Ceilings",
      location: "Dubai, UAE",
      type: "Full-time",
      summary:
        "Oversee daily site activities for gypsum ceilings/partitions, coordinate with MEP and main contractor, ensure QA/QC and handover.",
      details: [
        "3+ years experience in false ceilings/gypsum works",
        "Reading drawings, setting out, and site coordination",
        "Method statements, ITP/QA documentation, snag closure",
        "Fluent English; Arabic/Hindi/Bengali a plus",
      ],
      emailSubject: "Application – Site Engineer (Gypsum & Ceilings)",
    },
    {
      title: "Project Coordinator",
      location: "Dubai, UAE",
      type: "Full-time",
      summary:
        "Plan materials, track progress, coordinate subcontractors, and align program with main contractor requirements.",
      details: [
        "2+ years coordination experience in fit-out/ceilings",
        "Strong Excel and scheduling (e.g., MS Project) skills",
        "Material tracking, documentation, and site reporting",
      ],
      emailSubject: "Application – Project Coordinator",
    },
    {
      title: "Foreman – False Ceilings",
      location: "UAE-wide",
      type: "Full-time",
      summary:
        "Lead technician teams, ensure workmanship quality, solve on-site issues, and maintain safe, clean work areas.",
      details: [
        "5+ years on-site experience with gypsum ceilings/partitions",
        "Team leadership and practical problem solving",
        "Safety-first approach; quality finishes under time pressure",
      ],
      emailSubject: "Application – Foreman (False Ceilings)",
    },
  ];

  const mail = "info@yourdomain.com"; // <-- change to your hiring email

  return (
    <div className="space-y-16">
      {/* Intro */}
      <section className="rounded-3xl bg-white border p-8 md:p-12">
        <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
          Careers
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
          Join Al Amwaj — build with precision and pride.
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          We’re growing our delivery teams for ceilings, partitions, and acoustic systems. If you’re
          hands-on, reliable, and care about quality, we’d love to meet you.
        </p>
      </section>

      {/* Open roles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Open roles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <details key={r.title} className="rounded-2xl bg-white border p-6 group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[#0B2042]">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {r.location} • {r.type}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{r.summary}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">
                    View details
                  </span>
                </div>
              </summary>

              <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-slate-700">
                {r.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href={`mailto:${mail}?subject=${encodeURIComponent(r.emailSubject)}&body=${encodeURIComponent(
                    `Hello Al Amwaj,\n\nI’d like to apply for the ${r.title} role.\n\nName:\nPhone:\nYears of Experience:\nVisa Status:\nEarliest Start:\n\nAttached: CV/Resume\n\nBest regards,\n`
                  )}`}
                  className="inline-block px-4 py-2 rounded-md bg-[#0B2042] text-white hover:opacity-90"
                >
                  Apply via Email
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Why work with us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              h: "Reliable programs",
              p: "Clear site schedules and realistic targets so teams can do quality work safely.",
            },
            {
              h: "Growth & training",
              p: "Learn modern ceiling systems, acoustic assemblies, and coordination best practices.",
            },
            {
              h: "Strong teamwork",
              p: "Supportive culture with experienced engineers and foremen on every project.",
            },
          ].map((b) => (
            <div key={b.h} className="p-6 rounded-2xl bg-white border">
              <h3 className="font-medium text-[#0B2042]">{b.h}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to apply */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">How to apply</h3>
          <p className="text-slate-600">
            Email your CV and a short note about your experience. Mention the role you’re applying for.
          </p>
        </div>
        <a
          href={`mailto:${mail}?subject=${encodeURIComponent("General Application – Al Amwaj")}`}
          className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90"
        >
          Send CV
        </a>
      </section>
    </div>
  );
}
