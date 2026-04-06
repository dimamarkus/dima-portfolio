type SoundCloudEmbedProps = Readonly<{
  url: string;
  title?: string;
}>;

const getEmbedUrl = (url: string) => {
  const params = new URLSearchParams({
    url,
    color: "#60a5fa",
    auto_play: "false",
    hide_related: "false",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    visual: "false",
  });

  return `https://w.soundcloud.com/player/?${params.toString()}`;
};

export const SoundCloudEmbed = ({ url, title }: SoundCloudEmbedProps) => {
  return (
    <div className="my-8 space-y-3">
      <iframe
        allow="autoplay"
        className="h-42 w-full rounded-2xl border border-white/10 bg-slate-950"
        loading="lazy"
        src={getEmbedUrl(url)}
        title={title ?? "SoundCloud embed"}
      />
      {title ? <p className="text-sm text-slate-400">{title}</p> : null}
    </div>
  );
};
