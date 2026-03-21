"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[rgba(5,5,5,0.82)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-[rgba(217,138,43,0.35)] bg-white/5 shadow-[0_0_30px_rgba(179,32,32,0.15)]" />
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.12em] text-[var(--cr-text)]">
              ConspiraRock
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--cr-text-muted)]">
              Señal activa
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.menu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[var(--cr-text-soft)] transition-colors hover:text-[var(--cr-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Button href={siteConfig.youtubeUrl} variant="secondary">
            Ver en YouTube
          </Button>
          <Button href="#abrir-senal">Abrir señal</Button>
        </div>
      </Container>
    </header>
  );
}