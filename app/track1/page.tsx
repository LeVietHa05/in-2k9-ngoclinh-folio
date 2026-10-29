import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import Image from "next/image";
import { u } from "../components/design";
import { MC_PHOTOS, DEBATE_PHOTO, SPEAKING_PHOTO, BUSINESS } from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";

export default function AboutPage() {
  return (
    <TrackPage
      activeLabel="track 01"
      label="TRACK 01:"
      title="Finding My Voice"
      paragraphs={[
        "I found my voice through MC, debate, speaking contests, and business case competitions, learning to think on my feet, build arguments, and communicate with confidence. Debate taught me to listen as much as I spoke, while my growing interest in advocacy made me question whose voices were missing from the conversation. Each experience continues to shape how I speak, think, and connect with others.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <TrackSection
        title="MC"
        text="I began hosting international competitions and conferences in English in Year 5. From IMSO, with participants from 30 countries, to the LYIS Leadership Conference, where I introduced Vietnamese culture to educational leaders, I learnt to use pacing, vocal dynamics, and pauses to engage an audience. These experiences sparked my appreciation for the art of hosting."
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0}
            butterflySrc="/track1/b2.png"
          />
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={MC_PHOTOS} width={795} height={721} />
      </TrackSection>

      <TrackSection
        title="Debate"
        text="I started debating in 2019, spending much of 2020–2023 preparing for and competing in tournaments, even when the pandemic moved them online. Debate taught me to build logical arguments, question assumptions, and see issues from new perspectives. Reaching the Top 24 of the National Junior Squad and Top 30 of the National Squad pushed me to learn from Vietnam’s brightest young thinkers. Beyond competition, debate gave me a community I remain grateful for, and lessons that continue to shape how I see the world."
        background="#1e5f63"
        reverse
        custom={
          <iframe
            style={{ marginTop: u(40) }}
            width="435"
            height="247"
            src="https://www.youtube.com/embed/h1VFEll3hoY"
            title="Speak to Inspire 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        }
        decoration={
          <SectionDecoration
            left={-300}
            top={-350}
            size={760}
            discOpacity={0.2}
            butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
            butterflySrc="/track1/b3.png"
          />
        }
      >
        {/* lưới ảnh Debate */}
        <Collage items={DEBATE_PHOTO} width={844} height={721} />
      </TrackSection>

      <TrackSection
        title="Speaking Contests"
        text="From storytelling contests to public speaking, I grew up learning to express myself in front of an audience. As I moved towards building arguments and presenting ideas, I became more fluent and confident in voicing my opinions. These early experiences sparked my interest in advocacy and taught me how to present myself with greater clarity."
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0.25}
            butterflySrc="/track1/b4.png"
          />
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={SPEAKING_PHOTO} width={840} height={527} />
      </TrackSection>

      <TrackSection
        title="Business Case Competitions"
        text="Business case competitions introduced me to a different kind of speaking: pitching products, capturing attention, and making an idea sell. Through business battles, I learnt to combine debate and public speaking to defend a company's decisions, respond to challenges, and persuade judges. It was a new way of thinking on my feet, balancing creativity and presentation with research, strategy, and a little number-crunching."
        background="#1e5f63"
        reverse
        decoration={
          <SectionDecoration
            left={-300}
            top={-250}
            size={760}
            discOpacity={0.0}
            butterflySrc="/track1/b5.png"
          />
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={BUSINESS} width={884} height={664} />
      </TrackSection>
    </TrackPage>
  );
}
