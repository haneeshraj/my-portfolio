import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientContainer from "@/components/ClientContainer/ClientContainer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable", // Enables variable font
  display: "swap",
  variable: "--font-dm-sans", // CSS variable for easier usage
});

export const metadata: Metadata = {
  title: "Haneesh Raj B.",
  description: "This is the website meta data apparently",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <ClientContainer>{children}</ClientContainer>
      </body>
    </html>
  );
}
