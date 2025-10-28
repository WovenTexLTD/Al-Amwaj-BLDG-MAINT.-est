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
          Explore a curated gallery of completed projects — from commercial towers and
          residential developments to high-end villas and interiors. Each represents our
          commitment to precision and quality.
        </p>
      </section>

      {/* Showroom Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Showroom</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <figcaption className="p-4">
                <div className="font-medium text-[#0B2042]">{p.title}</div>
                <div className="text-sm text-slate-600">{p.client}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
