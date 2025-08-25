import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ProjectsSection from "@/components/companies/projects-section";
import ServicesSection from "@/components/companies/services-section";
import RefrenceSection from "@/components/companies/reference";

export const metadata: Metadata = {
  title: "CoreGrid | Building Automation & Smart Solutions",
  description:
    "CoreGrid transforms buildings into intelligent, efficient spaces with cutting-edge automation and control systems. Creating smarter, sustainable environments for better living and working.",
  openGraph: {
    title: "CoreGrid | Building Automation & Smart Solutions",
    description:
      "Discover CoreGrid’s expertise in smart building automation, IoT integration, and energy management solutions for sustainable and efficient environments.",
    url: "https://www.rdtechgroup.com/companies/core-grid",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-coregrid.jpg",
        width: 1200,
        height: 630,
        alt: "CoreGrid Smart Building Solutions",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const services = [
    {
      title: "User Interface",
      description:
        "Intuitive and user-friendly interfaces that provide seamless interaction and control of automation systems across devices.",
      image: "user-interface.webp",
    },
    {
      title: "Home Automation",
      description:
        "Smart solutions for lighting, temperature, and appliance control, enhancing comfort, convenience, and energy efficiency in any room.",
      image: "room-automation.webp",
    },
    {
      title: "Lighting Control System",
      description:
        "Advanced lighting management systems enabling dimming, scheduling, and mood-setting for residential, commercial, or industrial spaces.",
      image: "lightning-control.jpg",
    },
    {
      title: "HVAC Control",
      description:
        "Integrated heating, ventilation, and air conditioning control for optimized climate management, improved efficiency, and reduced energy costs.",
      image: "HAVC.webp",
    },
    {
      title: "I/O Controller",
      description:
        "Reliable input/output control devices that manage communication between field equipment and central automation systems.",
      image: "io-control.png",
    },
    {
      title: "Energy Management & Metering",
      description:
        "Smart metering and monitoring systems that track energy consumption, reduce waste, and ensure sustainable energy usage.",
      image: "energy-management.webp",
    },
    {
      title: "Gateways",
      description:
        "Secure and scalable gateways enabling seamless integration between different automation devices and communication protocols.",
      image: "gateways.webp",
    },
    {
      title: "Network Infrastructure",
      description:
        "Robust networking solutions designed to support high-performance automation systems with reliability and security.",
      image: "network-infrastructure.webp",
    },
  ];

  const projects = [
    {
      name: "Sharjah sustainable City",
      image: "sharjah.webp",
    },
    {
      name: "Residence Inn by Marriot",
      image: "residence.webp",
    },
    {
      name: "Sustainable homes Hotel",
      image: "homes.webp",
    },
    {
      name: "Dubai Expo 2020",
      image: "expo.webp",
    },
    {
      name: "ministry",
      image: "ministry.webp",
    },
    {
      name: "Azizi Creek View",
      image: "azizi.webp",
    },
    {
      name: "Platinum Hotel Dubai",
      image: "platinum.webp",
    },
    {
      name: "Hilton Conrad Arzana",
      image: "conrad.webp",
    },
    {
      name: "Celia Residence - Abou Eid",
      image: "celia.webp",
    },
    {
      name: "Regalia Tower- Deyaar",
      image: "regalia.webp",
    },
    {
      name: "Miramar Hotel - Al Fujairah",
      image: "miramar.webp",
    },
    {
      name: "Abu Dhabi Quality and Conformity Council",
      image: "abu.webp",
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="CoreGrid Solutions"
        slogan="Building Automation & Smart Solutions"
        description="Transforming buildings into intelligent, efficient spaces through cutting-edge automation and control systems. Creating smarter environments for better living and working."
        backgroundImage="/rdtechBg2.jpeg"
        companyLogo={<CoreGridLogo />}
        projectsLink="/companies/core-grid/#projects"
      />
      <AboutSection
        title="About CoreGrid Solutions"
        description={[
          "CoreGrid Solutions is the smart building and automation division of RDTech Group, specializing in intelligent building management systems, home automation, and energy optimization solutions.",
          " We leverage IoT technology, AI-driven analytics, and advanced control systems to create environments that are not only smart but also sustainable, efficient, and user-friendly.",
        ]}
        image={{
          src: "/Companies/Core%20Grid/control.webp",
          alt: "CoreGrid Smart Building",
        }}
      />

      <ServicesSection
        title="Our Smart Solutions"
        services={services}
        companyName="Core%20Grid"
      />

      <ProjectsSection companyName="coreProjects" projects={projects} />

      <ClientsSection
        title="Empowering Smart Partnerships"
        subTitle="Trusted by forward-thinking organizations to build intelligent, efficient, and sustainable spaces."
        rows={[
          {
            baseVelocity: 5,
            direction: 1,
            logos: [
              "/Commercial/bakerHughes.webp",
              "/Commercial/lulu.webp",
              "/Commercial/nakheel.png",
              "/Commercial/vfs.webp",
              "/Commercial/warnerBros.webp",
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              "/infrastructure/abuDhabiPolice.webp",
              "/infrastructure/rta.webp",
              "/infrastructure/twofour54.webp",
              "/infrastructure/tdic.webp",
              "/Commercial/nmc.webp",
            ],
          },
        ]}
      />

      <RefrenceSection/>

      <ContactSection
        title="Make Your Building Smart"
        subtitle="Ready to transform your space with intelligent automation? Let's create a smarter future together."
        phone="+971 3733 0116"
        email="info@coregridsystems.com "
        address="PO : 23113, Abu Dhabi, UAE"
      />
    </main>
  );
}
