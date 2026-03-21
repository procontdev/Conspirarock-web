import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: "url('/images/fondo-led-conspirarock.jpg')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="radial-glow-red absolute -left-24 top-20 h-[32rem] w-[32rem]" />
        <div className="radial-glow-amber absolute bottom-0 right-0 h-[26rem] w-[26rem]" />
        <div className="section-grid-bg absolute inset-0 opacity-20" />
        <NoiseOverlay />
      </div>

      <Container className="relative z-10 min-h-[88vh] py-16 lg:flex lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--cr-amber)]">
            Señal activa
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.95] text-[var(--cr-text)] sm:text-6xl lg:text-8xl">
            Donde el rock se cruza con lo desconocido
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cr-text-soft)] sm:text-xl">
            ConspiraRock es una experiencia audiovisual donde la música, el misterio,
            la espiritualidad, las conspiraciones y las preguntas incómodas convergen
            en una sola señal.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--cr-text-muted)]">
            Un archivo vivo de conversaciones con músicos, artistas y voces disruptivas
            que exploran lo visible, lo oculto y todo lo que sucede detrás de la superficie.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#trailer">Ver trailer</Button>
            <Button href="#episodios" variant="secondary">
              Explorar episodios
            </Button>
          </div>

          <p className="mt-6 text-sm text-[var(--cr-text-muted)]">
            Episodios, invitados, temas, comunidad y alianzas dentro del universo ConspiraRock.
          </p>

          <div className="mt-10 max-w-xl">
            <div className="signal-line" />
          </div>
        </div>
      </Container>
    </section>
  );
}