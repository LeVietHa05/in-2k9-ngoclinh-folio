import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { SIDE_A, SIDE_B, type AlbumSide } from "./albumdata";
import { CREAM, SCRIPT, TEAL, u } from "./design";
import { PAGE_W } from "./ScaledPage";

/**
 * Section trên cùng dùng lại được: tiêu đề album, hai cột Side A / Side B, ảnh trang trí, nút CTA.
 * Nền xanh tràn hết chiều ngang, nội dung nằm trong khung 1920u căn giữa.
 * Phải đặt bên trong <ScaledPage> (hoặc phần tử có biến CSS `--u`).
 */
export type AlbumHeaderProps = {
  albumName?: string;
  sideA?: AlbumSide;
  sideB?: AlbumSide;
  portfolioHref?: string;
  activeLabel?: string;
  /** Đường dẫn ảnh trang trí trong /public. Mặc định là con bướm. */
  decorationSrc?: string;
  /** Mô tả ảnh. Để "" nếu ảnh chỉ để trang trí. */
  decorationAlt?: string;
  /** Ảnh trang trí (con bướm). Bỏ trống để hiện khung mặc định. */
  decoration?: ReactNode;
};

const DEFAULT_DECORATION = "/about/butterfly.png";

export function AlbumHeader({
  albumName = "NgocLinh's Album",
  sideA = SIDE_A,
  sideB = SIDE_B,
  portfolioHref = "/about",
  activeLabel,
  decorationSrc = DEFAULT_DECORATION,
  decorationAlt = "",
  decoration,
}: AlbumHeaderProps) {
  return (
    <header
      className="relative w-full overflow-hidden text-white"
      style={{
        background: TEAL,
        height: u(819),
        textShadow: `0 0 ${u(8)} rgba(255,255,255,0.45)`,
      }}
    >
      <div className="relative mx-auto h-full" style={{ width: u(PAGE_W) }}>
        {/* Tiêu đề */}
        <h1
          className="absolute flex items-baseline leading-none"
          style={{ left: u(85), top: u(70), gap: u(22) }}
        >
          <span className="font-medium" style={{ fontSize: u(68) }}>
            List
          </span>
          <span className={SCRIPT} style={{ fontSize: u(105) }}>
            Song
          </span>
          <span className="font-light" style={{ fontSize: u(42) }}>
            {albumName}
          </span>
        </h1>

        {/* Hai cột Side A / Side B */}
        <div
          className="absolute grid"
          style={{
            left: u(85),
            top: u(201),
            gridTemplateColumns: `${u(547)} ${u(560)}`,
          }}
        >
          <HeaderSide {...sideA} activeLabel={activeLabel} />
          <HeaderSide {...sideB} activeLabel={activeLabel} />
        </div>

        {/* Ảnh trang trí */}
        <div
          className="absolute"
          style={{ left: u(1285), top: u(109), width: u(401), height: u(389) }}
        >
          {decoration ?? (
            <Image
              src={decorationSrc}
              alt={decorationAlt}
              fill
              sizes="25vw"
              className="object-contain"
            />
          )}
        </div>

        {/* Nút "Choose a Song and Watch My Portfolio" */}
        <Link
          href={portfolioHref}
          className="group absolute flex items-center"
          style={{ right: u(71), bottom: u(85), gap: u(27) }}
        >
          <span
            className="text-right leading-tight"
            style={{ fontSize: u(39) }}
          >
            Choose a{" "}
            <span className={SCRIPT} style={{ fontSize: u(46) }}>
              Song
            </span>{" "}
            and{" "}
            <span className={SCRIPT} style={{ fontSize: u(46) }}>
              Watch
            </span>
            <br />
            <strong className="font-bold" style={{ fontSize: u(41) }}>
              My Portfolio
            </strong>
          </span>
          <span
            className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{ width: u(102), height: u(102), background: CREAM }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke={TEAL}
              strokeWidth="0.9"
              style={{ width: u(64), height: u(64) }}
            >
              <path d="M2 12h20M14 4l8 8-8 8" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}

function HeaderSide({
  name,
  subtitle,
  description,
  tracks,
  activeLabel,
}: AlbumSide & { activeLabel?: string }) {
  return (
    <div>
      {/* Đầu cột */}
      <div className="flex items-center" style={{ height: u(84) }}>
        <div style={{ paddingRight: u(20) }}>
          <p className="leading-none" style={{ fontSize: u(34) }}>
            {name}
          </p>
          <p
            className={`leading-none ${SCRIPT}`}
            style={{ fontSize: u(41), marginTop: u(3) }}
          >
            {subtitle}
          </p>
        </div>
        <div
          style={{
            width: u(2),
            height: u(54),
            background: "currentColor",
            opacity: 0.8,
          }}
        />
        <p
          className="whitespace-pre-line"
          style={{ paddingLeft: u(14), fontSize: u(18), lineHeight: 1.25 }}
        >
          {description}
        </p>
      </div>

      {/* Danh sách bài */}
      <ul style={{ marginTop: u(44) }}>
        {tracks.map((track) => {
          const active =
            track.label.toLocaleLowerCase() ===
            activeLabel?.toLocaleLowerCase();
          return (
            <li key={track.label}>
              <Link
                href={track.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex items-center whitespace-nowrap transition-opacity hover:opacity-100 ${
                  active ? "opacity-100 text-[#1A565A]" : "opacity-70"
                }`}
                style={{ height: u(95.5), fontSize: u(32), gap: u(10) }}
              >
                <span>{track.label}:</span>
                <span
                  className={SCRIPT}
                  style={{
                    fontSize: u(39),
                  }}
                >
                  {track.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
