import type { Metadata } from "next";
import localfont from "next/font/local";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["400", "700"],
});

const walkway = localfont({
    src: [
      {
        path: "../../public/fonts/Walkway.ttf",
        weight: "700",
      },
    ],
    variable: '--font-walkway',
});

export const metadata: Metadata = {
  title: "Manifesto",
  description: "Project Manifesto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${walkway.variable}`}>{children}</body>
    </html>
  );
}
