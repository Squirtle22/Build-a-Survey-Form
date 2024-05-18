import TailwindScreen from "@/components/tailwindScreen";
import Siteheader from "@/components/header/siteheader";
import Sitefooter from "@/components/footer/sitefooter";
import { Press_Start_2P } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Press_Start_2P({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Pikaxchu competition",
  description: "Catch the pokemon if you can!",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Have a login section and a navigation bar to about us and recent winners */}
        <Siteheader />
        <main>
          {children}
        </main>
        <Sitefooter />
        <TailwindScreen />
        <Toaster position="top-center" richColors  />
      </body>
    </html>
  );
}