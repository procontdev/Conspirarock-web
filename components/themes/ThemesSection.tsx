import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import ThemeCard from "./ThemeCard";
import { themes } from "../../data/themes";

export default function ThemesSection() {
  return (
    <section id="frecuencias" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Frecuencias del archivo"
          title="Explora por frecuencias"
          description="ConspiraRock no se recorre solo por episodios. También puede explorarse por las líneas de fuerza que atraviesan la señal."
          secondaryText="Cada frecuencia reúne conversaciones, visiones y preguntas que vuelven una y otra vez al centro del programa."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              title={theme.title}
              description={theme.description}
              href={theme.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}