import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contacto" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contacto" title="Agende una consulta" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Con gusto atenderemos su asunto corporativo, litigio o necesidad
              de traducción certificada. La primera conversación nos permite
              entender su caso y proponerle una estrategia clara.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Despacho
                </dt>
                <dd className="mt-1 text-lg text-ink">
                  Fonteslex · Hermosillo, Sonora, México
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://www.linkedin.com/in/eleazar-fontes-76972a39/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-ink underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-dark"
                  >
                    Eleazar Fontes Acuña
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Idiomas de atención
                </dt>
                <dd className="mt-1 text-lg text-ink">Español · English</dd>
              </div>
            </dl>
          </div>

          <div className="border border-parchment-dark bg-white p-8 shadow-sm sm:p-10">
            <h3 className="font-serif text-2xl font-semibold text-ink">
              Envíenos un mensaje
            </h3>
            <form
              className="mt-6 space-y-5"
              action="mailto:contacto@fonteslex.com"
              method="post"
              encType="text/plain"
            >
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1.5 block text-sm font-medium text-ink-soft"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-ink-soft"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-1.5 block text-sm font-medium text-ink-soft"
                >
                  ¿En qué podemos ayudarle?
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full resize-y rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-ink outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
