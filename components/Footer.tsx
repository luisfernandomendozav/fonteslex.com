export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-serif text-xl font-semibold tracking-wide">
          Fontes<span className="text-gold-light">lex</span>
        </p>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Fonteslex · Lic. Eleazar Fontes Acuña ·
          Hermosillo, Sonora, México
        </p>
        <a
          href="https://www.linkedin.com/in/eleazar-fontes-76972a39/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/70 transition-colors hover:text-gold-light"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
