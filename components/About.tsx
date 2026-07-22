import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Asesoría corporativa integral",
    text: "Acompañamiento desde la constitución de la compañía: asambleas, actas, redacción y revisión de contratos, y cumplimiento societario.",
  },
  {
    title: "Sector minero y empresas extranjeras",
    text: "Asesor de compañías nacionales y extranjeras del sector minero y corporativo, con negociación de contratos en español e inglés.",
  },
  {
    title: "Litigio estatal y federal",
    text: "Amplia experiencia en litigio en materias civil, administrativa, laboral, mercantil y familiar, ante tribunales estatales y federales.",
  },
  {
    title: "Traducción e interpretación jurídica",
    text: "Perito traductor No. 34 del Supremo Tribunal de Justicia del Estado de Sonora. Traducción e interpretación simultánea inglés-español.",
  },
];

export default function About() {
  return (
    <section id="perfil" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Perfil profesional" title="El despacho" />

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft">
              <span className="font-serif text-3xl text-gold-dark">F</span>
              onteslex es el despacho del Lic. Eleazar Fontes Acuña, abogado
              egresado de la Universidad de Sonora con Maestría en Derecho
              Corporativo por la Universidad La Salle.
            </p>
            <p className="mt-5 leading-relaxed text-ink-soft/80">
              Desde 1995 ejerce la profesión en Hermosillo, Sonora, combinando
              la asesoría corporativa con el litigio. Su dominio del idioma
              inglés le permite representar a clientes internacionales y
              negociar contratos transfronterizos, particularmente en la
              industria minera.
            </p>
            <p className="mt-5 leading-relaxed text-ink-soft/80">
              Fue Secretario Particular de la Presidencia del Supremo Tribunal
              de Justicia del Estado de Sonora y preside la Comisión de
              Difusión y Comunicación Social de la Barra Sonorense de Abogados.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="border border-parchment-dark bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
