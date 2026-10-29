import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import Link from "next/link";
import Image from "next/image";
import { u, SCRIPT } from "../components/design";
import { PUBLISH_PHOTO, RESEARCH_PHOTO, IC_PHOTO, YALE_PHOTO } from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";

export default function Track03Page() {
  return (
    <TrackPage
      activeLabel="track 03"
      label="TRACK 03:"
      title="Research & Publlications"
      paragraphs={[
        "Some questions stay with me long enough to become research. From educational access for ethnic minority girls to AI and gender inequality, I explore questions about opportunity, stereotypes, and technology through literature reviews, data collection, and independent research. For me, research is about slowing down, looking closer, and asking better questions.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <TrackSection
        title="Published researches"
        text="My published research explores gender equality and the experiences of marginalised communities. Seeing my work recognised by experts has been deeply rewarding, while working with mentors has broadened my perspective and strengthened my analytical skills. Each paper adds a new verse to my ongoing conversation with society."
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
        custom={
          <>
            <div style={{ fontSize: u(23) }} className="mt-12">
              <p>Check out my research papers here:</p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    className="underline "
                    href={
                      "https://gphjournal.org/index.php/er/article/view/2459"
                    }
                  >
                    Barriers to Accessing Educational Services for Female
                    Students in Ehtnic Minority Areas
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline "
                    href={"https://doi.org/10.65607/11s32026"}
                  >
                    Bridging the Legal Literacy Gap: A Voice-based AI Mediated
                    Intervention
                  </Link>
                </li>
              </ul>
            </div>
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={PUBLISH_PHOTO} width={684} height={632} />
      </TrackSection>

      <TrackSection
        title="Research competitions"
        text="Though my interests lean towards the humanities, research competitions have kept my curiosity for science alive. They taught me to investigate patiently, question assumptions, and approach complex problems systematically. I also learnt to appreciate how STEM and humanities offer different perspectives, like distinct instruments contributing to the same composition."
        background="#329D9C"
        reverse
        decoration={
          <SectionDecoration
            left={-300}
            top={-350}
            size={760}
            discOpacity={0}
            butterfly={{ x: 0.2, y: 0.15, w: 0.7 }}
            butterflySrc="/track1/b3.png"
          />
        }
      >
        {/* lưới ảnh Debate */}
        <Collage items={RESEARCH_PHOTO} width={966} height={735} />
      </TrackSection>

      <TrackSection
        title="International Conferences"
        text="Presenting at international academic conferences alongside professors, diplomats, and policymakers challenged me to bring a different perspective. From gender disparities in STEM learning motivation at HERASIA 2025 to female political representation and Vietnamese family structures, I brought insights from fieldwork into policy discussions. These experiences taught me that research matters most when grounded in the lived experiences of the people it seeks to understand."
        background="#1A565A"
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0}
            butterflySrc="/track1/b5.png"
          />
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={IC_PHOTO} width={774} height={561} />
      </TrackSection>

      <TrackSection
        title="Yale Young Global Scholars"
        text="Spending summer days at Yale University in the Solving Global Challenges session gave me an invaluable comparative lens. I debated inequality, global governance, and public health with passionate peers from around the world. Presenting Fempower and HSSIC and developing a capstone NGO Strategic Plan taught me that lasting change begins with empowering communities from within, rather than prescribing solutions from above."
        background="#329D9C"
        reverse
        decoration={
          <SectionDecoration
            left={-500}
            top={-350}
            size={900}
            discOpacity={0}
            hole={true}
            butterflySrc="/track1/b5.png"
          />
        }
        custom={
          <>
            <Link
              className={`${SCRIPT} underline block  `}
              style={{ fontSize: u(60) }}
              href={
                "https://drive.google.com/file/d/15-kavIJGJfCPqnZwXT1TFwxC3Vatz5uU/view"
              }
            >
              Red Light
            </Link>
            <Link
              className={`${SCRIPT} underline block  `}
              style={{ fontSize: u(60) }}
              href={
                "https://drive.google.com/file/d/189DR-KWHLH0q-vHVES_vS782FSgY_tLD/view"
              }
            >
              Akh&apos;tala
            </Link>
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={YALE_PHOTO} width={641} height={692} />
      </TrackSection>
    </TrackPage>
  );
}
