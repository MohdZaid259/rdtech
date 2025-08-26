import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import CoreGridLogo from "@/components/logos/core-grid-logo";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ProjectsSection from "@/components/companies/projects-section";
import ServicesSection from "@/components/companies/services-section";
import RefrenceSection from "@/components/companies/reference";
import { useTranslations } from "next-intl";

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

export default function Page() {
  const t = useTranslations("Company.CoreGrid");

  const services = [
    { title: t("services.userInterface.title"), description: t("services.userInterface.description"), image: "user-interface.webp" },
    { title: t("services.homeAutomation.title"), description: t("services.homeAutomation.description"), image: "room-automation.webp" },
    { title: t("services.lightingControl.title"), description: t("services.lightingControl.description"), image: "lightning-control.jpg" },
    { title: t("services.hvacControl.title"), description: t("services.hvacControl.description"), image: "HAVC.webp" },
    { title: t("services.ioController.title"), description: t("services.ioController.description"), image: "io-control.png" },
    { title: t("services.energyManagement.title"), description: t("services.energyManagement.description"), image: "energy-management.webp" },
    { title: t("services.gateways.title"), description: t("services.gateways.description"), image: "gateways.webp" },
    { title: t("services.networkInfrastructure.title"), description: t("services.networkInfrastructure.description"), image: "network-infrastructure.webp" },
  ];

  const projects = [
    { name: 'sharjahSustainableCity', image: "sharjah.webp" },
    { name: 'residenceInn', image: "residence.webp" },
    { name: 'sustainableHomesHotel', image: "homes.webp" },
    { name: 'dubaiExpo2020', image: "expo.webp" },
    { name: 'ministry', image: "ministry.webp" },
    { name: 'aziziCreekView', image: "azizi.webp" },
    { name: 'platinumHotelDubai', image: "platinum.webp" },
    { name: 'hiltonConradArzana', image: "conrad.webp" },
    { name: 'celiaResidence', image: "celia.webp" },
    { name: 'regaliaTowerDeyaar', image: "regalia.webp" },
    { name: 'miramarHotel', image: "miramar.webp" },
    { name: 'abuDhabiQualityCouncil', image: "abu.webp" },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName={t("hero.companyName")}
        slogan={t("hero.slogan")}
        description={t("hero.description")}
        backgroundImage="/rdtechBg2.jpeg"
        companyLogo={<CoreGridLogo />}
        projectsLink="/companies/core-grid/#projects"
      />

      <AboutSection
        title={t("about.title")}
        description={t.raw("about.paragraphs")}
        image={{
          src: "/Companies/Core%20Grid/control.webp",
          alt: "aboutImageAlt",
        }}
      />

      <ServicesSection
        title={t("servicesTitle")}
        services={services}
        companyName="Core%20Grid"
      />

      <ProjectsSection
        companyName="coreProjects" 
        projects={projects.map(p => ({
          name: t(`projects.${p.name}`),
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

      <RefrenceSection />

      <ContactSection
        phone="+971 3733 0116"
        email="info@coregridsystems.com"
        address="PO : 23113, Abu Dhabi, UAE"
      />
    </main>
  );
}
