import { TrackPage } from "@/app/components/Trackpage";

const photo = [
  {
    src: "/about/1.png",
    alt: "1",
  },
  {
    src: "/about/2.png",
    alt: "2",
  },
  {
    src: "/about/3.png",
    alt: "3",
  },
  {
    src: "/about/4.png",
    alt: "4",
  },
  {
    src: "/about/5.png",
    alt: "5",
  },
  {
    src: "/about/6.png",
    alt: "6",
  },
  {
    src: "/about/7.png",
    alt: "7",
  },
  {
    src: "/about/8.png",
    alt: "8",
  },
  {
    src: "/about/9.png",
    alt: "9",
  },
  {
    src: "/about/10.png",
    alt: "10",
  },
  {
    src: "/about/11.png",
    alt: "11",
  },
];

export default function AboutPage() {
  return (
    <TrackPage
      activeLabel="Prelude"
      label="PRELUDE:"
      title="About Me"
      paragraphs={[
        "If you scroll through my life, you'll find a little bit of everything, and quite a lot of chaos. I've collected hobbies, chased new interests, and said yes to experiences that rarely had much in common. I used to worry about being a jack of all trades, master of none, but looking back, all those different notes have made me who I am, even the Saturday morning classes I used to dread.",
        "This prelude is for the people who've helped write my story: my family, friends, summer camp companions, and everyone who's encouraged me to keep exploring. I couldn't fit everyone into one album, but this one's for them.",
      ]}
      linkText="A little more about my journey and the projects I've been part of, featured by Vietnam.vn."
      linkHref="https://www.vietnam.vn/en/nu-thu-linh-16-tuoi-hoc-gioi-da-tai-dan-dat-du-an-thay-doi-cong-dong"
      photos={photo}
    />
  );
}
