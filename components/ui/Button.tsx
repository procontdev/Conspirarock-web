import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-[var(--cr-red)] text-[var(--cr-text)] hover:bg-[var(--cr-red-dark)] hover:shadow-[0_0_24px_rgba(179,32,32,0.25)]",
  secondary:
    "border border-white/10 bg-white/5 text-[var(--cr-text)] hover:border-[rgba(217,138,43,0.35)] hover:bg-white/10",
  ghost:
    "text-[var(--cr-text)] hover:bg-white/5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}