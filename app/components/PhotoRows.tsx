import Image, { type StaticImageData } from "next/image";
import { u } from "./design";

export type RowPhoto = {
  /** Ảnh import tĩnh (tự biết tỉ lệ) hoặc đường dẫn chuỗi (kèm ratio) */
  src: string | StaticImageData;
  /** Rộng / cao. Bắt buộc nếu src là chuỗi. Có thể chỉnh để cắt ảnh khi muốn. */
  ratio?: number;
  alt?: string;
  /** Điểm giữ lại khi ảnh bị cắt, ví dụ "50% 20%" */
  focus?: string;
};

const ratioOf = (p: RowPhoto) =>
  p.ratio ?? (typeof p.src === "string" ? 1.5 : p.src.width / p.src.height);

export function PhotoRows({
  rows,
  gap = 12,
}: {
  rows: RowPhoto[][];
  gap?: number;
}) {
  return (
    <div className="flex w-full flex-col" style={{ gap: u(gap) }}>
      {rows.map((row, i) => (
        <div key={i} className="flex items-start" style={{ gap: u(gap) }}>
          {row.map((p, j) => {
            const r = ratioOf(p);
            return (
              <div
                key={j}
                className="relative min-w-0 overflow-hidden"
                style={{ flex: `${r * 1000} 1 0%`, aspectRatio: r }}
              >
                <Image
                  src={p.src}
                  alt={p.alt ?? ""}
                  fill
                  sizes="25vw"
                  className="object-cover"
                  style={{ objectPosition: p.focus }}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function splitRows<T>(items: T[], counts: number[]): T[][] {
  let i = 0;
  return counts.map((n) => items.slice(i, (i += n)));
}
