type GuestCardProps = {
  name: string;
  subtitle: string;
  topic: string;
  image: string;
};

export default function GuestCard({
  name,
  subtitle,
  topic,
  image,
}: GuestCardProps) {
  return (
    <article className="panel-surface overflow-hidden rounded-[28px]">
      <div
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="p-6">
        <h3 className="text-2xl uppercase text-[var(--cr-text)]">{name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--cr-amber)]">
          {subtitle}
        </p>
        <p className="mt-4 text-sm leading-6 text-[var(--cr-text-soft)]">
          {topic}
        </p>
      </div>
    </article>
  );
}