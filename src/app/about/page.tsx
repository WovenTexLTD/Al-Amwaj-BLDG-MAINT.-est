import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-16">
      {/* ===== HERO ===== */}
      <section className="rounded-3xl bg-white border p-8 md:p-12 text-center">
        <span className="inline-block text-M font-semibold tracking-widest text-[#0B2042]/70 uppercase">
          About Us
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B2042]">
          Building with precision, commitment, and trust.
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Since its establishment, Al Amwaj Building Maintenance EST. has specialized in delivering
          reliable false ceiling, gypsum, and partition works across the UAE. We pride ourselves on
          precise execution, strong coordination with main contractors, and a consistent track record
          of timely handovers.
        </p>
      </section>

      {/* ===== COMPANY OVERVIEW + IMAGES ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Who we are</h2>
          <p className="text-slate-100/90">
            Al Amwaj brings together skilled technicians, experienced supervisors, and project
            managers with decades of combined experience in ceiling and partition works. We
            collaborate closely with designers and consultants to achieve the aesthetic and
            functional results each project requires.
          </p>
          <p className="text-slate-100/90">
            Our company’s growth has been built on reliability, transparency, and a clear
            commitment to quality — values that have allowed us to partner with leading developers
            and contractors across the UAE.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border">
          <Image
            src="/about2.jpg"
            alt="Al Amwaj team working on site"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== SECOND IMAGE STRIP ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border">
          <Image
            src="/about1.jpg"
            alt="Ceiling works project"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Our Expertise</h2>
          <p className="text-slate-100/90">
            We have successfully completed a wide range of commercial, residential, and hospitality
            projects — from luxury villas to large-scale developments. Our focus is on technical
            precision, safety, and maintaining clean site execution standards.
          </p>
          <p className="text-slate-100/90">
            Whether handling gypsum ceilings, partitions, or acoustic assemblies, Al Amwaj delivers
            comprehensive solutions that meet international standards and local authority
            requirements.
          </p>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Our values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Reliability",
              desc: "We honor our commitments, maintain clear timelines, and deliver projects as promised.",
            },
            {
              title: "Quality",
              desc: "We use certified materials and conduct strict QA/QC at every stage of installation.",
            },
            {
              title: "Teamwork",
              desc: "Our success lies in our coordination — within our crews and with every client we serve.",
            },
          ].map((val) => (
            <div key={val.title} className="p-6 rounded-2xl bg-white border hover:shadow-sm transition">
              <h3 className="font-medium text-[#0B2042]">{val.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#0B2042]">Let’s build something exceptional.</h3>
          <p className="text-slate-600">
            Reach out to discuss upcoming projects or request our company profile.
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
