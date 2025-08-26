"use client";

import {
  Cable,
  Clock,
  Cpu,
  DollarSign,
  Gauge,
  Key,
  Layers,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "../ui/fade-in";
import SectionHeader from "./section-header";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: Key,
    titleKey: "features.turnkey.title",
    subtitleKey: "features.turnkey.subtitle",
  },
  {
    icon: Clock,
    titleKey: "features.availability.title",
    subtitleKey: "features.availability.subtitle",
  },
  {
    icon: DollarSign,
    titleKey: "features.cost.title",
    subtitleKey: "features.cost.subtitle",
  },
  {
    icon: Layers,
    titleKey: "features.modular.title",
    subtitleKey: "features.modular.subtitle",
  },
  {
    icon: Cpu,
    titleKey: "features.tech.title",
    subtitleKey: "features.tech.subtitle",
  },
  {
    icon: Gauge,
    titleKey: "features.fast.title",
    subtitleKey: "features.fast.subtitle",
  },
  {
    icon: Cable,
    titleKey: "features.cabling.title",
    subtitleKey: "features.cabling.subtitle",
  },
  {
    icon: Users,
    titleKey: "features.support.title",
    subtitleKey: "features.support.subtitle",
  },
];

export default function WhyRDTechGroup() {
  const t = useTranslations("Home.WhyChooseUs");

  return (
    <section className="md:py-20 py-8 w-full bg-blue-50">
      {/* Section Header */}
      <SectionHeader
        title={t("sectionHeader.title")}
        subTitle={t("sectionHeader.subTitle")}
      />

      {/* Enhanced Feature Grid */}
      <div className="relative">
        {/* Desktop Layout - Zigzag Pattern */}
        <div className="hidden lg:flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className={`relative ${i % 2 === 0 ? "mt-0" : "mt-16"}`}>
                <FadeIn delay={i * 80}>
                  <Card className="w-64 h-full group relative overflow-hidden rounded-xl md:rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-0">
                    <CardContent className="md:p-6 md:pt-4 p-2 pb-6 flex flex-col items-start">
                      <div className="md:mb-4 mb-2 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-primary text-white shadow-md group-hover:scale-110 transition-transform duration-300 opacity-90 group-hover:opacity-100">
                        <feature.icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {t(feature.titleKey)}
                      </h3>

                      {feature.subtitleKey && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(feature.subtitleKey)}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {i < features.length - 1 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(6)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className="w-1 h-1 bg-gradient-to-r from-blue-900 to-primary rounded-full"
                          style={{ opacity: 0.8 - dotIndex * 0.1 }}
                        />
                      ))}
                    </div>
                    <svg
                      className="w-4 h-4 text-primary opacity-70 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4 max-sm:px-4">
          {features.map((feature, i) => (
            <div key={i} className="max-sm:h-full relative">
              <FadeIn delay={i * 80}>
                <Card className="h-full group relative overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-0">
                  <CardContent className="p-4 flex flex-col items-start">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-primary text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {t(feature.titleKey)}
                    </h3>

                    {feature.subtitleKey && (
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t(feature.subtitleKey)}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
