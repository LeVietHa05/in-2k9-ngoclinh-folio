import Image from "next/image";
import { u } from "./design";

export type CollageItem = {
  src: string;
  alt?: string;
  /** Toạ độ và kích thước, cùng hệ đơn vị với width/height của Collage (lấy từ Figma) */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Điểm giữ lại khi ảnh bị cắt, ví dụ "50% 20%" để giữ phần đầu người. Mặc định giữa ảnh */
  focus?: string;
};

type CollageProps = {
  /** Kích thước khung Collage trong Figma */
  width: number;
  height: number;
  items: CollageItem[];
};

export function Collage({ width, height, items }: CollageProps) {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute overflow-hidden transition-transform duration-300 hover:z-10 hover:scale-[1.03]"
          style={{
            left: `${(it.x / width) * 100}%`,
            top: `${(it.y / height) * 100}%`,
            width: `${(it.w / width) * 100}%`,
            height: `${(it.h / height) * 100}%`,
          }}
        >
          <Image
            src={it.src}
            alt={it.alt ?? ""}
            fill
            sizes={`${Math.ceil(it.w)}px`}
            className="object-cover"
            style={{ objectPosition: it.focus }}
          />
        </div>
      ))}
    </div>
  );
}
