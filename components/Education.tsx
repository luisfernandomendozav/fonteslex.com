import SectionHeading from "./SectionHeading";

const degrees = [
  {
    year: "2026",
    title: "Especialidad en Derecho de la Infancia y Justicia Familiar",
    org: "Instituto de Especialización Jurídica de la Barra Sonorense de Abogados, A.C.",
  },
  {
    year: "2018 — 2020",
    title: "Maestría en Derecho Corporativo",
    org: "Universidad La Salle · Hermosillo, Sonora",
  },
  {
    year: "2017",
    title: "Diplomado en Juicio de Amparo",
    org: "Suprema Corte de Justicia de la Nación",
  },
  {
    year: "2017",
    title: "Diplomado Acceso a la Justicia en Materia de Derechos Humanos",
    org: "Suprema Corte de Justicia de la Nación",
  },
  {
    year: "1992 — 1998",
    title: "Licenciatura en Derecho",
    org: "Universidad de Sonora · Unidad Centro, Hermosillo",
  },
];

export default function Education() {
  return (
    <section id="formacion" className="bg-parchment-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Academia" title="Formación académica" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {degrees.map((d) => (
            <div
              key={d.title}
              className="flex flex-col border border-ink/10 bg-white p-7 shadow-sm"
            >
              <span className="font-serif text-lg text-gold-dark">
                {d.year}
              </span>
              <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink">
                {d.title}
              </h3>
              <p className="mt-auto pt-4 text-sm text-ink-soft/70">{d.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
