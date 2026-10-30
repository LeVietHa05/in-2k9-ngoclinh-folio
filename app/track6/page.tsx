import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import {
  DANCE_PHOTO_1,
  DANCE_PHOTO_2,
  MUSICAL_PHOTO,
  ART_PHOTO,
} from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";
import {
  SectionShell,
  SectionTitle,
  SectionText,
} from "../components/SectionShell";
import { u, SCRIPT } from "../components/design";
import Link from "next/link";
import Image from "next/image";
import { RatioBox } from "../components/RatioBox";
import { YouTubeFacade } from "../components/YouTubeFacade";
import collage from "@/public/track6/piano.png"; // ảnh bạn đã xuất
const collageRatio = collage.width / collage.height;

export default async function Track04Page() {
  return (
    <TrackPage
      activeLabel="track 06"
      label="TRACK 06:"
      title="Art-Performing & Visual"
      paragraphs={[
        "Art has always been a big part of who I am, finding its way into my life through dance, musicals, painting, and piano. Whether I'm performing on stage, working on a canvas, or sitting at the piano, creating has always been one of my favourite ways to express myself. I've poured a lot of love into the stories below, so I'll keep this introduction short and let the rest speak for itself. I hope you can feel a little of the passion behind each one.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <SectionShell
        background="#73BBBD"
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
        <div className="flex gap-20">
          <SectionTitle size={170} align="left">
            Dance
          </SectionTitle>
          <SectionText>
            Take a moment to enjoy my blend of two seemingly contrasting styles,
            contemporary and hip-hop, in the dance video below. Woven into the
            choreography are glimpses of Vietnamese culture and heritage, a part
            of my identity I carry with pride and would never hesitate to
            celebrate in any room I walk into.
          </SectionText>
        </div>
        <div className="flex gap-4 my-4">
          <iframe
            width="826"
            height="260"
            src="https://www.youtube.com/embed/lZuAlvoGHjQ"
            title="Lindsey - Rau Muong Xao (Contemporary)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="826"
            height="260"
            src="https://www.youtube.com/embed/4SvIzrkQdw0"
            title="Lindsey - Rau Muong Xao (Contemporary)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex" style={{ gap: u(60), marginTop: u(60) }}>
          <div style={{ flex: 1 }}>
            <SectionText>
              Dance might just be my longest relationship (hehe). I started at
              the age of three and, proud to say, have explored almost every
              style that was available to me, from silk dance, ballet, and
              aerobics to dancesport, hip-hop, and K-pop. Yet, I still find
              myself wanting to learn a hundred more, especially the styles that
              are more challenging and completely new to me. Wherever life has
              taken me, I&apos;ve always looked for opportunities to dance. If
              there&apos;s one hobby I can see myself pursuing for the rest of
              my life, it&apos;s this one.
            </SectionText>
            <div className="my-4"></div>
            <SectionText>
              I&apos;ll admit, though, that I still have plenty to learn. I
              don&apos;t know as many well-known figures in the dance community
              as some of my friends do, nor am I familiar with the histories
              behind every style I&apos;ve tried. But that&apos;s part of what
              excites me about continuing. I hope to fill those gaps as I meet
              more wonderful dancers from around the world, learning from their
              experiences and finding common ground through movement, even when
              we don&apos;t speak the same language.
            </SectionText>
          </div>
          <div className="shrink-0" style={{ width: u(850) }}>
            <Collage width={822} height={583} items={DANCE_PHOTO_1} />
          </div>
        </div>

        <div className="my-4 ">
          <SectionText>
            Teaching dance to girls in remote mountain communities through
            Fempower showed me how movement can cross barriers. Some girls had
            no phones, yet memorised a ten-second melody to learn the
            choreography. Seeing their joy reinforced my belief in dance&apos;s
            power to build confidence and self-expression. That&apos;s why dance
            is central to Fempower: helping a girl find her rhythm can be the
            first step towards finding her voice.
          </SectionText>
          <Collage width={1333} height={558} items={DANCE_PHOTO_2} />
        </div>

        <div className="my-4 flex  ">
          <iframe
            className="w-1/3 pr-2"
            width="826"
            height="200"
            src="https://www.youtube.com/embed/ijD-X_SlD74"
            title="Lindsey - Rau Muong Xao (Contemporary)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="826"
            className="w-1/3 pr-2"
            height="200"
            src="https://www.youtube.com/embed/ENadJVYbAzQ"
            title="Lindsey - Rau Muong Xao (Contemporary)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="826"
            className="w-1/3  "
            height="200"
            src="https://www.youtube.com/embed/0ZU_WHOIUNM"
            title="Lindsey - Rau Muong Xao (Contemporary)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SectionShell>

      <SectionShell
        background="#329D9C"
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
        <SectionTitle size={170} align="right">
          Musicals
        </SectionTitle>

        <div
          className="flex flex-row-reverse"
          style={{ gap: u(60), marginTop: u(60) }}
        >
          <div style={{ flex: 1 }} className="space-y-2">
            <SectionText>
              I never thought I&apos;d become a theatre kid, especially since
              musicals aren&apos;t exactly mainstream in Vietnam. Yet, I&apos;ve
              been lucky enough to perform in a different school musical each
              year, from playing a cheer captain in High School Musical to
              becoming a lead dancer in Mamma Mia!, combining my love for dance
              with acting.
            </SectionText>
            <SectionText>
              Then came School of Rock, which pushed me far outside my comfort
              zone. Playing Zack Mooneyham, a thirteen-year-old lead guitarist
              at seventeen, meant learning guitar and singing two ridiculously
              high-pitched solos despite my naturally low, raspy voice. *cries*.
              Learning an entirely new instrument also taught me patience,
              something I desperately needed when I couldn&apos;t get things
              right immediately.
            </SectionText>
            <SectionText>
              School of Rock remains my favourite performance. Standing under
              the spotlight gave me an unexpected burst of courage, helping me
              push through my nerves and give the character everything I had. I
              still cringe listening to my singing recordings, but I&apos;m
              proud of the skills I gained and always grateful for the
              reassurance from my drama and music teachers. Sometimes, you have
              to take the stage before you feel ready to discover what
              you&apos;re capable of.
            </SectionText>
            <SectionText>
              Don&apos;t believe my singing is questionable, or want to witness
              my very real (and only slightly performative) guitar skills?
              Here&apos;s the evidence. I&apos;ll let the video speak for
              itself. 🎸
            </SectionText>
          </div>
          <div className="shrink-0" style={{ width: u(1050) }}>
            <Collage width={750} height={550} items={MUSICAL_PHOTO} />

            <div className="flex ">
              <iframe
                className="w-1/3 pr-2"
                width="240"
                height="428"
                src="https://www.youtube.com/embed/pTNDMJB82IA"
                title="School of Rock - You&#39;re In the Band"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <iframe
                width="240"
                className="w-1/3 pr-2"
                height="428"
                src="https://www.youtube.com/embed/TfonmEV7XcQ"
                title="School of Rock - Teacher&#39;s Pet"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <iframe
                width="240"
                className="w-1/3"
                height="428"
                src="https://www.youtube.com/embed/POxOAJMIft0"
                title="Musical “School of Rock” 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </SectionShell>

      <TrackSection
        title="Visual Arts"
        text="Painting has always been one of my ways of making sense of the world, from canvases to the little sketches and doodles I still make today. In Years 6 and 7, I won several art competitions for conveying meaningful messages through my work, and organised Colour My Life, an exhibition documenting my journey with acrylic painting.
<br/><br/>
Although I paint less now, my passion has found new forms in designing Humans of ISPH, creating Student Council posters, and shaping TEDxISPH Youth's visual identity. From brushstrokes to graphic design, I still love bringing ideas to life visually and finding ways to make messages resonate."
        background="#1A565A"
        decoration={
          <>
            <SectionDecoration
              left={-300}
              top={-550}
              size={760}
              discOpacity={0}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b4.png"
            />
            <SectionDecoration
              left={1400}
              top={-350}
              size={860}
              discOpacity={0.25}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc=""
              hole
            />
          </>
        }
        custom={
          <Link
            className={SCRIPT}
            style={{ marginTop: "12px", display: "block" }}
            href={
              "https://drive.google.com/drive/folders/15AIoxCi-up87oLvAkF2P8vU1ljg7PjC8"
            }
          >
            Mini Exhibition “Color your Life”
          </Link>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={ART_PHOTO} width={905} height={900} />
      </TrackSection>

      <SectionShell>
        {/* Hàng trên: chữ bên trái, tiêu đề bên phải */}
        <div className="flex items-center" style={{ gap: u(60) }}>
          <div style={{ flex: 1 }}>
            <SectionText>
              After twelve years of piano and competitions, it has gradually
              become a hobby as life gets busier. Yet, piano remains one of the
              foundations of my patience. Like dance, it takes countless small
              details to make a performance feel effortless, but every misplaced
              note is immediately heard. Through daily practice, I&apos;ve
              learnt to stay calm, embrace gradual improvement, and find
              discipline in the process.
            </SectionText>
          </div>
          <div className="shrink-0">
            <SectionTitle size={130} align="right">
              Piano
            </SectionTitle>
          </div>
        </div>

        {/* Hàng dưới: Short bên trái, ảnh ghép bên phải, cao bằng nhau */}
        <div
          className="flex items-start"
          style={{ gap: u(12), marginTop: u(50) }}
        >
          <RatioBox ratio={9 / 16}>
            <YouTubeFacade videoId="0SeOXCj6WIs" title="Piano performance" />
          </RatioBox>
          <RatioBox ratio={collageRatio}>
            <Image
              src={collage}
              alt="Một số khoảnh khắc chơi piano"
              fill
              sizes="80vw"
              className="object-cover"
            />
          </RatioBox>
        </div>
      </SectionShell>
    </TrackPage>
  );
}
