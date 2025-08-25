import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ProjectsSection from "@/components/companies/projects-section";
import RDTechLogo from "@/components/logos/rdtech-logo";
import React from "react";
import ServicesSection from "@/components/companies/services-section";

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
  const services = [
    {
      title: "Security & RMS",
      description:
        "Comprehensive security systems and Remote Monitoring Solutions (RMS) to ensure safety, surveillance, and centralized control for enterprises and facilities.",
      image: "/security.webp",
    },
    {
      title: "Audio Visuals & IP TV",
      description:
        "State-of-the-art audio-visual systems and IPTV solutions delivering immersive experiences for entertainment, corporate communication, and hospitality sectors.",
      image: "audio-visuals.webp",
    },
    {
      title: "Network & Communication",
      description:
        "Robust networking and communication infrastructure providing seamless connectivity, high-speed data transfer, and reliable communication channels.",
      image: "network-communication.webp",
    },
    {
      title: "Structured Cabling",
      description:
        "Standardized cabling systems that support data, voice, and multimedia, ensuring scalability, flexibility, and easy maintenance for businesses.",
      image: "structured-cabling.webp",
    },
    {
      title: "Enterprise Computing",
      description:
        "High-performance computing solutions including servers, storage, and virtualization technologies to power enterprise applications and operations.",
      image: "enterprise-computing.png",
    },
  ];

  const projects = [
    {
      name: "RTA Dubai",
      image: "rta.webp",
    },
    {
      name: "Zayed University",
      image: "zayed.webp",
    },
    {
      name: "DXB World Trade Centre",
      image: "trade.webp",
    },
    {
      name: "Emirates Palace Hotel",
      image: "palace.webp",
    },
    {
      name: "Palm Jumeirah",
      image: "palm.webp",
    },
    {
      name: "Mazagon Resort",
      image: "mazagon.webp",
    },
    {
      name: "Khalidiya Palace",
      image: "khalidiya.webp",
    },
    {
      name: "Ferrari World",
      image: "ferrari.webp",
    },
    {
      name: "Yas Marina Hotel",
      image: "marina.webp",
    },
    {
      name: "Dubai Cargo Terminal",
      image: "cargo.webp",
    },
    {
      name: "Dubai Mall",
      image: "dubaiMall.webp",
    },
    {
      name: "Jumeirah Emirates Towers Dubai",
      image: "emirates.webp",
    },
    {
      name: "Etehad Towers",
      image: "etehad.webp",
    },
    {
      name: "Burj Al Arab",
      image: "burjAlArab.webp",
    },
    {
      name: "Atlantis Hotel",
      image: "atlantis.webp",
    },
    {
      name: "Burj Khalifa",
      image: "burjKhalifa.webp",
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="RDTech"
        slogan="Security Systems & ELV/ICT Solutions"
        description="Pioneering advanced security technology to safeguard critical infrastructure across the UAE. From access control to comprehensive surveillance systems."
        backgroundImage="/Companies/RDTech/controlRoom.webp"
        companyLogo={<RDTechLogo />}
        projectsLink="/companies/rdtech/#projects"
        websiteLink="https://www.site-technology.com"
      />

      <AboutSection
        title="About RDTech"
        description={[
          "RDTech is the security and technology arm of RDTech Group, specializing in cutting-edge security systems and ELV/ICT solutions. With over a decade of experience, we've secured some of the UAE's most critical infrastructure.",
          "Our team of certified engineers and security specialists work with the latest technology from global leaders to deliver solutions that exceed industry standards and client expectations.",
        ]}
        stats={[
          { value: "500+", label: "Projects Secured" },
          { value: "15+", label: "Years Experience" },
          { value: "50+", label: "Security Experts" },
        ]}
        image={{
          src: "/facial.jpg?updatedAt=1755786638264",
          alt: "RDTech Team",
        }}
      />

      <ServicesSection
        title="Our Security Solutions"
        services={services}
        companyName="RDTech"
      />

      <ProjectsSection companyName="rdProjects" projects={projects} />

      <ClientsSection
        title="Trusted By Industry Leaders"
        subTitle="Partnering with organizations across the UAE to deliver secure and innovative technology solutions."
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

      <ContactSection
        title="Secure Your Future Today"
        subtitle="Ready to implement world-class security solutions? Our experts are here to help."
        phone="+971 X XXX XXXX"
        email="info@example.com"
        address="Dubai, UAE"
      />
    </main>
  );
}
