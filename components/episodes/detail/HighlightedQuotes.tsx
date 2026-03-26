import SectionHeading from "@/components/layout/SectionHeading";

type Props = {
  quotes: string[];
};

export default function HighlightedQuotes({ quotes }: Props) {
  return (
    <section>
      <SectionHeading
        eyebrow="Conspira-Files"
        title="Frases destacadas"
        description="Ideas, golpes de sentido y declaraciones que condensan el tono, la incomodidad y la postura del episodio."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {quotes.map((quote) => (
          <blockquote
            key={quote}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 text-lg leading-8 text-[var(--cr-text)]"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[var(--cr-amber)]">
              Frase destacada
            </span>
            “{quote}”
          </blockquote>
        ))}
      </div>
    </section>
  );
}