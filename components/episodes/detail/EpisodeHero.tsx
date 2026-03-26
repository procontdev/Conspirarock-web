import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";

type Episode = {
  id: string;
  guestName: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  tags: string[];
};

type Props = {
  episode: Episode;
};

export default function EpisodeHero({ episode }: Props) {
  return (
    <section className="panel-surface overflow-hidden rounded-[32px]">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--cr-amber)]">
            {episode.guestName}
          </p>

          <h1 className="mt-4 text-4xl uppercase leading-tight text-[var(--cr-text)] sm:text-5xl">
            {episode.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.24em] text-[var(--cr-amber)]">
  Archivo expandido del episodio: temas, mitologías, frases y referencias surgidas en la conversación.
</p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--cr-text-soft)] sm:text-lg">
            {episode.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {episode.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-8">
            <Button href={episode.youtubeUrl}>Ver episodio completo</Button>
          </div>
        </div>

        <div
          className="min-h-[320px] bg-cover bg-center lg:min-h-full"
          style={{ backgroundImage: `url('${episode.thumbnail}')` }}
        />
      </div>
    </section>
  );
}