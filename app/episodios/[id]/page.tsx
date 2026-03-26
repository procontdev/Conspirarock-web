import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { episodes } from "@/data/episodes";
import { conspiraFilesByEpisode } from "@/data/conspira-files";
import EpisodeHero from "@/components/episodes/detail/EpisodeHero";
import KeyTopics from "@/components/episodes/detail/KeyTopics";
import ConspiraFilesSection from "@/components/episodes/detail/ConspiraFilesSection";
import HighlightedQuotes from "@/components/episodes/detail/HighlightedQuotes";
import EditorialNote from "@/components/episodes/detail/EditorialNote";

type PageProps = {
  params: {
    id: string;
  };
};

export default function EpisodeDetailPage({ params }: PageProps) {
  const episode = episodes.find((item) => item.id === params.id);

if (!episode || episode.status !== "published") {
  notFound();
}

  const conspira = conspiraFilesByEpisode[params.id];

  return (
    <main className="pb-24 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <EpisodeHero episode={episode} />

        {conspira ? (
          <div className="mt-14 space-y-12">
            <KeyTopics topics={conspira.keyTopics} />

            <ConspiraFilesSection
  eyebrow="Conspira-Files"
  title="Núcleo del episodio"
  intro="Aquí se concentra el corazón de la conversación: industria, autenticidad, mercado, desgaste creativo y fracturas internas de la música."
  items={conspira.coreFiles}
/>

            {conspira.mythReferences && conspira.mythReferences.length > 0 ? (
              <ConspiraFilesSection
  eyebrow="Conspira-Files"
  title="Mitologías y referencias conspirativas"
  intro="Una capa paralela del episodio: teorías, leyendas y figuras del imaginario musical que expanden el tono conspirativo de la conversación."
  items={conspira.mythReferences}
/>
            ) : null}

            <HighlightedQuotes quotes={conspira.highlightedQuotes} />

            {conspira.editorialNote ? (
              <EditorialNote note={conspira.editorialNote} />
            ) : null}
          </div>
        ) : (
          <section className="panel-surface mt-12 rounded-[28px] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--cr-amber)]">
  Conspira-Files
</p>
<h2 className="mt-4 text-3xl uppercase text-[var(--cr-text)]">
  Conspira-Files en preparación
</h2>
<p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cr-text-soft)]">
  Este episodio ya está publicado, pero su archivo expandido de casos,
  referencias y frases destacadas todavía está en preparación.
</p>
          </section>
        )}
      </Container>
    </main>
  );
}