import { Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-amber">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
