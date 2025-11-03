import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-white border p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE: TEXT */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
            False Ceilings & Gypsum Works
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#0B2042]">
      Crafting Spaces with Precision Since 1996
          </h1>
          <p className="mt-4 text-slate-600">
            We design, supply, and install high-quality gypsum and ceiling systems for
            residential, commercial, and institutional projects baseed in the UAE and across the middle east.
            Coordinated execution, clean finishes, and reliable handover.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-md border hover:bg-white/60"
            >
              View Projects
            </Link>
          </div>

          {/* TRUST BAR */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Trusted by
            </p>
            <div className="mt-3 grid grid-cols-3 md:grid-cols-5 gap-3">
              {["Ajmal Makan", "Al Hanoo", "Innova", "Ali & Sons", "Tornado"].map(
                (name) => (
                  <div
                    key={name}
                    className="h-9 rounded-md border text-slate-500 text-xs flex items-center justify-center bg-slate-50"
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE BOX */}
        <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/residential.png" // or any other image you want to display here
            alt="Ongoing Al Amwaj Project"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Design Coordination",
              p: "Shop drawings, site details, contractor coordination.",
            },
            {
              t: "Supply & Installation",
              p: "Gypsum ceilings, partitions, acoustic systems.",
            },
            {
              t: "Quality & Handover",
              p: "QA/QC, snag resolution, timely delivery.",
            },
          ].map((card) => (
            <div
              key={card.t}
              className="p-6 rounded-2xl bg-white border hover:shadow-sm transition"
            >
              <h3 className="font-medium">{card.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.p}</p>
            </div>
          ))}
        </div>
      </section>

     {/* FEATURED PROJECTS */}
<section className="space-y-6">
  <h2 className="text-2xl font-semibold tracking-tight text-white">
    Featured Projects
  </h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        t: "KIZAD Headquarters, Abu Dhabi",
        c: "Ali & Sons Contracting",
        img: "/hq.png",
      },
      {
        t: "Residential Apartments, Dubai",
        c: "Ajmal Makan City",
        img: "/apartment.png",
      },
      {
        t: "Bulgari Villas, Jumeira",
        c: "Innova Build",
        img: "/bulgari.png",
      },
    ].map((p) => (
      <div
        key={p.t}
        className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition"
      >
        <div className="relative h-40 md:h-48">
          <img
            src={p.img}
            alt={p.t}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-[#0B2042]">{p.t}</h3>
          <p className="text-sm text-slate-600">{p.c}</p>
        </div>
      </div>
    ))}
  </div>

  <Link
    href="/projects"
    className="inline-block text-sm text-white hover:underline"
  >
    See all projects →
  </Link>
</section>

      {/* CTA */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">
            Have drawings or a BOQ ready?
          </h3>
          <p className="text-slate-600">
            Share your scope and we’ll send a clear, timely proposal.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-md bg-[#0B2042] text-white hover:opacity-90"
        >
         Contact Us
        </Link>
      </section>
    </div>
  );
}
