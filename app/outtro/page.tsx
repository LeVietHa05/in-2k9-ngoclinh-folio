import { TrackPage } from "@/app/components/Trackpage";
import { SectionDecoration } from "../components/SectionDecoration";
import { SectionShell, SectionText } from "../components/SectionShell";
import { u, SCRIPT, CARD, TEAL } from "../components/design";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { CarouselPhoto } from "../components/Photocarousel";

const photos: CarouselPhoto[] = [
  {
    src: "",
    alt: "",
  },
];

export default async function Track04Page() {
  return (
    <TrackPage
      activeLabel="Outro"
      label="OUTRO:"
      title="Concert & Why Music"
      paragraphs={[
        "Maybe this is the part that explains why this website had to be a CD.",
        "I love concerts because they turn music into something physical. I have collected ticket stubs, photos, videos, setlists, tiny moments from the crowd, and memories that I can still connect to a particular song years later. There is something special about thousands of people knowing the same words at exactly the same time. ",
        "Music has followed me through almost every version of myself. I play it, perform it, photograph it, travel for it, and sometimes simply put on headphones and disappear into it.",
        "So if these tracks are pieces of me, this is the soundtrack holding them together.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
      photos={Array.from({ length: 27 }, (_, i) => ({
        src: `/outro/${i + 4}.png`,
        alt: `Photo ${i + 1}`,
      }))}
    >
      <SectionShell
        background={CARD}
        height={2500}
        decoration={
          <>
            <SectionDecoration
              left={-300}
              top={1050}
              size={760}
              discOpacity={0.25}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc=""
              hole
            />
            {/* <SectionDecoration
              left={1400}
              top={-350}
              size={860}
              discOpacity={0.25}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b3.png"
              hole
            /> */}
          </>
        }
      >
        <Stage height={2230}>
          {/* Tầng 0: dải xanh đậm nằm sau, tràn hết bề rộng section (x âm để bù padding 115) */}
          <At x={-115} y={730} w={1920} z={0}>
            <div
              style={{ height: u(1300), background: TEAL, borderRadius: u(58) }}
            />
          </At>

          {/* Tầng 1: các khối chồng qua ranh giới */}
          <At x={0} y={0} w={620}>
            <Image src={"/outro/1.png"} alt="" width={677} height={496}></Image>
          </At>
          <At x={700} y={0} w={640}>
            <SectionText>
              Taken at my idol&apos;s fan booth, this photo probably captures
              who I am right now better than anything else: five bandanas, two
              twillies, a light stick, two hair clips, and fifteen keychains,
              all on one merch tote. Live music keeps me going, even on
              difficult days. Somehow, I find my deepest peace in the loudest,
              most crowded places, where thousands of strangers sing the same
              lyrics and feel like home. Nothing makes me happier than the
              music, fireworks, and thousands of people screaming their hearts
              out together.
            </SectionText>
          </At>
          {/* thẻ Spotify + dòng chú thích */}
          <At x={1000} y={550} w={480}>
            <Image src={"/outro/2.png"} alt="" width={486} height={491}></Image>
            <SectionText>
              My most-played album of the past year, always on repeat and the
              design inspiration behind this website.
            </SectionText>
          </At>

          {/* Trong dải đậm */}
          <At x={0} y={1100} w={760}>
            {/* ảnh chụp kênh YouTube (có link) */}
            <Image src={"/outro/3.png"} alt="" width={737} height={712}></Image>
          </At>
          {/* hai đoạn chữ + "Visit my Youtube" */}
          <At x={820} y={1300} w={700}>
            <SectionText>
              My phone simply cannot hold all my concert videos, but I could
              never bring myself to delete them either. So, I started uploading
              them to YouTube, partly to revisit these memories whenever I miss
              them, and partly to share the experience with friends who
              couldn&apos;t be there with me.
            </SectionText>
            <SectionText>
              With over 250 videos and counting, this little channel has become
              my own archive of live music, a safe place I return to whenever I
              need a familiar tune or a reminder of a good night. It&lsquo;s
              probably my most-visited corner of the internet after Spotify, and
              the playlist is far from finished.
            </SectionText>
            <Link
              className={SCRIPT}
              style={{ fontSize: "24px" }}
              href={"https://www.youtube.com/@lindseysconcertvideos/videos"}
            >
              Visit my Youtube
            </Link>
          </At>
        </Stage>

        {/* Đoạn văn dài cuối: chảy bình thường */}
        <SectionText>
          Ten concerts in, including one that took me 1,186 km from home, and
          I&apos;m still not done. One of my favourites is Call Me by Fire, a
          show that gives seasoned performers a chance to reinvent themselves
          and prove that there&apos;s always a new note to discover. Watching
          34+ artists turn the stage into their home with breathtaking
          arrangements, costumes, choreography never gets old. Here are some
          snapshots of me being unapologetically a fangirl, when I can put aside
          being a leader and just blend into the crowd, carried by the same
          music and beating to the same rhythm.
        </SectionText>
      </SectionShell>
    </TrackPage>
  );
}

/** Khung có chiều cao cố định, các khối con đặt tuyệt đối bên trong. */
export function Stage({
  height,
  children,
}: {
  height: number;
  children: ReactNode;
}) {
  return (
    <div className="relative" style={{ height: u(height) }}>
      {children}
    </div>
  );
}

/** Đặt một khối tại (x, y), rộng w (đơn vị u, tính từ góc trên trái của Stage). Cao thì tự theo nội dung. */
export function At({
  x,
  y,
  w,
  z = 10,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  z?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute"
      style={{ left: u(x), top: u(y), width: w ? u(w) : undefined, zIndex: z }}
    >
      {children}
    </div>
  );
}
