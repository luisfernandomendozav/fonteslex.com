export default function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-14">
      <p
        className={`mb-3 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] ${
          light ? "text-gold-light" : "text-gold-dark"
        }`}
      >
        <span
          className={`h-px w-10 ${light ? "bg-gold-light" : "bg-gold-dark"}`}
        />
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl font-medium sm:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
