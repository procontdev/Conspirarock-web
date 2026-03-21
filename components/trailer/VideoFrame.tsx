type VideoFrameProps = {
  videoUrl: string;
  title?: string;
};

export default function VideoFrame({
  videoUrl,
  title = "Trailer ConspiraRock",
}: VideoFrameProps) {
  return (
    <div className="panel-surface relative overflow-hidden rounded-[28px] p-3">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[rgba(217,138,43,0.08)] to-transparent" />
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--cr-red)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--cr-amber)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--cr-text-muted)]">
          Módulo de transmisión
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-[22px] border border-white/10 bg-black">
        <iframe
          className="h-full w-full"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}