import Button from "../ui/Button";

type ThemeCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ThemeCard({ title, description, href }: ThemeCardProps) {
  return (
    <article className="panel-surface rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-2xl uppercase leading-tight text-[var(--cr-text)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-[var(--cr-text-soft)]">
        {description}
      </p>
      <div className="mt-6">
        <Button href={href} variant="secondary">
          Explorar frecuencia
        </Button>
      </div>
    </article>
  );
}