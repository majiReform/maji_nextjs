"use client"
import type { Metadata } from "next";
import { Counter } from "../../components/counter/Counter";
import { GuestHeader } from "@/components/guests/Header";
import { HeroSection } from "@/components/guests/HomeSection/HeroSection";
import { AboutUsSection } from "@/components/guests/HomeSection/AboutUs";
import { PartnersAndDonorsSection } from "@/components/guests/HomeSection/ParthersAdDonors";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestContactUs } from "@/components/guests/HomeSection/ContactUs";
import { GuestThematicArea } from "@/components/guests/HomeSection/ThematicArea";
import { GuestNews } from "@/components/guests/HomeSection/News";
import { GuestResearchAndReport } from "@/components/guests/HomeSection/ResearhAndReport";
import { GuestMedia } from "@/components/guests/HomeSection/Media";


export default function IndexPage() {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen flex flex-col">
      <GuestHeader />
      <HeroSection />
      <AboutUsSection />
      <PartnersAndDonorsSection />
      <GuestThematicArea />
      <GuestNews />
      <GuestResearchAndReport />
      <GuestMedia />
      <GuestContactUs />
      <GuestFooter />
    </div>
  );
}

// export const metadata: Metadata = {
//   title: "Maji - Home",
// };
