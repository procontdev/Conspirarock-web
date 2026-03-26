import SectionHeading from "@/components/layout/SectionHeading";
import type { ConspiraFileItem } from "@/data/conspira-files";

type Props = {
  eyebrow?: string;
  title?: string;
  intro: string;
  items: ConspiraFileItem[];
};

const certaintyMap: Record<string, string> = {
  documentado: "Documentado",
  discutido: "Discutido",
  testimonial: "Testimonial",
  hipótesis: "Hipótesis",
};

function getCertaintyClass(certainty?: string) {
  switch (certainty) {
    case "documentado":
      return "border-emerald-400/30 bg-emerald-500/10 text-emerald-200";
    case "discutido":
      return "border-amber-400/30 bg-amber-500/10 text-amber-200";
    case "testimonial":
      return "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200";
    case "hipótesis":
      return "border-red-400/30 bg-red-500/10 text-red-200";
    default:
      return "border-white/10 bg-white/5 text-[var(--cr-text-soft)]";
  }
}

export default function ConspiraFilesSection({
  eyebrow = "Conspira-Files",
  title = "Explora el episodio",
  intro,
  items,
}: Props) {
  return (
    <section className="panel-surface rounded-[32px] p-8 sm:p-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={intro}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cr-amber)]/30 hover:bg-white/[0.05]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--cr-amber)]">
                {item.type}
              </span>

              {item.certainty ? (
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] ${getCertaintyClass(
                    item.certainty
                  )}`}
                >
                  {certaintyMap[item.certainty] || item.certainty}
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 text-2xl uppercase leading-tight text-[var(--cr-text)]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--cr-text-soft)]">
              {item.summary}
            </p>

            {(item.sources ?? []).length > 0 ? (
              <div className="mt-6 space-y-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--cr-amber)]">
                  Fuentes
                </p>

                {(item.sources ?? []).map((source: { label: string; url: string }) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-[var(--cr-text)] underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}