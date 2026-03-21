import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Button from "@/components/ui/Button";
import VideoFrame from "./VideoFrame";
import { siteConfig } from "@/data/site";

const tags = [
  "Rock",
  "Misterio",
  "Espiritualidad",
  "Industria musical",
  "OVNIs y fenómenos extraños",
];

export default function TrailerSection() {
  return (
    <section id="trailer" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Entrada al archivo"
              title="Entra a la señal"
              description="ConspiraRock reúne voces del rock, la cultura alternativa y el pensamiento no convencional en conversaciones que atraviesan la música, la conciencia, el simbolismo, lo inexplicable y las narrativas que rara vez llegan al centro de la conversación."
              secondaryText="Este trailer es la puerta de entrada al universo del programa: una frecuencia donde el rock no solo suena, también pregunta, conecta y revela."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--cr-text-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.youtubeUrl}>Ver trailer</Button>
              <Button href={siteConfig.youtubeUrl} variant="secondary">
                Ir al canal
              </Button>
            </div>
          </div>

          <VideoFrame videoUrl={siteConfig.trailerUrl} />
        </div>
      </Container>
    </section>
  );
}