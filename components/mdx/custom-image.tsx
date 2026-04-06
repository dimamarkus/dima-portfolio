import Image from "next/image";

type CustomImageProps = Readonly<{
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  caption?: string;
}>;

const parseDimension = (value: number | string | undefined) => {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    return Number.parseInt(value, 10);
  }

  return undefined;
};

export const CustomImage = ({
  src,
  alt,
  width,
  height,
  caption,
}: CustomImageProps) => {
  const parsedWidth = parseDimension(width);
  const parsedHeight = parseDimension(height);

  if (!parsedWidth || !parsedHeight) {
    throw new Error(`CustomImage requires width and height for "${src}".`);
  }

  return (
    <figure className="my-8 space-y-3">
      <Image
        alt={alt}
        className="rounded-2xl border border-white/10"
        height={parsedHeight}
        src={src}
        width={parsedWidth}
      />
      {caption ? (
        <figcaption className="text-sm text-slate-400">{caption}</figcaption>
      ) : null}
    </figure>
  );
};
