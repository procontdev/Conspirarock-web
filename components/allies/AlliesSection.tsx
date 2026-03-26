import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Button from "@/components/ui/Button";

const alliesItems = [
  {
    title: "Producción y espacios",
    description:
      "Estudios, locaciones, espacios culturales y plataformas de producción que hacen posible la experiencia.",
  },
  {
    title: "Difusión y medios afines",
    description:
      "Canales, comunidades y proyectos de comunicación que resuenan con el tono editorial de ConspiraRock.",
  },
  {
    title: "Colaboraciones futuras",
    description:
      "Marcas, iniciativas y aliados estratégicos interesados en construir experiencias, contenidos o activaciones junto a la señal.",
  },
];

export default function AlliesSection() {
  return (
    <section id="aliados" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Frecuencias que conectan"
          title="Aliados"
          description="ConspiraRock se expande a través de proyectos, espacios, marcas y plataformas que comparten sensibilidad con esta señal y ayudan a amplificar su alcance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {alliesItems.map((item) => (
            <article
              key={item.title}
              className="panel-surface rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl uppercase leading-tight text-[var(--cr-text)]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--cr-text-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-[var(--cr-text-soft)]">
            Si tu proyecto conecta con el universo de ConspiraRock, esta frecuencia
            puede abrirse a nuevas alianzas.
          </p>

          <Button href="#aliados">Colaborar con ConspiraRock</Button>
        </div>
      </Container>
    </section>
  );
}