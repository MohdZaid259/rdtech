import {
  Cable,
  Clock,
  Cpu,
  DollarSign,
  Gauge,
  Key,
  Layers,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { FadeIn } from "../ui/fade-in";
import SectionHeader from "./section-header";

const features = [
  {
    icon: Key,
    title: "Turnkey Solutions",
    subtitle: "End-to-end integration & delivery",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    subtitle: "Round-the-clock support",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    subtitle: "Optimized & value-driven solutions",
  },
  {
    icon: Layers,
    title: "Modular & Scalable",
    subtitle: "Future-ready system upgrades",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    subtitle: "Latest hardware & software",
  },
  {
    icon: Gauge,
    title: "Fast Implementation",
    subtitle: "Zero-downtime delivery",
  },
  {
    icon: Cable,
    title: "In-House Cabling",
    subtitle: "Civil, MEP, networking expertise",
  },
  {
    icon: Users,
    title: "Expert Support Team",
    subtitle: "Certified engineers & specialists",
  },
];

export default function WhyRDTechGroup() {
  return (
    <section className="md:py-20 py-8 w-full bg-blue-50">
      {/* Section Header */}
      <SectionHeader
        title="Why RDTech Group"
        subTitle="The trusted technology partner delivering value-driven, reliable, and
          innovative solutions."
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
                      {/* Icon with gradient background */}
                      <div className="md:mb-4 mb-2 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-primary text-white shadow-md group-hover:scale-110 transition-transform duration-300 opacity-90 group-hover:opacity-100">
                        <feature.icon className="h-5 w-5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      {/* Subtitle */}
                      {feature.subtitle && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.subtitle}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {i < features.length - 1 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    {/* Dotted line */}
                    <div className="flex space-x-1">
                      {[...Array(6)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className="w-1 h-1 bg-gradient-to-r from-blue-900 to-primary rounded-full"
                          style={{ opacity: 0.8 - dotIndex * 0.1 }}
                        />
                      ))}
                    </div>
                    {/* Arrow head */}
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

        <div className="lg:hidden grid grid-cols-2 gap-4 max-sm:px-4">
          {features.map((feature, i) => (
            <div key={i} className="max-sm:h-full relative">
              <FadeIn delay={i * 80}>
                <Card className="h-full group relative overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 py-0">
                  <CardContent className="p-4 flex flex-col items-start">
                    {/* Icon with gradient background */}
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-primary text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {feature.title}
                    </h3>

                    {/* Subtitle */}
                    {feature.subtitle && (
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.subtitle}
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
