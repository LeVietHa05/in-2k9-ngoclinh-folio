/**
 * Các giá trị dùng chung cho mọi trang.
 *
 * `u(n)` đổi "n đơn vị thiết kế" thành giá trị CSS co giãn theo màn hình.
 * Phần tử cha phải định nghĩa biến CSS `--u` (xem HomeIntro.tsx và ScaledPage.tsx).
 */
export const u = (n: number) => `calc(var(--u) * ${n})`;

/** Font chữ thảo. Định nghĩa biến --font-script trong layout (next/font). */
export const SCRIPT = "font-[family-name:var(--font-script,cursive)] font-normal";

export const TEAL = "#339c9d";
export const DARK = "#022327";
export const INK = "#0a3b40";
export const CREAM = "#fffdf0";
export const CARD = "#78bdbd";