"use client";

import {
  Briefcase,
  Fingerprint,
  Home,
  Plane,
  Shield,
  ShieldUser,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";
import { useTranslations } from "next-intl";

export function IndustriesSection() {
  const t = useTranslations("Home.IndustriesSection");

  const industries = [
    {
      name: t("industries.energy.name"),
      icon: Zap,
      image: "/Home/Industries/industry1.jpg?updatedAt=1755862753917",
      description: t("industries.energy.description"),
    },
    {
      name: t("industries.publicSafety.name"),
      icon: Shield,
      image: "/Home/Industries/industry2.webp?updatedAt=1755863390682",
      description: t("industries.publicSafety.description"),
    },
    {
      name: t("industries.airports.name"),
      icon: Plane,
      image: "/Home/Industries/industry3.jpg?updatedAt=1755864184603",
      description: t("industries.airports.description"),
    },
    {
      name: t("industries.business.name"),
      icon: Briefcase,
      image: "/Home/Industries/industry4.jpg?updatedAt=1755864297063",
      description: t("industries.business.description"),
    },
    {
      name: t("industries.ngo.name"),
      icon: Users,
      image: "/Home/Industries/industry5.webp?updatedAt=1755864357507",
      description: t("industries.ngo.description"),
    },
    {
      name: t("industries.smb.name"),
      icon: Fingerprint,
      image: "/Home/Industries/industry6.webp?updatedAt=1755864482637",
      description: t("industries.smb.description"),
    },
    {
      name: t("industries.civilDefense.name"),
      icon: ShieldUser,
      image: "/Home/Industries/industry7.jpg",
      description: t("industries.civilDefense.description"),
    },
    {
      name: t("industries.smartLife.name"),
      icon: Home,
      image: "/Home/Industries/industry8.png?updatedAt=1755864813500",
      description: t("industries.smartLife.description"),
    },
  ];

  return (
    <section id="services" className="py-8 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={t("title")}
          subTitle={t("subtitle")}
        />

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.name}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl gap-2 md:gap-6 transition-all duration-300 hover:-translate-y-1 pt-0 pb-6"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={industry.image || ""}
                    alt={industry.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardContent className="md:px-6 pl-2">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-0 md:mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
