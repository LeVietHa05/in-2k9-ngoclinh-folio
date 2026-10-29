import Image from "next/image";
import { CdDisc } from "./CDisk";
import { u } from "./design";

type SectionDecorationProps = {
  /** Vị trí góc trên trái của đĩa, tính từ góc trên trái của section (đơn vị u). Có thể âm. */
  left: number;
  top: number;
  /** Đường kính đĩa (đơn vị u) */
  size: number;
  /** Ảnh con bướm trong /public. Đổi theo từng chỗ. Bỏ trống để không hiện bướm. */
  butterflySrc?: string;
  /** Vị trí và cỡ con bướm, tính theo tỉ lệ đường kính đĩa (0 đến 1) */
  butterfly?: { x: number; y: number; w: number };
  /** Độ mờ của đĩa, 0 đến 1 */
  discOpacity?: number;
};

export function SectionDecoration({
  left,
  top,
  size,
  butterflySrc = "/about/butterfly.png",
  butterfly = { x: 0.1, y: 0, w: 0.8 },
  discOpacity = 0.18,
}: SectionDecorationProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute z-10"
      style={{ left: u(left), top: u(top), width: u(size), height: u(size) }}
    >
      <CdDisc
        size={size}
        hole={false}
        style={{ left: 0, top: 0, opacity: discOpacity, boxShadow: "none" }}
      />
      {butterflySrc ? (
        <div
          className="absolute"
          style={{
            left: `${butterfly.x * 100}%`,
            top: `${butterfly.y * 100}%`,
            width: `${butterfly.w * 100}%`,
            aspectRatio: "1 / 1",
            filter: `drop-shadow(0 0 ${u(16)} rgba(71, 166, 214, 0.85))`,
          }}
        >
          <Image
            src={butterflySrc}
            alt=""
            fill
            sizes="25vw"
            className="object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
