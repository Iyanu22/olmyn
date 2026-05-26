import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Olmyn — mine to build, yours to own",
  description: "A one-person web studio building websites and web apps that clients fully own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
    </html>
  );
}
