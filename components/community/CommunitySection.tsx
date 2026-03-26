import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

const communityItems = [
  {
    title: "Proponer un tema",
    description:
      "¿Hay una teoría, caso, fenómeno o tensión cultural que merezca entrar en la conversación?",
    cta: "Sugerir tema",
  },
  {
    title: "Recomendar un invitado",
    description:
      "Artistas, investigadores, testigos, personajes de culto o voces incómodas que deberían pasar por la señal.",
    cta: "Proponer invitado",
  },
  {
    title: "Seguir la señal",
    description:
      "Mantente conectado a los nuevos episodios, clips, archivos y futuros cruces del universo ConspiraRock.",
    cta: "Ver canales",
  },
  {
    title: "Recibir novedades",
    description:
      "Próximamente: avisos de estreno, nuevas publicaciones, contenido expandido y aperturas de la comunidad.",
    cta: "Próximamente",
  },
];

export default function CommunitySection() {
  return (
    <section id="comunidad" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="La señal sigue abierta"
          title="Comunidad"
          description="ConspiraRock también vive fuera del episodio. Esta comunidad existe para extender la conversación, proponer nuevas líneas de exploración y mantener activa la frecuencia entre música, cultura y preguntas incómodas."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {communityItems.map((item) => (
            <article
              key={item.title}
              className="panel-surface rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl uppercase leading-tight text-[var(--cr-text)]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--cr-text-soft)]">
                {item.description}
              </p>

              <div className="mt-6 text-sm uppercase tracking-[0.22em] text-[var(--cr-amber)]">
                {item.cta}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--cr-amber)]">
            No es solo una audiencia. Es una frecuencia compartida.
          </p>
        </div>
      </Container>
    </section>
  );
}