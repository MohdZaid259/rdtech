import AAContractingLogo from "@/components/logos/aa-contracting-logo";
import AboutSection from "@/components/companies/about-section";
import ClientsSection from "@/components/companies/clients-section";
import ContactSection from "@/components/companies/contact-section";
import HeroSection from "@/components/companies/hero-section";
import { Metadata } from "next";
import ProjectsSection from "@/components/companies/projects-section";
import ServicesSection from "@/components/companies/services-section";
import { title } from "process";

export const metadata: Metadata = {
  title: "AA Contracting | Al Ausus Al Arbaa General Contracting",
  description:
    "AA Contracting delivers comprehensive civil, electromechanical, and construction services across the UAE. Building tomorrow’s infrastructure with precision, quality, and reliability.",
  openGraph: {
    title: "AA Contracting | Al Ausus Al Arbaa General Contracting",
    description:
      "Explore AA Contracting’s expertise in civil works, electromechanical projects, project management, and large-scale construction solutions across the UAE.",
    url: "https://www.rdtechgroup.com/companies/aa-contracting",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-aa-contracting.jpg",
        width: 1200,
        height: 630,
        alt: "AA Contracting Services",
      },
    ],
    type: "website",
  },
};

export default function page() {
  const services = [
    {
      title: "Civil Works",
      description:
        "Comprehensive civil engineering solutions including structural, road, and infrastructure development with a focus on durability and safety.",
      image: "civil.jpg",
    },
    {
      title: "Electromechanical Works",
      description:
        "Expertise in electrical and mechanical systems, covering installation, commissioning, and maintenance of essential building services.",
      image: "electromechanical-works.jpg",
    },
    {
      title: "Preliminary Investigations",
      description:
        "Thorough site surveys, feasibility studies, and initial assessments to ensure well-informed decision-making before project initiation.",
      image: "investigation.webp",
    },
    {
      title: "Environment Assessment",
      description:
        "Detailed environmental impact studies and sustainability evaluations to ensure compliance with regulations and eco-friendly practices.",
      image: "environment.jpg",
    },
    {
      title: "Detailed Designs",
      description:
        "Precise architectural and engineering designs tailored to project needs, ensuring efficiency, accuracy, and innovation.",
      image: "design.jpg",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing, monitoring, and control measures to maintain the highest standards of quality across all project phases.",
      image: "quality.jpg",
    },
    {
      title: "Quantity Surveying and Estimating",
      description:
        "Accurate cost estimation, budgeting, and financial planning to deliver projects on time and within budget constraints.",
      image: "surveying.jpg",
    },
    {
      title: "Preparation of Contract Documents",
      description:
        "Comprehensive contract documentation including tender preparation, specifications, and legal compliance to support smooth execution.",
      image: "preparation-documents.jpg",
    },
    {
      title: "Project Management",
      description:
        "End-to-end project planning, execution, monitoring, and delivery with a focus on efficiency, risk management, and timely completion.",
      image: "project-management.webp",
    },
    {
      title: "Construction Supervision",
      description:
        "On-site supervision and oversight ensuring that all construction activities meet design specifications, safety standards, and deadlines.",
      image: "supervision.webp",
    },
  ];

  const projects = [
    {
      name: "Al Ain - UAEU Playground",
      image: "uaeu.png",
    },
    {
      name: "University of Sharjah - UAE",
      image: "university.webp",
    },
    {
      name: "Tawam Hospital A/C Maintenance",
      image: "tawam.png",
    },
    {
      name: "Al Ain - United School",
      image: "school.png",
    },
    {
      name: "Emirates post Office Construction",
      image: "postOffice.webp",
    },
    {
      name: "Al Aim - Islamic Institute UAEU",
      image: "islamic.png",
    },
    {
      name: "Abu Dhabi Distillation Plant",
      image: "abudhabi.png",
    },
    {
      name: "Al Ain - Rotana Challet",
      image: "challet.png",
    },
    {
      name: "Al Ain Villa Building Construction",
      image: "alain.png",
    },
    {
      name: "Al Ain - Sheikha Hessa Mosque",
      image: "mosque.png",
    },
    {
      name: "Al Ain - Al Sanaiya Restaurant",
      image: "alsanaiya.png",
    },
    {
      name: "Al Ain - Dar Zayed Cultural House",
      image: "cultural.png",
    },
    {
      name: "Minors Affairs Building A/C Maintenance",
      image: "minors.png",
    },
    {
      name: "Al Ain - Al Markhaniya School",
      image: "almarkhaniya.png",
    },
    {
      name: "Al Dhafra Private Schools",
      image: "aldhaher.webp",
    },
    {
      name: "Al Ain - UAEU Playground",
      image: "uaeu.png",
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        companyName="AA Contracting"
        slogan="Al Ausus Al Arbaa General Contracting"
        description="Delivering comprehensive construction and contracting services with precision and reliability. Building the infrastructure of tomorrow across the UAE."
        backgroundImage="/Companies/AA%20Contracting/crane_2.jpg?updatedAt=1755876243488"
        companyLogo={<AAContractingLogo />}
        projectsLink="/companies/aa-contracting/#projects"
      />

      <AboutSection
        title="About AA Contracting"
        description={[
          "Al Ausus Al Arbaa General Contracting is the construction arm of RDTech Group, specializing in multi-disciplinary contracting services. Guided by the values of integrity, safety, success, and teamwork, we combine traditional craftsmanship with modern construction techniques to deliver exceptional results.",
          "From commercial buildings to residential complexes, our experienced team manages every aspect of construction with attention to detail, quality, and timely delivery.",
        ]}
        image={{
          src: "/Companies/AA%20Contracting/crane.jpg?updatedAt=1755875324718",
          alt: "AA Contracting Team",
        }}
      />

      <ServicesSection
        title="Our Construction Services"
        services={services}
        companyName="AA%20Contracting"
      />

      <ProjectsSection companyName="aaProjects" projects={projects} />

      <ClientsSection
        title="Building Trust With Every Project"
        subTitle="Partnering with developers, government agencies, and enterprises across the UAE to deliver world-class infrastructure and construction solutions."
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
        title="Build Your Vision With Us"
        subtitle=" Ready to start your construction project? Let's discuss how we can bring your vision to life."
        phone="+971 3733 0116"
        email="info@alaususgencont.com "
        address="PO : 23113, Abu Dhabi, UAE"
      />
    </main>
  );
}
