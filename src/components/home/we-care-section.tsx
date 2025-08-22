import {
  Building,
  Factory,
  GraduationCap,
  Hospital,
  House,
  Landmark,
  Plane,
  Store,
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
      thumbnail: "/general/rdtech/cctv.png",
    },
    {
      icon: Plane,
      title: "Transportation",
      thumbnail: "/general/rdtech/fiber.webp",
    },
    {
      icon: Zap,
      title: "Utilities, Energy and Mining",
      thumbnail: "/general/aa/plan_3.webp",
    },
    {
      icon: Store,
      title: "Retail",
      thumbnail: "/general/aa/worker.webp",
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      thumbnail: "/general/coregrid/realState_2.webp",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      thumbnail: "/general/rdtech/dataCenter_2.webp",
    },
    {
      icon: GraduationCap,
      title: "Education",
      thumbnail: "/general/rdtech/dataCenter_2.webp",
    },
    {
      icon: Hospital,
      title: "Healthcare",
      thumbnail: "/general/rdtech/dataCenter_2.webp",
    },
    {
      icon: House,
      title: "Community",
      thumbnail: "/general/rdtech/dataCenter_2.webp",
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
