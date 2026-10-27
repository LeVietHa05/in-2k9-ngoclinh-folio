import Link from "next/link";
import type { CSSProperties } from "react";
import { SIDE_A, SIDE_B, type AlbumSide } from "./albumdata";
import { CdBrandLabel, CdDisc, cd } from "./CDisk";
import { DARK, INK, SCRIPT, TEAL, u } from "./design";

/**
 * Bố cục trang Home-Intro (chỉ desktop).
 *
 * Cách scale: toàn bộ bố cục được vẽ trong một "canvas thiết kế" 2064 x 1080 đơn vị (u).
 * `--u` = kích thước 1u thật trên màn hình = min(chiều cao / 1080, chiều rộng / 2064),
 * nên canvas luôn nằm gọn trong màn hình:
 *   - màn to / màn nhỏ: canvas phóng to / thu nhỏ theo
 *   - màn ngắn (21:9): bị giới hạn theo chiều cao, phần thừa hai bên chỉ là màu nền
 *   - màn vuông hơn (16:10, 4:3): bị giới hạn theo chiều rộng, phần thừa trên/dưới là màu nền
 * Màu nền chia đôi (xanh | đen) luôn khớp với đường chia của canvas ở mọi tỉ lệ.
 */

const DESIGN_W = 2064;
const DESIGN_H = 1080;
const LEFT_PANEL_W = 1079; // bề rộng nửa trái (nền xanh)
const CD_SIZE = 1008;

export function HomeIntro() {
  return (
    <main
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={
        {
          "--u": `min(100vh / ${DESIGN_H}, 100vw / ${DESIGN_W})`,
          // Đường chia xanh | đen = mép trái canvas + bề rộng nửa trái
          background: `linear-gradient(to right, ${TEAL} calc(50% + var(--u) * ${LEFT_PANEL_W - DESIGN_W / 2}), ${DARK} 0)`,
          color: INK,
        } as CSSProperties
      }
    >
      <div
        className="relative shrink-0"
        style={{ width: u(DESIGN_W), height: u(DESIGN_H) }}
      >
        <CdDisc
          size={CD_SIZE}
          className="z-0"
          style={{ left: u(1012), top: u(36) }}
        >
          {/* Năm (góc trên trái của đĩa) */}
          <ul
            className={`absolute `}
            style={{
              left: cd(195 / CD_SIZE),
              top: cd(224 / CD_SIZE),
              fontSize: cd(40 / CD_SIZE),
              lineHeight: cd(46 / CD_SIZE),
            }}
          >
            <li style={{ color: "#6fbcbc" }}>
              202<span className={` ${SCRIPT}`}>4</span>
            </li>
            <li style={{ color: "#2f9a9a" }}>
              202<span className={` ${SCRIPT}`}>5</span>
            </li>
            <li style={{ color: INK }}>
              202<span className={`  ${SCRIPT}`}>6 </span>
            </li>
          </ul>

          <CdBrandLabel />
        </CdDisc>
        <LeftPanel />
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Nửa trái: tiêu đề, danh sách bài, nút CTA                           */
/* ------------------------------------------------------------------ */

function LeftPanel() {
  return (
    <section
      className="absolute left-0 top-0 z-10"
      style={{ width: u(LEFT_PANEL_W), height: u(DESIGN_H) }}
    >
      {/* Tiêu đề */}
      <header
        className="absolute flex items-baseline"
        style={{ left: u(53), top: u(74), gap: u(14) }}
      >
        <h1 className="flex items-baseline leading-none" style={{ gap: u(18) }}>
          <span className="font-bold" style={{ fontSize: u(78) }}>
            List
          </span>
          <span className={SCRIPT} style={{ fontSize: u(120) }}>
            Song
          </span>
        </h1>
        <span className="font-light" style={{ fontSize: u(44) }}>
          Lindsey
        </span>
      </header>

      {/* Hai cột Side A / Side B */}
      <div
        className="absolute grid"
        style={{
          left: u(53),
          top: u(276),
          gridTemplateColumns: `${u(534)} ${u(492)}`,
        }}
      >
        <Side {...SIDE_A} />
        <Side {...SIDE_B} />
      </div>

      {/* Nút "Choose a Song and Watch My Portfolio" */}
      <Link
        href="#" // TODO: đường dẫn trang portfolio
        className="group absolute flex items-center"
        style={{ right: u(41), bottom: u(27), gap: u(22) }}
      >
        <span className="text-right leading-tight" style={{ fontSize: u(34) }}>
          Choose a{" "}
          <span className={SCRIPT} style={{ fontSize: u(40) }}>
            Song
          </span>{" "}
          and{" "}
          <span className={SCRIPT} style={{ fontSize: u(40) }}>
            Watch
          </span>
          <br />
          <strong className="font-bold">My Portfolio</strong>
        </span>
        <span
          className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
          style={{ width: u(69), height: u(69), background: DARK }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.1"
            style={{ width: u(40), height: u(40) }}
          >
            <path d="M2 12h20M14 4l8 8-8 8" />
          </svg>
        </span>
      </Link>
    </section>
  );
}

function Side({ name, subtitle, description, tracks }: AlbumSide) {
  return (
    <div>
      {/* Đầu cột */}
      <div className="flex items-center" style={{ height: u(88) }}>
        <div style={{ paddingRight: u(22) }}>
          <p className="leading-none" style={{ fontSize: u(38) }}>
            {name}
          </p>
          <p
            className={`leading-none ${SCRIPT}`}
            style={{ fontSize: u(52), marginTop: u(4) }}
          >
            {subtitle}
          </p>
        </div>
        <div
          className="self-stretch"
          style={{ width: u(2), background: "currentColor" }}
        />
        <p
          className="whitespace-pre-line"
          style={{ paddingLeft: u(18), fontSize: u(21), lineHeight: 1.25 }}
        >
          {description}
        </p>
      </div>

      {/* Danh sách bài */}
      <ul style={{ marginTop: u(20) }}>
        {tracks.map((track) => (
          <li key={track.label}>
            <Link
              href={track.href}
              className="flex items-center whitespace-nowrap transition-opacity hover:opacity-70"
              style={{ height: u(123), fontSize: u(32), gap: u(12) }}
            >
              <span>{track.label}:</span>
              <span className={SCRIPT} style={{ fontSize: u(32) }}>
                {track.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
