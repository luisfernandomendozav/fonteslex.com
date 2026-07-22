import SectionHeading from "./SectionHeading";

const areas = [
  {
    title: "Derecho Corporativo",
    text: "Constitución de sociedades, asambleas, gobierno corporativo, redacción y negociación de contratos nacionales e internacionales.",
  },
  {
    title: "Derecho Minero",
    text: "Asesoría a compañías mineras nacionales y extranjeras: contratos de exploración y explotación, acuerdos con superficiarios y cumplimiento regulatorio.",
  },
  {
    title: "Litigio Civil y Mercantil",
    text: "Representación en controversias civiles y mercantiles ante tribunales estatales y federales.",
  },
  {
    title: "Derecho Laboral",
    text: "Defensa y asesoría preventiva para empresas en conflictos individuales y colectivos de trabajo.",
  },
  {
    title: "Derecho Administrativo",
    text: "Impugnación de actos de autoridad y defensa frente a procedimientos administrativos estatales y federales.",
  },
  {
    title: "Juicio de Amparo",
    text: "Defensa constitucional de personas y empresas, con formación especializada por la Suprema Corte de Justicia de la Nación.",
  },
  {
    title: "Derecho Familiar",
    text: "Litigio familiar con especialidad en derecho de la infancia y justicia familiar.",
  },
  {
    title: "Negociación Internacional",
    text: "Negociación de contratos y acuerdos en español e inglés para empresas de telecomunicaciones, minería e infraestructura.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practica" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Áreas de práctica"
          light
        />

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="group bg-ink p-8 transition-colors hover:bg-ink-soft"
            >
              <span className="font-serif text-sm text-gold-light/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-white group-hover:text-gold-light">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
