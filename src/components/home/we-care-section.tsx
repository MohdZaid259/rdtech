"use client";

import {
  Building,
  Factory,
  GraduationCap,
  Hospital,
  Landmark,
  Plane,
  Store,
  Users,
  Zap,
} from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";
import { useTranslations } from "next-intl";

export default function WeCareSection() {
  const t = useTranslations("Home.WeCare");

  const services = [
    {
      icon: Building,
      titleKey: "services.safeCity",
      thumbnail: "/mep.jpg",
    },
    {
      icon: Plane,
      titleKey: "services.transportation",
      thumbnail: "/Home/We%20Care/wp3704688.jpg?updatedAt=1755865886429",
    },
    {
      icon: Zap,
      titleKey: "services.utilities",
      thumbnail:
        "/Home/We%20Care/Climate-Adaptation-Renewable-Energy-Mining-Biodiversity.jpg?updatedAt=1755865886595",
    },
    {
      icon: Store,
      titleKey: "services.retail",
      thumbnail: "/Home/We%20Care/retail.jpg?updatedAt=1756009182198",
    },
    {
      icon: Landmark,
      titleKey: "services.banking",
      thumbnail:
        "/Home/We%20Care/digital-finance-banking-investment-service-futuristic-bank-building-with-online-growth-graph_251139-785.avif?updatedAt=1755865886379",
    },
    {
      icon: Factory,
      titleKey: "services.manufacturing",
      thumbnail: "/Home/We%20Care/OIP.webp?updatedAt=1755865886344",
    },
    {
      icon: GraduationCap,
      titleKey: "services.education",
      thumbnail:
        "/Home/We%20Care/Virtual-IT-lab-2048x1365.jpg?updatedAt=1755865886326",
    },
    {
      icon: Hospital,
      titleKey: "services.healthcare",
      thumbnail:
        "/Home/We%20Care/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.jpg?updatedAt=1755865886505",
    },
    {
      icon: Users,
      titleKey: "services.community",
      thumbnail:
        "/Home/We%20Care/team-building-workplace-camaraderie-business-people-having-fun-engaging-teamwork_892235-25411.avif?updatedAt=1755865886292",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col py-8 md:py-20 container mx-auto">
      {/* Heading row */}
      <SectionHeader
        title={t("sectionHeader.title")}
        subTitle={t("sectionHeader.subTitle")}
      />

      {/* Services Grid */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="relative w-full h-64 overflow-hidden group cursor-pointer rounded-xl shadow-lg">
              <SafeImage
                src={service.thumbnail}
                alt={t(service.titleKey)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full transition-all duration-300 object-cover object-center group-hover:scale-105"
              />

              {/* Overlay with icon & text */}
              <div className="absolute inset-0 text-shadow-2xs text-shadow-black bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <service.icon className="w-10 h-10" />
                <h3 className="text-xl font-semibold mt-2">
                  {t(service.titleKey)}
                </h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
