import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import HostCard from "./HostCard";
import { hosts } from "../../data/hosts";

export default function HostsSection() {
  return (
    <section id="conductores" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quienes sostienen la conversación"
          title="Quienes abren la señal"
          description="Dos miradas que sostienen la conversación desde la música, la curiosidad y la voluntad de ir más allá de lo evidente."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {hosts.map((host) => (
            <HostCard
              key={host.id}
              name={host.name}
              bio={host.bio}
              image={host.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}