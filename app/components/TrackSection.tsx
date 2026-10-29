import type { ReactNode } from "react";
import { SCRIPT, TEAL, u } from "./design";
import { PAGE_W } from "./ScaledPage";

type TrackSectionProps = {
  title: string;
  text: string;
  /** Lưới ảnh, tự bố trí bên trong */
  children?: ReactNode;
  /** Màu nền section. Mặc định là TEAL */
  background?: string;
  /** Đảo vị trí: ảnh bên trái, chữ bên phải */
  reverse?: boolean;
  /** Chiều cao section (đơn vị u) */
  height?: number;
  /** Bề rộng cột ảnh, đã quy đổi theo u. Xem công thức bên dưới */
  galleryWidth?: number;
  /** Trong trường hợp có ảnh, text hoặc link ở chỗ dưới của text */
  custom?: ReactNode;
  /** Trang trí đặt tuyệt đối, ví dụ <SectionDecoration ... /> */
  decoration?: ReactNode;
};

export function TrackSection({
  title,
  text,
  children,
  background = TEAL,
  reverse = false,
  height = 640,
  galleryWidth = 1005,
  custom,
  decoration,
}: TrackSectionProps) {
  return (
    <section
      className="relative w-full text-white"
      style={{
        background,
        minHeight: u(height),
        borderTopLeftRadius: u(58),
        borderTopRightRadius: u(58),
      }}
    >
      <div
        className={`relative mx-auto flex ${reverse ? "flex-row-reverse" : ""}`}
        style={{ width: u(PAGE_W), padding: `${u(90)} ${u(115)}`, gap: u(60) }}
      >
        <div className="relative z-20" style={{ flex: 1 }}>
          <h2 className={SCRIPT} style={{ fontSize: u(130), lineHeight: 1 }}>
            {title}
          </h2>
          <p
            style={{
              fontSize: u(23),
              lineHeight: u(32),
              marginTop: u(40),
              textAlign: "justify",
            }}
          >
            {text}
          </p>
          {custom}
        </div>
        <div className="relative z-20 shrink-0" style={{ width: u(galleryWidth) }}>
          {children}
        </div>
        {decoration}
      </div>
    </section>
  );
}
