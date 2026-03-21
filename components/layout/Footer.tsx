import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--cr-coal)] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
          <div>
            <p className="text-2xl font-semibold uppercase tracking-[0.08em] text-[var(--cr-text)]">
              ConspiraRock
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--cr-text-soft)]">
              Rock, misterio y preguntas que no se apagan.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--cr-text-muted)]">
              Una señal abierta entre música, misterio y cultura alternativa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cr-amber)]">
                Navegación
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {siteConfig.menu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-[var(--cr-text-soft)] transition-colors hover:text-[var(--cr-text)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--cr-amber)]">
                Canales
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={siteConfig.youtubeUrl}
                  className="text-sm text-[var(--cr-text-soft)] transition-colors hover:text-[var(--cr-text)]"
                >
                  YouTube
                </Link>
                <Link href="#" className="text-sm text-[var(--cr-text-soft)] hover:text-[var(--cr-text)]">
                  Instagram
                </Link>
                <Link href="#" className="text-sm text-[var(--cr-text-soft)] hover:text-[var(--cr-text)]">
                  TikTok
                </Link>
                <Link href="#" className="text-sm text-[var(--cr-text-soft)] hover:text-[var(--cr-text)]">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[var(--cr-text-muted)]">
          © ConspiraRock — Una frecuencia donde el rock, el misterio y la exploración siguen encendidos.
        </div>
      </Container>
    </footer>
  );
}