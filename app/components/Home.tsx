import Link from "next/link";
import type { CSSProperties } from "react";

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

const TEAL = "#339c9d";
const DARK = "#022327";
const INK = "#0a3b40";

/** Đổi số đơn vị thiết kế thành giá trị CSS co giãn theo màn hình. */
const u = (n: number) => `calc(var(--u) * ${n})`;

/** Font chữ thảo. Định nghĩa biến --font-script trong layout (xem hướng dẫn). */
const SCRIPT = "font-[family-name:var(--font-script,cursive)] font-normal";

type Track = { label: string; title: string; href: string };

// TODO: sửa chữ + đường dẫn
const SIDE_A: Track[] = [
  { label: "PRELUDE", title: "About Me", href: "/aboume" },
  { label: "TRACK 01", title: "Finding My Voice", href: "/track1" },
  { label: "TRACK 02", title: "Social Impact & Community", href: "/track2" },
  { label: "TRACK 03", title: "Research & Publications", href: "/track3" },
];

const SIDE_B: Track[] = [
  { label: "TRACK 04", title: "Leadership & School Life", href: "/track4" },
  { label: "TRACK 05", title: "Sports", href: "/track5" },
  { label: "TRACK 06", title: "Art-Performing & Visual", href: "/track6" },
  { label: "Outro", title: "Concert & Why Music", href: "/outtro" },
];

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
        <CdDisc />
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
        <Side
          name="SIDE A"
          subtitle="The Making"
          description={"Who I am,\nwhat I question,\nwhat I build."}
          tracks={SIDE_A}
        />
        <Side
          name="SIDE B"
          subtitle="The Becoming"
          description={"What I have explored,\nled,\nand loved."}
          tracks={SIDE_B}
        />
      </div>

      {/* Nút "Choose a Song and Watch My Portfolio" */}
      <Link
        href="/aboutme" // TODO: đường dẫn trang portfolio
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

function Side({
  name,
  subtitle,
  description,
  tracks,
}: {
  name: string;
  subtitle: string;
  description: string;
  tracks: Track[];
}) {
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
              style={{ height: u(123), fontSize: u(33), gap: u(12) }}
            >
              <span>{track.label}:</span>
              <span className={SCRIPT} style={{ fontSize: u(33) }}>
                {track.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nửa phải: đĩa CD (tràn sang nửa trái một chút)                      */
/* ------------------------------------------------------------------ */

function CdDisc() {
  return (
    <div
      className="absolute z-0 rounded-full"
      style={{
        left: u(1012),
        top: u(36),
        width: u(1008),
        height: u(1008),
        background: "#fbfcec",
        boxShadow: `${u(6)} ${u(8)} ${u(10)} rgba(0,0,0,0.45)`,
      }}
    >
      {/* Mặt đĩa. TODO: thay bằng ảnh thật, ví dụ:
          <Image src="/cd-face.png" alt="" fill className="rounded-full object-cover" /> */}
      <div
        className="absolute rounded-full"
        style={{
          inset: u(24),
          background: `
            conic-gradient(from 15deg,
              rgba(255,255,255,0.45) 0deg 70deg,
              rgba(255,255,255,0) 70deg 140deg,
              rgba(255,255,255,0.35) 140deg 215deg,
              rgba(255,255,255,0) 215deg 290deg,
              rgba(255,255,255,0.4) 290deg 360deg),
            radial-gradient(circle at center, #86c5c7 0%, #bfdedb 30%, #eaf3e8 60%, #fbfcec 85%)
          `,
        }}
      />

      {/* Vành xanh nhạt */}
      <div
        className="absolute rounded-full"
        style={{
          inset: u(21),
          border: `${u(3)} solid #b5ecfb`,
        }}
      />

      {/* Lỗ giữa đĩa */}
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          width: u(143),
          height: u(143),
          background: "#9fe7fb",
          boxShadow: `inset ${u(-4)} ${u(-4)} ${u(8)} rgba(0,0,0,0.25)`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-white"
          style={{ width: u(118), height: u(118) }}
        >
          <div
            className="rounded-full"
            style={{ width: u(82), height: u(82), background: "#8be8ff" }}
          />
        </div>
      </div>

      {/* Năm (góc trên trái của đĩa) */}
      <ul
        className={`absolute  `}
        style={{
          left: u(195),
          top: u(224),
          fontSize: u(40),
          lineHeight: u(46),
        }}
      >
        <li style={{ color: "#6fbcbc" }}>
          202<span className={SCRIPT}>4</span>
        </li>
        <li style={{ color: "#2f9a9a" }}>
          202<span className={SCRIPT}>5</span>
        </li>
        <li style={{ color: INK }}>
          202<span className={SCRIPT}>6</span>
        </li>
      </ul>

      {/* Nhãn "Lindsey's CD" (góc dưới phải của đĩa) */}
      <p
        className="absolute flex items-baseline leading-none"
        style={{ left: u(587), top: u(742), gap: u(14) }}
      >
        <span className={SCRIPT} style={{ fontSize: u(84) }}>
          Lindsey&apos;s
        </span>
        <span style={{ fontSize: u(62) }}>CD</span>
      </p>
    </div>
  );
}
