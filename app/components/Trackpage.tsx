import type { ReactNode } from "react";
import { AlbumHeader } from "./Albumheader";
import { CdBrandLabel, CdDisc, cd } from "./CDisk";
import { CARD, SCRIPT, u } from "./design";
import { PhotoCarousel, type CarouselPhoto } from "./Photocarousel";
import { PAGE_W, ScaledPage } from "./ScaledPage";

/**
 * Trang chi tiết một bài (Prelude, Track 01...): header album, đĩa CD + thẻ nội dung, carousel ảnh.
 * Dùng lại cho mọi bài bằng cách đổi props.
 */
type TrackPageProps = {
  /** Chữ nhỏ trên đĩa, ví dụ "PRELUDE:" */
  label: string;
  /** Chữ thảo trên đĩa, ví dụ "About Me" */
  title: string;
  /** Mỗi phần tử là một đoạn văn */
  paragraphs: string[];
  linkText?: string;
  linkHref?: string;
  photos?: CarouselPhoto[];
  /** Thay section trên cùng nếu muốn (mặc định là <AlbumHeader />) */
  header?: ReactNode;
  activeLabel?: string
};

export function TrackPage({
  label,
  title,
  paragraphs,
  linkText,
  linkHref = "#",
  photos,
  header,
  activeLabel,
}: TrackPageProps) {
  return (
    <ScaledPage>
      {header ?? <AlbumHeader activeLabel={activeLabel}/>}

      {/* Đĩa CD + thẻ nội dung */}
      <section className="w-full">
        <div
          className="relative mx-auto"
          style={{ width: u(PAGE_W), height: u(1140) }}
        >
          {/* Thẻ xanh nhạt: mép trái nằm sau đĩa CD */}
          <div
            className="absolute flex flex-col text-white"
            style={{
              left: u(561),
              top: u(107),
              width: u(1288),
              height: u(923),
              borderRadius: u(58),
              background: CARD,
              paddingTop: u(112),
              paddingBottom: u(95),
              paddingLeft: u(501),
              paddingRight: u(73),
            }}
          >
            <div
              style={{
                fontSize: u(29),
                lineHeight: u(38),
                textAlign: "justify",
              }}
            >
              {paragraphs.map((text, i) => (
                <p key={i} style={i > 0 ? { marginTop: u(38) } : undefined}>
                  {text}
                </p>
              ))}
            </div>

            {linkText ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto underline transition-opacity hover:opacity-70"
                style={{ fontSize: u(22), lineHeight: u(27), maxWidth: u(680) }}
              >
                {linkText}
              </a>
            ) : null}
          </div>

          <CdDisc size={918} style={{ left: u(102), top: u(107) }}>
            <div
              className="absolute"
              style={{ left: cd(0.1376), top: cd(0.19) }}
            >
              <p style={{ fontSize: cd(0.099), lineHeight: 1 }}>{label}</p>
              <p
                className={SCRIPT}
                style={{
                  fontSize: cd(0.12),
                  lineHeight: 1,
                  marginTop: cd(0.012),
                }}
              >
                {title}
              </p>
            </div>
            <CdBrandLabel left={0.521} top={0.75} />
          </CdDisc>
        </div>
      </section>

      {/* Carousel ảnh */}
      <section
        className="w-full"
        style={{ paddingTop: u(68), paddingBottom: u(240) }}
      >
        <PhotoCarousel photos={photos} />
      </section>
    </ScaledPage>
  );
}
