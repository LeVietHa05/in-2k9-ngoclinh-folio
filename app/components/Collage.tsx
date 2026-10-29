import Image from "next/image";

type CollageBox = {
  /** Toạ độ và kích thước, cùng hệ đơn vị với width/height của Collage (lấy từ Figma) */
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CollageImage = CollageBox & {
  type?: "image"; // có thể bỏ qua, mặc định là ảnh
  src: string;
  alt?: string;
  /** Điểm giữ lại khi ảnh bị cắt, ví dụ "50% 20%" */
  focus?: string;
};

export type CollageEmbed = CollageBox & {
  type: "embed";
  /** Link embed, ví dụ https://www.youtube.com/embed/ID */
  src: string;
  /** Bắt buộc, dùng cho trình đọc màn hình */
  title: string;
  allow?: string;
};

export type CollageItem = CollageImage | CollageEmbed;

type CollageProps = {
  width: number;
  height: number;
  items: CollageItem[];
};

const DEFAULT_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function Collage({ width, height, items }: CollageProps) {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {items.map((it, i) => {
        const box = {
          left: `${(it.x / width) * 100}%`,
          top: `${(it.y / height) * 100}%`,
          width: `${(it.w / width) * 100}%`,
          height: `${(it.h / height) * 100}%`,
        };

        if (it.type === "embed") {
          return (
            <div
              key={i}
              className="absolute overflow-hidden bg-black"
              style={box}
            >
              <iframe
                className="absolute inset-0 h-full w-full border-0"
                src={it.src}
                title={it.title}
                allow={it.allow ?? DEFAULT_ALLOW}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          );
        }

        return (
          <div
            key={i}
            className="absolute overflow-hidden transition-transform duration-300 hover:z-10 hover:scale-[1.03]"
            style={box}
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
        );
      })}
    </div>
  );
}
