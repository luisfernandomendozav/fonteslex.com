import SectionHeading from "./SectionHeading";

const roles = [
  {
    period: "2013 — Presente",
    title: "Titular del Despacho",
    org: "Fonteslex",
    place: "Hermosillo, Sonora",
    text: "Asesoría legal corporativa y litigio en materias administrativa, laboral, civil, familiar y mercantil. Representación de compañías nacionales y extranjeras del sector minero.",
    current: true,
  },
  {
    period: "2023 — 2026",
    title: "Presidente de la Comisión de Difusión y Comunicación Social",
    org: "Barra Sonorense de Abogados, A.C.",
    place: "Hermosillo, Sonora",
    text: "Dirección de la estrategia de difusión y comunicación social del colegio de abogados.",
    current: true,
  },
  {
    period: "2012 — 2013",
    title: "Secretario Particular de Presidencia",
    org: "Supremo Tribunal de Justicia del Estado de Sonora",
    place: "Hermosillo, Sonora",
    text: "Encargado de la agenda de la Presidencia, atención a visitantes distinguidos y enlace institucional con los demás poderes del gobierno.",
    current: false,
  },
  {
    period: "1995 — 2012",
    title: "Abogado",
    org: "Fontes y Asociados",
    place: "Hermosillo, Sonora",
    text: "Litigio en materias administrativa, fiscal, civil, familiar, mercantil y penal. Asesoría corporativa.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="trayectoria" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia profesional" />

        <ol className="relative space-y-12 border-l border-gold/40 pl-8 sm:pl-12">
          {roles.map((role) => (
            <li key={`${role.org}-${role.period}`} className="relative">
              <span
                className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[53px] ${
                  role.current
                    ? "border-gold bg-gold"
                    : "border-gold bg-parchment"
                }`}
              />
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                {role.period}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {role.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">
                {role.org} · {role.place}
              </p>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft/80">
                {role.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
