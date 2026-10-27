import type { CSSProperties, ReactNode } from "react";
import { INK, SCRIPT, u } from "./design";

/**
 * Đĩa CD dùng lại được ở mọi kích thước.
 *
 * - `size`: đường kính, tính bằng đơn vị u.
 * - `className` / `style`: đặt vị trí (left/top...). Đĩa luôn là `absolute`.
 * - `children`: nội dung đặt lên mặt đĩa. Dùng `cd(tỉ lệ)` để vị trí và cỡ chữ
 *   co giãn theo đường kính đĩa, ví dụ `cd(0.1)` = 10% đường kính.
 */
export const cd = (fraction: number) => `calc(var(--cd) * ${fraction})`;

// Các số đo bên dưới được lấy từ bản thiết kế đĩa đường kính 1008u
const REF = 1008;
const f = (px: number) => cd(px / REF);

type CdDiscProps = {
  size: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  spinSeconds?: number;
};

export function CdDisc({
  size,
  className = "",
  style,
  children,
  spinSeconds = 12,
}: CdDiscProps) {
  return (
    <div
      className={`absolute rounded-full  ${className}`}
      style={
        {
          "--cd": u(size),
          width: "var(--cd)",
          height: "var(--cd)",
          background: "#fbfcec",
          color: INK,
          boxShadow: `${f(6)} ${f(8)} ${f(10)} rgba(0,0,0,0.45)`,
          ...style,
        } as CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-full motion-reduce:!animate-none"
        style={{
          animation: spinSeconds
            ? `cd-spin ${spinSeconds}s linear infinite`
            : undefined,
          willChange: "transform",
        }}
      >
        {/* Mặt đĩa. TODO: thay bằng ảnh thật, ví dụ:
          <Image src="/cd-face.png" alt="" fill className="rounded-full object-cover" /> */}
        <div
          className="absolute rounded-full"
          style={{
            inset: f(24),
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
          style={{ inset: f(21), border: `${f(3)} solid #b5ecfb` }}
        />

        {/* Lỗ giữa đĩa */}
        <div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            width: f(143),
            height: f(143),
            background: "#9fe7fb",
            boxShadow: `inset ${f(-4)} ${f(-4)} ${f(8)} rgba(0,0,0,0.25)`,
          }}
        >
          <div
            className="flex items-center justify-center rounded-full bg-white"
            style={{ width: f(118), height: f(118) }}
          >
            <div
              className="rounded-full"
              style={{ width: f(82), height: f(82), background: "#8be8ff" }}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

/** Nhãn "Lindsey's CD" ở góc dưới phải mặt đĩa. `left` và `top` là tỉ lệ so với đường kính. */
export function CdBrandLabel({
  name = "Lindsey's",
  left = 587 / REF,
  top = 742 / REF,
}: {
  name?: string;
  left?: number;
  top?: number;
}) {
  return (
    <p
      className="absolute flex items-baseline leading-none"
      style={{ left: cd(left), top: cd(top), gap: f(14) }}
    >
      <span className={SCRIPT} style={{ fontSize: f(84) }}>
        {name}
      </span>
      <span style={{ fontSize: f(62) }}>CD</span>
    </p>
  );
}
