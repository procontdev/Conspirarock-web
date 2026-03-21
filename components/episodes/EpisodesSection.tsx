import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import Button from "../ui/Button";
import EpisodeCard from "./EpisodeCard";
import { episodes } from "../../data/episodes";

export default function EpisodesSection() {
  return (
    <section id="episodios" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Archivo reciente"
          title="Últimas transmisiones"
          description="Explora los episodios más recientes y entra en conversaciones que cruzan música, conciencia, misterio y cultura contemporánea."
          secondaryText="Cada episodio abre una nueva línea de exploración: experiencias, ideas, testimonios y miradas que desafían lo evidente."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              guestName={episode.guestName}
              title={episode.title}
              description={episode.description}
              thumbnail={episode.thumbnail}
              youtubeUrl={episode.youtubeUrl}
              tags={episode.tags}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="https://www.youtube.com/" variant="secondary">
            Ver todos los episodios
          </Button>
        </div>
      </Container>
    </section>
  );
}