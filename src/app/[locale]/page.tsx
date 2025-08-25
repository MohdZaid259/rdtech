import CEOMessageSection from "@/components/home/ceo-msg-section";
import ClientsSection from "@/components/home/clients-section";
import CompaniesSection from "@/components/home/companies-section";
import ContactSection from "@/components/home/contact-section";
import GlobalCountriesSection from "@/components/home/global-countries-section";
import HeroSection from "@/components/home/hero-section";
import { IndustriesSection } from "@/components/home/industries-section";
import ProjectsSection from "@/components/home/projects-section";
import WeCareSection from "@/components/home/we-care-section";
import WhyRDTechSection from "@/components/home/whyRDTech-group-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IndustriesSection />
      <CompaniesSection />
      <ProjectsSection />
      <CEOMessageSection />
      <WhyRDTechSection />
      <WeCareSection />
      <ClientsSection />
      <GlobalCountriesSection />
      <ContactSection />
    </main>
  );
}
