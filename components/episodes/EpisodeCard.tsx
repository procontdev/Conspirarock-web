import Button from "../ui/Button";
import Tag from "../ui/Tag";
import Link from "next/link";

type EpisodeCardProps = {
    id: string;
  guestName: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  tags: string[];
};

export default function EpisodeCard({
    id,
  guestName,
  title,
  description,
  thumbnail,
  youtubeUrl,
  tags,
}: EpisodeCardProps) {
  return (
    <article className="panel-surface overflow-hidden rounded-[28px] transition-transform duration-300 hover:-translate-y-1">
      <div
        className="h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      />
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--cr-amber)]">
          {guestName}
        </p>
        <h3 className="mt-3 text-2xl uppercase leading-tight text-[var(--cr-text)]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[var(--cr-text-soft)]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-6">
          <Button href={youtubeUrl}>Ver episodio</Button>
        </div>
        <div className="mt-4">
  <div className="mt-4 border-t border-white/10 pt-4">
  <Link
    href={`/episodios/${id}`}
    className="text-sm uppercase tracking-[0.2em] text-[var(--cr-amber)] transition-opacity hover:opacity-80"
  >
    Abrir Conspira-Files
  </Link>
</div>
</div>
      </div>
    </article>
  );
}