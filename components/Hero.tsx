export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink text-white"
    >
      {/* Fondo decorativo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,62,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(30,41,59,0.9),transparent_60%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <p className="mb-6 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] text-gold-light">
          <span className="h-px w-12 bg-gold-light" />
          Despacho Jurídico · Hermosillo, Sonora
        </p>

        <h1 className="max-w-4xl font-serif text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl">
          Lic. Eleazar Fontes Acuña
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Asesoría legal corporativa y litigio estratégico para empresas
          nacionales y extranjeras. Más de 25 años de experiencia en el sector
          minero y corporativo, con negociación de contratos en español e
          inglés.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
          >
            Agendar consulta
          </a>
          <a
            href="#practica"
            className="rounded-sm border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white/90 transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Áreas de práctica
          </a>
        </div>

        <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-white/50">Años de experiencia</dt>
            <dd className="mt-1 font-serif text-4xl text-gold-light">25+</dd>
          </div>
          <div>
            <dt className="text-sm text-white/50">Idiomas de trabajo</dt>
            <dd className="mt-1 font-serif text-4xl text-gold-light">
              ES · EN
            </dd>
          </div>
          <div>
            <dt className="text-sm text-white/50">Posgrado</dt>
            <dd className="mt-1 font-serif text-4xl text-gold-light">
              Maestría
              <span className="block text-sm font-sans text-white/50">
                en Derecho Corporativo
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
