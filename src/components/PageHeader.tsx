import { Reveal } from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <header className="relative overflow-hidden px-5 pb-16 pt-40 sm:px-8 sm:pt-48">
      <div className="pointer-events-none absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-amber/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-amber">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl font-display text-5xl font-light leading-[0.98] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </Reveal>
        {note && (
          <Reveal delay={0.16}>
            <p className="mt-6 text-muted">{note}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
