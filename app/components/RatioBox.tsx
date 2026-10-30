import { ReactNode } from "react";

export function RatioBox({
  ratio,
  children,
}: {
  ratio: number; // rộng / cao
  children: ReactNode;
}) {
  return (
    <div
      className="relative min-w-0 overflow-hidden"
      style={{ flex: `${ratio * 1000} 1 0%`, aspectRatio: ratio }}
    >
      {children}
    </div>
  );
}
