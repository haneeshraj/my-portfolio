import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Main from "@/sections/main/Main";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Home | Haneesh Raj B",
  description: "Personal website of Haneesh Raj B",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Navbar />

        <Main>{children}</Main>
      </body>
    </html>
  );
}
