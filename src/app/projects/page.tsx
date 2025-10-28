export default function Projects() {
  const projects = [
    "35 Villas in UAQ – Ajmal Makan City",
    "20 Villas in Sharjah – Al Hanoo Contracting",
    "Bulgari Villas, Jumeira – Innova Build",
    "KIZAD Headquarters – Ali & Sons Contracting",
    "Yasmina School, Abu Dhabi – Tornado GC LLC",
  ];
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Our Projects</h1>
      <ul className="list-disc pl-6 text-slate-700 space-y-2">
        {projects.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </section>
  );
}
