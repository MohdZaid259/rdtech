import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ProjectsSection from "@/components/companies/projects-section";
import RDTechLogo from "@/components/logos/rdtech-logo";
import React from "react";
import ServicesSection from "@/components/companies/services-section";
import CoreGridOverview from "@/components/companies/overview";
import RefrenceSection from "@/components/companies/reference";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "RDTech | Security Systems & ELV/ICT Solutions",
  description:
    "RDTech delivers advanced security and ELV/ICT solutions across the UAE. From access control to surveillance, we safeguard critical infrastructure.",
  openGraph: {
    title: "RDTech | Security Systems & ELV/ICT Solutions",
    description:
      "Discover RDTech's expertise in delivering cutting-edge security and ELV/ICT solutions to protect critical infrastructure in the UAE.",
    url: "https://www.rdtechgroup.com/companies/rdtech",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-rdtech.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech Security Solutions",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const t = useTranslations("Company.RDTech");

  const services = [
  { key: "securityRMS", image: "/security.webp" },
  { key: "audioVisuals", image: "audio-visuals.webp" },
  { key: "networkCommunication", image: "network-communication.webp" },
  { key: "structuredCabling", image: "structured-cabling.webp" },
  { key: "enterpriseComputing", image: "enterprise-computing.png" },
  { key: "aiIoT", image: "ai.jpg" },
];

const projects = [
  { key: "rtaDubai", image: "rta.webp" },
  { key: "zayedUniversity", image: "zayed.webp" },
  { key: "dxbWorldTradeCentre", image: "trade.webp" },
  { key: "emiratesPalaceHotel", image: "palace.webp" },
  { key: "palmJumeirah", image: "palm.webp" },
  { key: "mazagonResort", image: "mazagon.webp" },
  { key: "khalidiyaPalace", image: "khalidiya.webp" },
  { key: "ferrariWorld", image: "ferrari.webp" },
  { key: "yasMarinaHotel", image: "marina.webp" },
  { key: "dubaiCargoTerminal", image: "cargo.webp" },
  { key: "dubaiMall", image: "dubaiMall.webp" },
  { key: "jumeirahEmiratesTowers", image: "emirates.webp" },
  { key: "etehadTowers", image: "etehad.webp" },
  { key: "burjAlArab", image: "burjAlArab.webp" },
  { key: "atlantisHotel", image: "atlantis.webp" },
  { key: "burjKhalifa", image: "burjKhalifa.webp" },
];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName={t("hero.companyName")}
        slogan={t("hero.slogan")}
        description={t("hero.description")}
        backgroundImage="/Companies/RDTech/controlRoom.webp"
        companyLogo={<RDTechLogo />}
        projectsLink="/companies/rdtech/#projects"
      />

      <AboutSection
          title={t("about.title")}
          description={t.raw("about.paragraphs")}
          image={{
            src: "/facial.jpg?updatedAt=1755786638264",
            alt: t("companies.rdTech.aboutImageAlt"),
          }}
        />


      <CoreGridOverview/>

      <ServicesSection
        title={t("servicesTitle")}
        services={services.map(s => ({
          title: t(`services.${s.key}.title`),
          description: t(`services.${s.key}.description`),
          image: s.image
        }))}
        companyName="RDTech"
      />


      <ProjectsSection
        companyName="rdProjects"
        projects={projects.map(p => ({
          name: t(`projects.${p.key}`),
          image: p.image
        }))}
      />  

      <ClientsSection
        title={t("clients.title")}
        subTitle={t("clients.subtitle")}
        rows={[
          {
            baseVelocity: 5,
            direction: 1,
            logos: [
              "/banking/adcb.webp",
              "/banking/adib.webp",
              "/security/honeywell.webp",
              "/banking/citi.png",
              "/banking/rakbank.webp",
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              "/banking/mashreq.webp",
              "/banking/bob.png",
              "/security/bosch.webp",
              "/security/samsung.png",
              "/banking/ajman.webp",
            ],
          },
        ]}
      />
      
      <RefrenceSection/>

      <ContactSection
        phone="+971 6524 1842"
        email="info@rdtech-group.com"
        address="PO 23113, Sharjah, UAE"
      />
    </main>
  );
}
