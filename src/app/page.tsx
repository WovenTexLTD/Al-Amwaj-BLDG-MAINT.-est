import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Precision False Ceilings & Gypsum Works
          </h1>
          <p className="mt-4 text-slate-600">
            Al Amwaj Building Maintenance specializes in delivering reliable and
            high-quality false ceiling and gypsum solutions across the UAE. From
            design to installation, we ensure precision, safety, and timely delivery.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="px-4 py-2 bg-slate-900 text-white rounded-md">
              Get a Quote
            </Link>
            <Link href="/projects" className="px-4 py-2 border rounded-md">
              View Projects
            </Link>
          </div>
        </div>
        <div className="aspect-video rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
          (Project image placeholder)
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Design Coordination", text: "Shop drawings and on-site planning." },
          { title: "Supply & Installation", text: "Expert installation of ceiling systems." },
          { title: "Quality & Handover", text: "Inspection and on-time delivery." },
        ].map((s) => (
          <div key={s.title} className="p-6 border rounded-2xl">
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
