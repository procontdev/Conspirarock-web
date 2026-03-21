import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  secondaryText?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  secondaryText,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--cr-amber)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-semibold uppercase leading-none text-[var(--cr-text)] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--cr-text-soft)] sm:text-lg">
          {description}
        </p>
      )}
      {secondaryText && (
        <p className="mt-3 text-sm leading-6 text-[var(--cr-text-muted)] sm:text-base">
          {secondaryText}
        </p>
      )}
    </div>
  );
}