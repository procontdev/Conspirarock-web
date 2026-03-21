type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--cr-text-soft)]">
      {label}
    </span>
  );
}