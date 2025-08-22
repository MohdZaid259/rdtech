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

export default function WeCareSection() {
  const services = [
    {
      icon: Building,
      title: "Safe City",
      thumbnail: "/Home/We%20Care/care1.webp?updatedAt=1755865152632",
    },
    {
      icon: Plane,
      title: "Transportation",
      thumbnail: "/Home/We%20Care/wp3704688.jpg?updatedAt=1755865886429",
    },
    {
      icon: Zap,
      title: "Utilities, Energy and Mining",
      thumbnail:
        "/Home/We%20Care/Climate-Adaptation-Renewable-Energy-Mining-Biodiversity.jpg?updatedAt=1755865886595",
    },
    {
      icon: Store,
      title: "Retail",
      thumbnail: "/Home/We%20Care/download.webp?updatedAt=1755865886363",
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      thumbnail:
        "/Home/We%20Care/digital-finance-banking-investment-service-futuristic-bank-building-with-online-growth-graph_251139-785.avif?updatedAt=1755865886379",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      thumbnail: "/Home/We%20Care/OIP.webp?updatedAt=1755865886344",
    },
    {
      icon: GraduationCap,
      title: "Education",
      thumbnail:
        "/Home/We%20Care/Virtual-IT-lab-2048x1365.jpg?updatedAt=1755865886326",
    },
    {
      icon: Hospital,
      title: "Healthcare",
      thumbnail:
        "/Home/We%20Care/doctor-with-globe-in-hand-hd-medical-dff7ahiwc5xsfjm0.jpg?updatedAt=1755865886505",
    },
    {
      icon: Users,
      title: "Community",
      thumbnail:
        "/Home/We%20Care/team-building-workplace-camaraderie-business-people-having-fun-engaging-teamwork_892235-25411.avif?updatedAt=1755865886292",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col py-8 md:py-20 container mx-auto ">
      {/* Heading row */}
      <SectionHeader
        title="We Care About Society"
        subTitle="Smarter & Safer Society, More Efficient Business, Better Lives"
      />

      {/* Services Grid */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="relative w-full h-52 overflow-hidden group cursor-pointer rounded-4xl shadow-lg">
              <SafeImage
                src={service.thumbnail}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full transition-all duration-300 object-cover object-center group-hover:scale-105"
              />

              {/* Overlay with icon & text */}
              <div className="absolute inset-0 text-shadow-2xs text-shadow-black bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <service.icon className="w-10 h-10" />
                <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
