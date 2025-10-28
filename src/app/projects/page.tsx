import Image from "next/image";

export default function Projects() {
  const projects = [
    { title: "KIZAD Headquarters", client: "Ali & Sons", img: "/hq.png" },
    { title: "Residential Apartments", client: "Ajmal Makan City", img: "/apartment.png" },
    { title: "Bulgari Villas, Jumeira", client: "Innova Build", img: "/bulgari.png" },
    { title: "Palm Jumeirah Villas", client: "Private", img: "/villa.png" },
    { title: "Luxury Interior Fit-out", client: "Private", img: "/interior.png" },
    { title: "Retail & Mall Wing", client: "Main Contractor", img: "/mall.png" },
    { title: "School Campus Block", client: "Developer", img: "/school.png" },
    { title: "Corporate Office Floors", client: "Multiple", img: "/office.png" },
  ];

  return (
    <div className="space-y-12">
      {/* Intro card */}
      <section className="rounded-3xl bg-white border p-8 md:p-12">
        <span className="inline-block text-xs font-semibold tracking-widest text-[#0B2042]/70 uppercase">
          Projects
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
          A selection of our recent work.
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          From commercial towers and residential developments to luxury villas and interiors, our teams deliver
          clean finishes, reliable coordination, and on-time handovers across the UAE.
        </p>
      </section>

      {/* Gallery grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Showroom</h2>

        {/* Bigger boxes: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Caption */}
              <figcaption className="p-6">
                <div className="font-medium text-[#0B2042] text-lg">{p.title}</div>
                <div className="text-sm text-slate-600">{p.client}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
