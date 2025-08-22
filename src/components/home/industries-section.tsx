import {
  Briefcase,
  Factory,
  Home,
  Plane,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

const industries = [
  {
    name: "Energy & Utilities / Industry / Ministries",
    icon: Zap,
    image: "",
    description:
      "Secure and efficient solutions for energy providers, industries, and public ministries.",
  },
  {
    name: "Public Safety",
    icon: Shield,
    image: "",
    description:
      "Management solutions for security, emergency response, and urban governance.",
  },
  {
    name: "Airports / Transportation / Critical Infrastructures",
    icon: Plane,
    image: "",
    description:
      "Safety and monitoring systems for airports, transport authorities, and vital infrastructures.",
  },
  {
    name: "Enterprise",
    icon: Briefcase,
    image: "",
    description:
      "Integrated products and services for smarter, safer business operations.",
  },
  {
    name: "NGOs / Educational Institutions",
    icon: Users,
    image: "",
    description:
      "Technology support for NGOs and secure solutions for schools and universities.",
  },
  {
    name: "SMB",
    icon: Factory,
    image: "",
    description:
      "Security products and cloud services tailored for small and medium businesses.",
  },
  {
    name: "Civil Defenses",
    icon: Shield,
    image: "",
    description:
      "Defense and emergency readiness solutions for civil protection agencies.",
  },
  {
    name: "Consumer",
    icon: Home,
    image: "",
    description:
      "Smart-home and lifestyle products that make everyday living safer and easier.",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-8 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title="Industries We Serve"
          subTitle="Delivering specialized solutions across sectors — from critical infrastructure to consumers."
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
                  {industry.description !== "—" && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
