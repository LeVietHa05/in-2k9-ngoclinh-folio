import type { ReactNode } from "react";
import { SCRIPT, TEAL, u } from "./design";
import { PAGE_W } from "./ScaledPage";

export type SectionShellProps = {
  children: ReactNode;
  background?: string;
  /** Chiều cao tối thiểu (đơn vị u) */
  height?: number;
  /** Trang trí đặt tuyệt đối, ví dụ <SectionDecoration ... /> */
  decoration?: ReactNode;
};

export function SectionShell({
  children,
  background = TEAL,
  height = 640,
  decoration,
}: SectionShellProps) {
  return (
    <section
      className="relative w-full text-white"
      style={{
        padding: `${u(100)} 0`,
        background,
        minHeight: u(height),
        borderTopLeftRadius: u(58),
        borderTopRightRadius: u(58),
      }}
    >
      <div
        className="relative mx-auto"
        style={{ width: u(PAGE_W), padding: `${u(90)} ${u(115)}` }}
      >
        <div className="relative z-20">{children}</div>
        {decoration}
      </div>
    </section>
  );
}

export function SectionTitle({
  children,
  size = 130,
  align = "left",
}: {
  children: ReactNode;
  size?: number;
  align?: "left" | "right";
}) {
  return (
    <h2
      className={SCRIPT}
      style={{ fontSize: u(size), lineHeight: 1, textAlign: align }}
    >
      {children}
    </h2>
  );
}

export function SectionText({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontSize: u(30), lineHeight: u(40), textAlign: "justify" }}>
      {children}
    </div>
  );
}
