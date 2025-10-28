import Image from "next/image";

export default function Projects() {
  const projects = [
    // Larger showcase images
    { title: "KIZAD Headquarters", client: "Ali & Sons", img: "/hq.png", size: "large" },
    { title: "Residential Apartments", client: "Ajmal Makan City", img: "/apartment.png", size: "large" },

    // Smaller, zoomed-in gallery images
    { title: "Bulgari Villas, Jumeira", client: "Innova Build", img: "/bulgari.png", size: "small" },
    { title: "Palm Jumeirah Villas", client: "Private", img: "/villa.png", size: "small" },
    { title: "Luxury Interior Fit-out", client: "Private", img: "/interior.png", size: "small" },
    { title: "Retail & Mall Wing", client: "Main Contractor", img: "/mall.png", size: "small" },
    { title: "School Campus Block", client: "Developer", img: "/school.png", size: "small" },
    { title: "Corporate Office Floors", client: "Multiple", img: "/office.png", size: "small" },
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
          Explore a curated gallery of our completed works — from high-end villas and interior fit-outs to
          large commercial developments, each project reflects our attention to detail and quality.
        </p>
      </section>

      {/* Gallery grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Showroom</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-lg transition-shadow ${
                p.size === "large" ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  p.size === "large"
                    ? "h-[320px] sm:h-[380px] md:h-[420px]"
                    : "h-[220px] sm:h-[260px] md:h-[300px]"
                }`}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  // smaller images are zoomed-in using object-[position]
                  className={`object-cover transition-transform duration-700 ${
                    p.size === "small"
                      ? "scale-110 group-hover:scale-125 object-center"
                      : "group-hover:scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Caption */}
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
