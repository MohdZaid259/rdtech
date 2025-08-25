
import { Metadata } from "next";
import ProjectsGrid from "@/components/projects/grid";
import React from "react";
import HeroSection from "@/components/projects/hero";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore RDTech Group’s landmark projects spanning government institutions, private enterprises, and transformative innovations built over 30+ years.",
  openGraph: {
    title: "Projects",
    description:
      "Discover how RDTech Group has turned vision into reality through projects that redefine industries and set new standards of excellence.",
    url: "https://yourdomain.com/projects",
    siteName: "RDTech Group",
    images: [
      {
        url: "/projects/skyline.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech Group Projects",
      },
    ],
    type: "website",
  },
};

function page() {
  return (
    <>
      <HeroSection/>
      <ProjectsGrid />
    </>
  );
}

export default page;