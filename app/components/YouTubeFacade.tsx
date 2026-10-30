"use client";

import Image from "next/image";
import { useState } from "react";
import { u } from "./design";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
  /** Ảnh bìa tự chuẩn bị. Bỏ trống để dùng thumbnail của YouTube */
  poster?: string;
};

export function YouTubeFacade({ videoId, title, poster }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Phát video: ${title}`}
      className="group absolute inset-0 h-full w-full cursor-pointer"
    >
      <Image
        src={poster ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        unoptimized
        sizes="400px"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/0">
        <span
          className="flex items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
          style={{ width: u(72), height: u(72) }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="ml-0.5 h-1/2 w-1/2 fill-current"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
