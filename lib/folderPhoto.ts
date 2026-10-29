import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { RowPhoto } from "@/app/components/PhotoRows";

/** Đọc mọi ảnh trong public/<folder>, sắp xếp theo tên file, kèm tỉ lệ khung hình. Chỉ chạy phía server. */
export async function getFolderPhotos(folder: string): Promise<RowPhoto[]> {
  const dir = path.join(process.cwd(), "public", folder);
  const files = (await readdir(dir))
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return Promise.all(
    files.map(async (f) => {
      const {
        width = 1,
        height = 1,
        orientation = 1,
      } = await sharp(path.join(dir, f)).metadata();
      // Ảnh điện thoại có thể bị xoay bởi EXIF, khi đó đổi chỗ rộng và cao
      const [w, h] = orientation >= 5 ? [height, width] : [width, height];
      return { src: `/${folder}/${f}`, ratio: w / h };
    }),
  );
}
