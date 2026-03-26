import SectionHeading from "@/components/layout/SectionHeading";

type Props = {
  note: string;
};

export default function EditorialNote({ note }: Props) {
  return (
    <section>
      <SectionHeading
        eyebrow="Conspira-Files"
        title="Cómo leer este archivo"
        description="No todas las entradas de Conspira-Files tienen el mismo nivel de certeza. Esta nota ayuda a distinguir testimonio, discusión, mito cultural y material documentado."
      />

      <div className="mt-8 rounded-[28px] border border-[var(--cr-amber)]/20 bg-[var(--cr-amber)]/5 p-8">
        <p className="max-w-4xl text-base leading-8 text-[var(--cr-text-soft)]">
          {note}
        </p>
      </div>
    </section>
  );
}