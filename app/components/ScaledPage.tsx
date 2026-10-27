import type { CSSProperties, ReactNode } from "react";
import { CREAM, INK } from "./design";

/** Bề rộng canvas thiết kế của các trang cuộn (đơn vị u). */
export const PAGE_W = 1920;
const PAGE_REF_H = 1080;

/**
 * Wrapper cho các trang dài (có cuộn dọc). Định nghĩa `--u` cho mọi component bên trong.
 *
 * 1u = min(bề rộng / 1920, chiều cao màn hình / 1080):
 *   - màn thường: nội dung vừa khít chiều rộng
 *   - màn rất rộng / ngắn (21:9): nội dung không phình quá to, được căn giữa;
 *     các section có nền riêng (như AlbumHeader) vẫn tràn hết chiều ngang
 *
 * Dùng container query (`cqw`) thay vì `vw` để không bị lệch khi có thanh cuộn dọc.
 */
export function ScaledPage({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen w-full"
      style={
        {
          containerType: "inline-size",
          "--u": `min(100cqw / ${PAGE_W}, 100vh / ${PAGE_REF_H})`,
          background: CREAM,
          color: INK,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}