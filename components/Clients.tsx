import SectionHeading from "./SectionHeading";

const clients = [
  { name: "TOCVAN Ventures Corp.", sector: "Minería" },
  { name: "Colibri Resources", sector: "Minería" },
  { name: "Silver Spruce Resources", sector: "Minería" },
  { name: "Fording Coal · Minera Nyco, S.A. de C.V.", sector: "Minería" },
  { name: "American Tower México (MATC Digital)", sector: "Telecomunicaciones" },
  { name: "IUSACELL PCS, S.A. de C.V.", sector: "Telecomunicaciones" },
  { name: "Unefon, S.A. de C.V.", sector: "Telecomunicaciones" },
  {
    name: "Supremo Tribunal de Justicia del Estado de Sonora",
    sector: "Sector público",
  },
];

export default function Clients() {
  return (
    <section id="clientes" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Confianza"
          title="Clientes representados"
          light
        />

        <p className="-mt-8 mb-12 max-w-2xl text-white/60">
          Empresas nacionales e internacionales que han confiado su
          representación legal en México al despacho.
        </p>

        <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {clients.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between gap-6 bg-ink px-8 py-6 transition-colors hover:bg-ink-soft"
            >
              <span className="font-serif text-lg text-white">{c.name}</span>
              <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-gold-light/70">
                {c.sector}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
