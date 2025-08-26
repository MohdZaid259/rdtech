import { useTranslations } from "next-intl";
import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import ProjectsSection from "@/components/companies/projects-section";
import ServicesSection from "@/components/companies/services-section";

export default function Page() {
  const t = useTranslations("Company.AaContracting");

  const services = [
  {
    title: t("services.civilWorks.title"),
    description: t("services.civilWorks.description"),
    image: "civil.jpg",
  },
  {
    title: t("services.electromechanical.title"),
    description: t("services.electromechanical.description"),
    image: "electromechanical-works.jpg",
  },
  {
    title: t("services.preliminary.title"),
    description: t("services.preliminary.description"),
    image: "investigation.webp",
  },
  {
    title: t("services.environment.title"),
    description: t("services.environment.description"),
    image: "environment.jpg",
  },
  {
    title: t("services.designs.title"),
    description: t("services.designs.description"),
    image: "design.jpg",
  },
  {
    title: t("services.quality.title"),
    description: t("services.quality.description"),
    image: "quality.jpg",
  },
  {
    title: t("services.surveying.title"),
    description: t("services.surveying.description"),
    image: "surveying.jpg",
  },
  {
    title: t("services.documents.title"),
    description: t("services.documents.description"),
    image: "preparation-documents.jpg",
  },
  {
    title: t("services.management.title"),
    description: t("services.management.description"),
    image: "project-management.webp",
  },
  {
    title: t("services.supervision.title"),
    description: t("services.supervision.description"),
    image: "supervision.webp",
  },
];

  const projects = [
    { name: "uaeuPlayground", image: "uaeu.png" },
    { name: "universitySharjah", image: "university.webp" },
    { name: "tawamHospital", image: "tawam.png" },
    { name: "unitedSchool", image: "school.png" },
    { name: "postOffice", image: "postOffice.webp" },
    { name: "islamicInstitute", image: "islamic.png" },
    { name: "distillationPlant", image: "abudhabi.png" },
    { name: "rotanaChallet", image: "challet.png" },
    { name: "villaConstruction", image: "alain.png" },
    { name: "hessaMosque", image: "mosque.png" },
    { name: "alSanaiya", image: "alsanaiya.png" },
    { name: "culturalHouse", image: "cultural.png" },
    { name: "minorsBuilding", image: "minors.png" },
    { name: "alMarkhaniya", image: "almarkhaniya.png" },
    { name: "aldhafraSchools", image: "aldhaher.webp" }
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName={t("hero.companyName")}
        slogan={t("hero.slogan")}
        description={t("hero.description")}
        backgroundImage="/Companies/AA%20Contracting/crane_2.jpg"
        companyLogo={<AAContractingLogo />}
        projectsLink="/companies/aa-contracting/#projects"
      />

      <AboutSection
        title={t("about.title")}
        description={t.raw("about.paragraphs")}
        image={{ src: "/Companies/AA%20Contracting/crane.jpg", alt: "AA Contracting Team" }}
      />

      <ServicesSection
        title={t("servicesTitle")}
        services={services}
        companyName="AA%20Contracting"
      />

      <ProjectsSection 
        companyName="aaProjects" 
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
              "/health/alZahra.webp",
              "/health/dubaiHealth.webp",
              "/health/zulekha.webp",
              "/hotels/jumeirah.png",
              "/hotels/anantara.webp",
            ],
          },
          {
            baseVelocity: 5,
            direction: -1,
            logos: [
              "/hotels/armani.png",
              "/hotels/marriott.webp",
              "/hotels/pullman.png",
              "/topEnterprise/majid.webp",
              "/topEnterprise/accor.png",
            ],
          },
        ]}
      />

      <ContactSection
        phone="+971 3733 0116"
        email="info@alaususgencont.com"
        address="PO : 23113, Abu Dhabi, UAE"
      />
    </main>
  );
}
