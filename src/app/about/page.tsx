
import HeroSection from "@/components/about/hero-section";
import MissionSection from "@/components/about/mission-section";
import Newsletter from "@/components/about/newsletter";
import StatsSection from "@/components/about/stats-section";
import ValuesSection from "@/components/about/values-section";
import VisionSection from "@/components/about/vision-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover RDTech Group – delivering excellence in Security, Contracting, and Building Automation solutions across the UAE.",
  openGraph: {
    title: "About Us",
    description:
      "Learn more about RDTech Group’s mission, vision, and expertise in Security, Contracting, and Building Automation.",
    url: "https://www.rdtechgroup.com/about",
    siteName: "RDTech Group",
    locale: "en_US",
    type: "website",
  },
};

function page() {
  return (
    <>
      <HeroSection/>
      <StatsSection/>
      <MissionSection/>
      <VisionSection/>
      <ValuesSection/>
      <Newsletter/>
    </>
  );
}

export default page;
