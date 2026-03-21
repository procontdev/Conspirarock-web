type PillarCardProps = {
  title: string;
  description: string;
};

export default function PillarCard({ title, description }: PillarCardProps) {
  return (
    <article className="panel-surface rounded-[28px] p-6">
      <h3 className="text-2xl uppercase text-[var(--cr-text)]">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-[var(--cr-text-soft)]">
        {description}
      </p>
    </article>
  );
}