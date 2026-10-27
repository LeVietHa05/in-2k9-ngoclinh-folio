export type Track = { label: string; title: string; href: string };

export type AlbumSide = {
  name: string;
  subtitle: string;
  /** Xuống dòng bằng \n */
  description: string;
  tracks: Track[];
};

// TODO: sửa chữ + đường dẫn thật ở đây (dùng chung cho HomeIntro và AlbumHeader)
export const SIDE_A: AlbumSide = {
  name: "SIDE A",
  subtitle: "The Making",
  description: "Who I am,\nwhat I question,\nwhat I build.",
  tracks: [
    { label: "PRELUDE", title: "About Me", href: "/about" },
    { label: "TRACK 01", title: "Finding My Voice", href: "/track1" },
    { label: "TRACK 02", title: "Social Impact & Community", href: "/track2" },
    { label: "TRACK 03", title: "Research & Publications", href: "/track3" },
  ],
};

export const SIDE_B: AlbumSide = {
  name: "SIDE B",
  subtitle: "The Becoming",
  description: "What I have explored,\nled,\nand loved.",
  tracks: [
    { label: "TRACK 04", title: "Leadership & School Life", href: "/track4" },
    { label: "TRACK 05", title: "Sports", href: "/track5" },
    { label: "TRACK 06", title: "Art-Performing & Visual", href: "/track6" },
    { label: "Outro", title: "Concert & Why Music", href: "/outtro" },
  ],
};
