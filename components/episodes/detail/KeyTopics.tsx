import SectionHeading from "@/components/layout/SectionHeading";
import Tag from "@/components/ui/Tag";

type Props = {
  topics: string[];
};

export default function KeyTopics({ topics }: Props) {
  return (
    <section>
      <SectionHeading
        eyebrow="Conspira-Files"
        title="Temas clave"
        description="Una primera capa de lectura para ubicar las ideas, tensiones y preguntas que sostienen el episodio."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {topics.map((topic) => (
          <Tag key={topic} label={topic} />
        ))}
      </div>
    </section>
  );
}