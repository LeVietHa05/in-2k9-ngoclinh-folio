import { TrackPage } from "@/app/components/Trackpage";
import { TrackSection } from "../components/TrackSection";
import Link from "next/link";
import Image from "next/image";
import { u, SCRIPT } from "../components/design";
import {
  FEMPOWER_PHOTO,
  FEMPOWER2_PHOTO,
  HSSIC_PHOTO,
  CHALKROAD_PHOTO,
  ARIA_PHOTO,
} from "./photo";
import { Collage } from "../components/Collage";
import { SectionDecoration } from "../components/SectionDecoration";

export default function Track02Page() {
  return (
    <TrackPage
      activeLabel="track 02"
      label="TRACK 02:"
      title="Social Impact & Community"
      paragraphs={[
        "Through Fempower, Chalk Road, the High School Social Impact Challenge, and the Aria Project, I’ve worked with students across Vietnam on gender equality, education, and social inequality. From organising workshops and field trips to coordinating volunteers and developing student programmes, I’ve learnt to look beyond numbers and consider the lasting impact of each initiative.",
      ]}
      decorationSrc="/track1/header-butterfly.png"
    >
      <TrackSection
        title="Fempower"
        text="Fempower began with questions rooted in my own life. Growing up, I noticed gender differences within my own family, while my parents often reminded me that we were not wealthy. As I grew older, however, I realised how much I still had access to. During my Duke of Edinburgh expeditions, I met girls in remote mountainous communities who shared my interests and ambitions but lacked the same opportunities to pursue them. Their stories made gender equality feel personal.  Through Fempower, my initiative to promote gender equality, I organise activities that help girls build confidence through art, dance, and awareness of their rights as children. Travelling to remote communities and teaching dance has allowed me to meet girls whose stories have stayed with me long after each visit. Fempower is my attempt to help them recognise their potential and imagine futures they might not have considered possible."
        background="#329D9C"
        decoration={
          <SectionDecoration
            left={1400}
            top={-350}
            size={760}
            discOpacity={0.25}
            butterflySrc=""
            hole={true}
          />
        }
        custom={
          <>
            <Link
              className={`${SCRIPT} underline block mt-4`}
              style={{ fontSize: u(60) }}
              href={"https://www.facebook.com/fempower.vn"}
            >
              Visit Fempower Fanpage
            </Link>

            <div style={{ fontSize: u(23) }}>
              <p>In the press: </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    className="underline "
                    href={
                      "https://www.vietnam.vn/en/nu-sinh-gen-z-nguoc-nui-gieo-mam-binh-dang-gioi"
                    }
                  >
                    Fempower featured on Vietnam.vn digital newspaper
                  </Link>
                </li>
              </ul>
            </div>
          </>
        }
        custom2={<Collage items={FEMPOWER2_PHOTO} width={1279} height={705} />}
      >
        {/* lưới ảnh MC */}
        <Collage items={FEMPOWER_PHOTO} width={716} height={697} />
      </TrackSection>

      <TrackSection
        title="HSSIC"
        text="Working on Fempower made me realise how deeply gender inequality intersects with economic disadvantage, geography, and unequal access to education. I began to wonder: what if, instead of finding every solution myself, I brought together people who could create them with me?
        <br/>
        <br/>
        That question led me to found the High School Social Innovation Challenge (HSSIC), a competition where young people develop ideas for social impact with expert mentorship and implementation grants. Through HSSIC, I hope to bring diverse perspectives together and help more young people turn their concerns into meaningful action."
        background="#74BBBC"
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
        custom={
          <>
            <Link
              className={`${SCRIPT} underline block mt-4`}
              style={{ fontSize: u(60) }}
              href={"https://www.facebook.com/hssic.vn"}
            >
              Visit HSSIC Fanpage
            </Link>

            <div style={{ fontSize: u(23) }}>
              <p>In the press: </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    className="underline "
                    href={"https://www.youtube.com/watch?v=IqcQ8Qbkrg8"}
                  >
                    Featured Interview on Hanoi Radio Television
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://hanoionline.vn/y-nghia-cuoc-thi-sang-kien-xa-hoi-danh-cho-hoc-sinh-thpt-246406578.htm"
                    }
                  >
                    News section feature on Hanoi Radio Televsion
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.vietnam.vn/en/hoc-sinh-28-truong-thpt-tim-loi-giai-cho-nhieu-van-de-nong-cua-cong-dong"
                    }
                  >
                    Students from 28 high schools are seeking solutions to many
                    pressing community issues.
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://isph.edu.vn/isph-student-successfully-organizes-hssic-2026/"
                    }
                  >
                    Article on ISPH Official Website
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/ISPHanoi/posts/pfbid0NP7dH6vpYqU9jxYfcVaGbD7Hp8H9XJm9dzoB3qtXxufvKeAftkwu4NnAnFb4ft6ul?mibextid=wwXIfr"
                    }
                  >
                    Post on ISPH Official Fanpage
                  </Link>
                </li>
              </ul>
            </div>
          </>
        }
      >
        {/* lưới ảnh Debate */}
        <Collage items={HSSIC_PHOTO} width={807} height={1126} />
      </TrackSection>

      <TrackSection
        title="Chalk Road"
        text="My journey with Chalk Road has taken me on over seven trips to mountainous communities, where I have met more than 5,000 students and grown from a volunteer into a Project Director. Through activities spanning sports, art, music, life skills, online safety, and career exploration, I have helped bring learning experiences beyond the classroom to children with limited access to them. Each trip has offered a new perspective on educational inequality, shaped by the dreams and aspirations of the students I meet. "
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
        custom={
          <>
            <Link
              className={`${SCRIPT} underline block mt-4`}
              style={{ fontSize: u(60) }}
              href={"https://www.facebook.com/chalkroadvn"}
            >
              Visit Chalk Road Fanpage
            </Link>

            <div style={{ fontSize: u(23) }}>
              <p>In the press: </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    className="underline "
                    href={
                      "https://baotuyenquang.com.vn/xa-hoi/202509/trien-khai-du-an-con-duong-phan-tai-truong-pho-thong-dan-toc-noi-tru-thcs-yen-son-7ac4a6f/"
                    }
                  >
                    Chalk Road Yen Son, Tuyen Quang on the Local Newspaper
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex mt-12" style={{ height: u(520), gap: u(16) }}>
              <div
                className="relative h-full shrink-0"
                style={{ aspectRatio: "206 / 378" }}
              >
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube.com/embed/F-26alzFBBs"
                  title="Ngọc Linh phát biểu khai mạc Chalk Road Tuyên quang"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div
                className="relative h-full shrink-0"
                style={{ aspectRatio: "295 / 381" }}
              >
                <Image
                  src="/track2/c-11.png"
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={CHALKROAD_PHOTO} width={774} height={1053} />
      </TrackSection>

      <TrackSection
        title="Aria Project"
        text="Aria Project began when I struggled to balance two things I loved: community work and dance. I started wondering if I could bring them together, letting one passion fuel another. Through dance training and performances, I raised funds while managing finances and connecting with NGOs that could turn those contributions into meaningful support. The project eventually raised 50 million VND for MSD Vietnam. For me, ARIA was a reminder that sometimes, different passions can find their rhythm together. "
        background="#329D9C"
        reverse
        decoration={
          <SectionDecoration
            left={-500}
            top={-350}
            size={900}
            discOpacity={0.25}
            hole={true}
            butterflySrc=""
          />
        }
        custom={
          <>
            <Link
              className={`${SCRIPT} underline block  `}
              style={{ fontSize: u(60) }}
              href={"https://www.facebook.com/profile.php?id=61578245217922"}
            >
              Visit Aria Project Fanpage
            </Link>

            <div style={{ fontSize: u(23) }}>
              <p>In the press: </p>
              <ul className="list-disc ml-4">
                <li>
                  <Link
                    className="underline "
                    href={
                      "https://www.facebook.com/reel/37486581600988487?rdid=pILjr7gzKqrweKTS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1CAxrmm7zR%2F#"
                    }
                  >
                    In the press: Aria Project featured on Vietnam National
                    Defense Television Channel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-4 overflow-y-scroll" style={{ height: u(520), gap: u(16) }}>
              <Image src={"/track2/a-9.png"} alt="" width={397} height={265}></Image>
              <Image src={"/track2/a-10.png"} alt="" width={398} height={251}></Image>
            </div>
          </>
        }
      >
        {/* lưới ảnh MC */}
        <Collage items={ARIA_PHOTO} width={923} height={1286} />
      </TrackSection>
    </TrackPage>
  );
}
