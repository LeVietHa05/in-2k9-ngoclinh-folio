import Image from "next/image";
import { SCRIPT, u } from "./design";

export function CaptionedImage({
  src,
  alt = "",
  caption,
  width,
  height,
}: {
  src: string;
  alt?: string;
  caption?: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="m-0 shrink-0" style={{ width: u(width) }}>
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${width}px`}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption
          className={SCRIPT}
          style={{
            textAlign: "center",
            fontSize: u(36),
            marginTop: u(12),
            lineHeight: 1.1,
          }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
