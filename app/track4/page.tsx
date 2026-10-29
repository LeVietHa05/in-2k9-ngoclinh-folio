import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import Link from "next/link";
import Image from "next/image";
import { u, SCRIPT } from "../components/design";
import { HEAD_PHOTO, RESEARCH_PHOTO, HOUSE_CAPTAIN_PHOTO } from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";
import {
  SectionShell,
  SectionTitle,
  SectionText,
} from "../components/SectionShell";
import { CaptionedImage } from "../components/CaptionedImage";

import { getFolderPhotos } from "@/lib/folderPhoto";
import { PhotoRows, splitRows } from "@/app/components/PhotoRows";

import { Suspense } from "react";

export default async function Track04Page() {
  return (
    <TrackPage
      activeLabel="track 04"
      label="TRACK 04:"
      title="Leadership & School Life"
      paragraphs={[
        "ISPH has given me the space to explore new ideas, bring events to life, and grow as a leader, with the people, resources, and support to try without fear of failure. Over four years, it has been the stage on which I found my voice, each experience adding another track to my high school journey. As graduation approaches, I know I will miss this community, and the people who made it feel like home, more than words can say.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <TrackSection
        title="Head Student"
        text="Becoming Head Student feels like reaching the final form of being a student (haha), but the responsibility quickly proved real. Working with students, teachers, and parents has challenged me to bridge perspectives and advocate for a better school experience. I've also learnt that leadership means letting go, trusting my team, and bringing people together to turn ideas into action rather than trying to do everything myself."
        background="#73BBBD"
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0}
            butterflySrc="/track1/b4.png"
            hole={true}
          />
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={HEAD_PHOTO} width={779} height={479} />
      </TrackSection>

      <SectionShell
        background="#329D9C"
        decoration={
          <>
            <SectionDecoration
              left={-500}
              top={-350}
              size={760}
              discOpacity={0}
              butterflySrc="/track1/b2.png"
              hole={true}
            />
            <SectionDecoration
              left={1400}
              top={-350}
              size={760}
              discOpacity={0.25}
              butterflySrc=""
              hole={true}
            />
          </>
        }
      >
        <SectionTitle>Humans of ISPH</SectionTitle>
        <div style={{ marginTop: u(40) }}>
          <SectionText>
            Humans of ISPH will always be my firstborn child, a project I&apos;m
            incredibly proud of. Our Years 7–13 team pours care into every page,
            celebrating the diversity of our community. My favourite section
            honours often-overlooked staff, from security guards to kitchen and
            IT teams, recognising the people behind their roles. I&apos;ve also
            loved mentoring younger members in writing and interviewing,
            watching them bring their ideas to life.
          </SectionText>
        </div>
        <div
          className="flex justify-center"
          style={{ gap: u(16), marginTop: u(70) }}
        >
          <Link href={"https://humansofisph.org/"}>
            <CaptionedImage
              src="/track4/h-1.png"
              caption="Pilot Issue - September 2025"
              width={316}
              height={447}
            />
          </Link>
          <Link href={"https://humansofisph.org/"}>
            <CaptionedImage
              src="/track4/h-2.png"
              caption="Issue #1 - October 2025"
              width={316}
              height={447}
            />
          </Link>
          <Link href={"https://humansofisph.org/"}>
            <CaptionedImage
              src="/track4/h-3.png"
              caption="Issue #2 - November 2025"
              width={316}
              height={447}
            />
          </Link>
          <Link href={"https://humansofisph.org/"}>
            <CaptionedImage
              src="/track4/h-4.png"
              caption="Issue #3 - December 2025"
              width={316}
              height={447}
            />
          </Link>
        </div>
      </SectionShell>

      <SectionShell background="#1e5f63">
        <SectionTitle size={170} align="right">
          TEDxISPH Youth
        </SectionTitle>
        <div className="flex" style={{ gap: u(60), marginTop: u(60) }}>
          <div className="shrink-0" style={{ width: u(1050) }}>
            <Collage width={830} height={871} items={RESEARCH_PHOTO} />
          </div>
          <div style={{ flex: 1 }}>
            <SectionText>
              Co-organising ISPH&apos;s first licensed TEDxISPH Youth conference
              let me experience the event from two angles, first in Human
              Resources, then leading Public Relations. Working with around
              thirty student organisers to bring six speakers and hundreds of
              attendees together challenged me to navigate strict licensing
              guidelines and communicate professionally with speakers across
              Vietnam. Seeing both the 2025 and 2026 events come to life made
              every stressful moment worthwhile, knowing we had created a
              platform for young people to share ideas worth listening to.
            </SectionText>
          </div>
        </div>
      </SectionShell>

      <TrackSection
        title="House Captain"
        text="Elected Tê Giác (Rhino) House Leader in my second week at ISPH, Year 10, I began with barely knowing my housemates. Their trust and support carried us to our first-ever House Championship Trophy, leading over 100 students across academic, artistic, and sporting competitions. The experience taught me that house spirit comes from everyone showing up and taking pride in being a Rhino. Leading our house to the first victory in ISPH history will always be special, and I'll never stop screaming when we win the weekly housepoint championship. "
        background="#329D9C"
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0}
            butterflySrc="/track4/b1.png"
          />
        }
        custom={
          <>
            <p>❤️🦏 #TeGiacBestHouse</p>
            <div style={{ width: "100%", marginTop: "24px" }}>
              <Image
                src={"/track4/hc-9.png"}
                alt=""
                width={543}
                height={306}
              ></Image>
            </div>
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={HOUSE_CAPTAIN_PHOTO} width={682} height={894} />
      </TrackSection>

      <SectionShell
        background="#1A565A"
        decoration={
          <>
            <SectionDecoration
              left={-500}
              top={-350}
              size={760}
              discOpacity={0}
              butterflySrc="/track1/b2.png"
              hole={true}
            />
            <SectionDecoration
              left={300}
              top={-350}
              size={960}
              discOpacity={0.25}
              butterflySrc=""
              hole={true}
            />
          </>
        }
      >
        <SectionTitle>
          <div className="text-right">Honors and Awards</div>
        </SectionTitle>
        <div style={{ marginTop: u(40) }}>
          <SectionText>
            <div className="flex justify-end">
              <div className="w-1/2">
                A little highlight reel of the milestones and achievements
                I&apos;ve collected throughout my years at ISPH.
              </div>
            </div>
          </SectionText>
        </div>
        <div className=" " style={{ gap: u(0), marginTop: u(30) }}>
          <Suspense fallback={<div style={{ height: u(900) }} />}>
            <AwardsGallery />
          </Suspense>
        </div>
      </SectionShell>
    </TrackPage>
  );
}

async function AwardsGallery() {
  const photos = await getFolderPhotos("track4/ha");
  return <PhotoRows rows={splitRows(photos, [5, 6, 5])} gap={12} />;
}
