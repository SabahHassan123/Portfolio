import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sabah Hassan | Frontend Developer",
  description:
    "Sabah Hassan Ezzat | React & Next.js Frontend Developer specializing in responsive web applications. Expertise includes React.js, TypeScript, Redux Toolkit, and modern UI frameworks like Tailwind CSS and MUI. Creator of the Bone Fracture Detection web app and other interactive projects. Currently advancing skills through Frontend Bootcamps while seeking collaborative opportunities in innovative development teams.",
  keywords: [
    "frontend developer",
    "React portfolio",
    "Next.js developer",
    "Sabah Hassan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
