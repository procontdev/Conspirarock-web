import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import Button from "../ui/Button";
import PillarCard from "./PillarCard";

const pillars = [
  {
    title: "Rock",
    description: "La música como lenguaje, memoria, identidad y resistencia.",
  },
  {
    title: "Conspiración",
    description:
      "Las narrativas ocultas, las preguntas incómodas y lo que ocurre detrás del discurso oficial.",
  },
  {
    title: "Exploración",
    description:
      "Espiritualidad, simbolismo, conciencia, fenómenos extraños y nuevas formas de mirar la realidad.",
  },
];

export default function AboutSection() {
  return (
    <section id="programa" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Manifiesto"
          title="¿Qué es ConspiraRock?"
          description="ConspiraRock es un espacio de conversación donde la música, la conciencia, el misterio y las preguntas incómodas se encuentran. Un archivo vivo de ideas, testimonios y miradas que exploran aquello que suele quedar fuera de la conversación convencional."
          secondaryText="Más que un programa, es una plataforma para abrir señales entre el rock, la cultura alternativa y las zonas menos exploradas de la experiencia humana."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#inicio" variant="secondary">
            Descubrir el universo ConspiraRock
          </Button>
        </div>
      </Container>
    </section>
  );
}