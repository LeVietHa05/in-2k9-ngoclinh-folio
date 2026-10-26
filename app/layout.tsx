import type { Metadata } from "next";
import { Asta_Sans, Aguafina_Script } from "next/font/google";
import "./globals.css";

const aguafont = Aguafina_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const astafont = Asta_Sans({
  variable: "--font-astafont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Do Ngoc Linh",
  description: "Do Ngoc Linh Folio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${aguafont.variable} ${astafont.variable} ${astafont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
