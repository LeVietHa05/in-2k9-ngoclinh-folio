"use client";

import Image from "next/image";
import { useState } from "react";
import { DARK, u } from "./design";
import { PAGE_W } from "./ScaledPage";

export type CarouselPhoto = {
  /** Bỏ trống để hiện ô placeholder */
  src?: string;
  alt: string;
};

// TODO: thay bằng danh sách ảnh thật khi truyền vào prop `photos`
const DEFAULT_PHOTOS: CarouselPhoto[] = Array.from({ length: 7 }, (_, i) => ({
  alt: `Photo ${i + 1}`,
}));

const SIDE_SIZE = { w: 296, h: 389 };
const CENTER_SIZE = { w: 335, h: 496 };
const GAP = 27;
const VISIBLE_RADIUS = 2; // hiện 2 ảnh mỗi bên ảnh giữa
const BUFFER = 1; // thêm 1 ảnh vô hình mỗi bên để có chỗ trượt vào và ra

const OFFSETS = Array.from(
  { length: (VISIBLE_RADIUS + BUFFER) * 2 + 1 },
  (_, i) => i - (VISIBLE_RADIUS + BUFFER),
);

/** Toạ độ cạnh trái của ảnh ở vị trí `offset` so với ảnh giữa (đơn vị u, tính từ mép trái khung) */
function leftOf(offset: number) {
  const center = PAGE_W / 2;
  if (offset === 0) return center - CENTER_SIZE.w / 2;
  const dir = Math.sign(offset);
  const between = Math.abs(offset) - 1; // số ảnh bên nằm giữa nó và ảnh giữa
  const centerX =
    center +
    dir *
      (CENTER_SIZE.w / 2 +
        GAP +
        SIDE_SIZE.w / 2 +
        between * (SIDE_SIZE.w + GAP));
  return centerX - SIDE_SIZE.w / 2;
}

/**
 * Carousel 5 ảnh, ảnh giữa lớn hơn, trượt mượt khi bấm mũi tên (xoay vòng).
 * Phải đặt bên trong <ScaledPage> (hoặc phần tử có biến CSS `--u`).
 */
export function PhotoCarousel({
  photos = DEFAULT_PHOTOS,
}: {
  photos?: CarouselPhoto[];
}) {
  // `pos` tăng giảm tự do (không wrap) để key của mỗi ảnh ổn định khi trượt
  const [pos, setPos] = useState(0);
  const n = photos.length;
  if (n === 0) return null;

  const wrap = (i: number) => ((i % n) + n) % n;

  return (
    <div
      className="relative mx-auto overflow-x-clip"
      style={{ width: u(PAGE_W), height: u(CENTER_SIZE.h) }}
    >
      <ArrowButton direction="prev" onClick={() => setPos((p) => p - 1)} />

      {OFFSETS.map((offset) => {
        const vid = pos + offset;
        const photo = photos[wrap(vid)];
        const size = offset === 0 ? CENTER_SIZE : SIDE_SIZE;
        const visible = Math.abs(offset) <= VISIBLE_RADIUS;

        return (
          <div
            key={vid}
            aria-hidden={!visible}
            className={`absolute left-0 top-1/2 overflow-hidden transition-[transform,width,height,opacity] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none ${
              visible ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{
              width: u(size.w),
              height: u(size.h),
              transform: `translate(${u(leftOf(offset))}, -50%)`,
              zIndex: 10 - Math.abs(offset),
              background: "#d4e9e4",
            }}
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1600px) 20vw, 400px"
                className="object-cover"
              />
            ) : (
              <span
                className="absolute inset-0 flex items-center justify-center text-center"
                style={{ fontSize: u(24), color: "#5a9a9a" }}
              >
                {photo.alt}
              </span>
            )}
          </div>
        );
      })}

      <ArrowButton direction="next" onClick={() => setPos((p) => p + 1)} />
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Ảnh trước" : "Ảnh sau"}
      className="absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
      style={{
        ...(isPrev ? { left: u(36) } : { right: u(36) }),
        width: u(63),
        height: u(63),
        background: DARK,
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8fd3d3"
        strokeWidth="1"
        style={{ width: u(40), height: u(40) }}
      >
        <path d={isPrev ? "M22 12H2M10 4l-8 8 8 8" : "M2 12h20M14 4l8 8-8 8"} />
      </svg>
    </button>
  );
}
