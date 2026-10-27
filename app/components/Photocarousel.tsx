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

const OFFSETS = [-2, -1, 0, 1, 2];
const SIDE_SIZE = { w: 296, h: 389 };
const CENTER_SIZE = { w: 335, h: 496 };
const GAP = 27;

/**
 * Carousel 5 ảnh, ảnh giữa lớn hơn. Bấm mũi tên để chuyển (xoay vòng).
 * Phải đặt bên trong <ScaledPage> (hoặc phần tử có biến CSS `--u`).
 */
export function PhotoCarousel({
  photos = DEFAULT_PHOTOS,
}: {
  photos?: CarouselPhoto[];
}) {
  const [index, setIndex] = useState(0);
  const n = photos.length;
  if (n === 0) return null;

  const wrap = (i: number) => ((i % n) + n) % n;

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: u(PAGE_W), height: u(CENTER_SIZE.h), gap: u(GAP) }}
    >
      <ArrowButton
        direction="prev"
        onClick={() => setIndex((i) => wrap(i - 1))}
      />

      {OFFSETS.map((offset) => {
        const photo = photos[wrap(index + offset)];
        const size = offset === 0 ? CENTER_SIZE : SIDE_SIZE;
        return (
          <div
            key={offset}
            className="relative shrink-0 overflow-hidden"
            style={{
              width: u(size.w),
              height: u(size.h),
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

      <ArrowButton
        direction="next"
        onClick={() => setIndex((i) => wrap(i + 1))}
      />
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
      className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
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
