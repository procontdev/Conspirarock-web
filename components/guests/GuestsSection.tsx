import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import Button from "../ui/Button";
import GuestCard from "./GuestCard";
import { guests } from "../../data/guests";

export default function GuestsSection() {
  return (
    <section id="invitados" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Archivo de voces"
          title="Voces que ya pasaron por la señal"
          description="Músicos, artistas y protagonistas de la cultura alternativa que han compartido sus ideas, trayectorias y visiones dentro del universo ConspiraRock."
          secondaryText="Cada invitado amplía el archivo y deja abierta una nueva frecuencia para seguir explorando."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {guests.map((guest) => (
            <GuestCard
              key={guest.id}
              name={guest.name}
              subtitle={guest.subtitle}
              topic={guest.topic}
              image={guest.image}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#invitados" variant="secondary">
            Explorar invitados
          </Button>
        </div>
      </Container>
    </section>
  );
}