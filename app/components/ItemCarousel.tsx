"use client";

import { Children, useState, type ReactNode } from "react";
import { DARK, u } from "./design";

type ItemCarouselProps = {
  children: ReactNode;
  /** Bề rộng mỗi mục (đơn vị u), bằng width của CaptionedImage */
  itemWidth: number;
  /** Khoảng cách giữa các mục (đơn vị u) */
  gap?: number;
  /** Số mục hiện cùng lúc */
  visible?: number;
  /** Mỗi lần bấm mũi tên đi bao nhiêu mục */
  step?: number;
};

export function ItemCarousel({
  children,
  itemWidth,
  gap = 16,
  visible = 4,
  step = 1,
}: ItemCarouselProps) {
  const items = Children.toArray(children);
  const maxIndex = Math.max(0, items.length - visible);
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) =>
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir * step)));

  const slot = itemWidth + gap;
  const viewportWidth = visible * itemWidth + (visible - 1) * gap;

  return (
    <div>
      {/* Cửa sổ nhìn: clip theo chiều ngang, chiều dọc để hở cho chữ phát sáng */}
      <div
        className="mx-auto overflow-x-clip"
        style={{ width: u(viewportWidth) }}
      >
        <div
          className="flex items-start transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
          style={{
            gap: u(gap),
            transform: `translateX(calc(var(--u) * ${-index * slot}))`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0"
              style={{ width: u(itemWidth) }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Mũi tên: mờ đi khi đã tới đầu hoặc cuối */}
      <div
        className="flex justify-center"
        style={{ gap: u(24), marginTop: u(40) }}
      >
        {(["prev", "next"] as const).map((d) => {
          const disabled = d === "prev" ? index <= 0 : index >= maxIndex;
          return (
            <button
              key={d}
              type="button"
              onClick={() => go(d === "next" ? 1 : -1)}
              disabled={disabled}
              aria-label={d === "next" ? "Mục sau" : "Mục trước"}
              className="flex items-center justify-center rounded-full transition-[transform,opacity] duration-300 hover:scale-110 disabled:pointer-events-none disabled:opacity-35"
              style={{ width: u(63), height: u(63), background: DARK }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8fd3d3"
                strokeWidth="1"
                style={{ width: u(40), height: u(40) }}
              >
                <path
                  d={
                    d === "prev"
                      ? "M22 12H2M10 4l-8 8 8 8"
                      : "M2 12h20M14 4l8 8-8 8"
                  }
                />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}
