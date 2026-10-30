import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import {
  FOOTBALL_PHOTO,
  BASKET_PHOTO,
  RUNNING_PHOTO,
  BADMINTON_PHOTO,
  DUKE,
} from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";
import {
  SectionShell,
  SectionTitle,
  SectionText,
} from "../components/SectionShell";
import { u, SCRIPT } from "../components/design";

export default async function Track04Page() {
  return (
    <TrackPage
      activeLabel="track 05"
      label="TRACK 05:"
      title="Sports"
      paragraphs={[
        "I used to think playing multiple sports meant I would never truly excel at any. At ISPH, where the same people often make up every varsity team, it became my strength. What began as fun grew into a way to get fitter, prove that girls belong on the pitch, and satisfy my competitive streak. Today, it's the team spirit, shared victories, and teammates by my side that keep me coming back. ",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <TrackSection
        title="Football"
        text="Football is where I leave overthinking behind. Co-founding and captaining ISPH's Varsity Girls' Football Team meant building a sports culture from scratch, starting with beginners and twice-weekly drills under the sun or rain. Leading thirty girls to second place in the WHSL and HAC regional championships was rewarding, but watching us grow in skill, resilience, and trust taught me what it means to play as one team."
        background="#73BBBD"
      >
        {/* lưới ảnh MC */}
        <Collage items={FOOTBALL_PHOTO} width={822} height={478} />
      </TrackSection>

      <TrackSection
        title="Basketball"
        text="Basketball was probably the first team sport I played (if we're not counting dance :D). I love both playing and watching it, admiring the artistry in how players move. It introduced me to the joy of relying on teammates and working towards something as one."
        reverse
        background="#1A565A"
        decoration={
          <>
            <SectionDecoration
              left={-300}
              top={-350}
              size={760}
              discOpacity={0}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b2.png"
            />
            <SectionDecoration
              left={1400}
              top={350}
              size={560}
              discOpacity={0}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b2.png"
            />
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={BASKET_PHOTO} width={896} height={638} />
      </TrackSection>

      <TrackSection
        title="Runnning"
        text="Running was the last sport I expected to pick up, but here we are. It's tested my endurance and consistency, and nothing beats finishing a run feeling stronger than when I started. Races are surprisingly fun, especially with that good kind of peer pressure. Add Spotify to the mix, and I'm sold. #notsponsored"
        background="#73BBBD"
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
      >
        {/* lưới ảnh MC */}
        <Collage items={RUNNING_PHOTO} width={896} height={638} />
      </TrackSection>

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
            <SectionDecoration
              left={1400}
              top={-350}
              size={860}
              discOpacity={0.25}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b3.png"
              hole
            />
          </>
        }
      >
        <SectionTitle size={170} align="left">
          Badminton
        </SectionTitle>
        <div className="flex" style={{ gap: u(60), marginTop: u(60) }}>
          <div style={{ flex: 1 }}>
            <SectionText>
              Badminton was the first sport I ever played, mostly because I
              thought it looked easy (oh, how wrong I was). I&apos;ve never
              trained formally, but somehow, a little instinct and learning from
              others have helped me play well and come close to winning
              tournaments several times. Watching skilled players has shown me
              just how technical the sport can be, giving me so much respect for
              those who master it. Still, it&apos;s a sport I always enjoy
              returning to.
            </SectionText>
          </div>
          <div className="shrink-0" style={{ width: u(1050) }}>
            <Collage width={827} height={456} items={BADMINTON_PHOTO} />
          </div>
        </div>
        <div>
          <SectionText>
            <div className="text-center">
              Enjoy this (rare) badminton highlight that features some
              surprisingly decent shots and a little side commentaries from my
              friends!
            </div>
          </SectionText>
          <iframe
            className="mx-auto"
            width="826"
            height="465"
            src="https://www.youtube.com/embed/9U7hv9OG8v4"
            title="Badminton Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </SectionShell>

      <TrackSection
        title="Duke of Edinburgh"
        text="The Duke of Edinburgh's Award sometimes felt more like a survival game than hiking. Across four Bronze and Silver expeditions, I covered over 75 km carrying a 13 kg backpack, pushing my physical limits (and once falling ill for a week afterwards). Beyond the hikes, I logged over 130 hours of activities, from cooking and photography to football coaching and volunteering with children. It was demanding, but I'm proud I stuck with it and made it through."
        reverse
        background="#1A565A"
        decoration={
          <>
            <SectionDecoration
              left={-300}
              top={-350}
              size={760}
              discOpacity={0}
              butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
              butterflySrc="/track1/b2.png"
            />
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={DUKE} width={753} height={690} />
      </TrackSection>
    </TrackPage>
  );
}
