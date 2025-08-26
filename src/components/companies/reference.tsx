"use client";

import { FadeIn } from "../ui/fade-in";
import { SafeImage } from "../ui/safe-image";
import { BriefcaseBusiness, GraduationCap, Hotel, Landmark, Radio, Store } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RefrenceSection() {
  const t = useTranslations("ReferenceSection");

  const clients = [
    {
      icon: Store,
      name: t("clients.retail"),
      image: "retail.png",
    },
    {
      icon: Landmark,
      name: t("clients.banking"),
      image: "banking.png",
    },
    {
      icon: Hotel,
      name: t("clients.hospitality"),
      image: "hospitality.png",
    },
    {
      icon: Radio,
      name: t("clients.communication"),
      image: "communication.png",
    },
    {
      icon: BriefcaseBusiness,
      name: t("clients.enterprises"),
      image: "enterprises.png",
    },
    {
      icon: GraduationCap,
      name: t("clients.education"),
      image: "education.png",
    },
  ];

  return (
    <section id="clients" className="py-16 pb-24 px-2 bg-primary">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="mb-6">
          <h3 className="font-heading text-center text-3xl md:text-4xl font-bold text-white mb-2">
            {t("title")}
          </h3>
          <p className="text-gray-400 text-center">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative w-full md:h-64 h-48 overflow-hidden group cursor-pointer rounded-xl shadow-lg bg-white hover:scale-110 duration-300 transition-all">
                <SafeImage
                  src={`/Companies/RDTech/clients/${client.image}`}
                  alt={client.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full transition-all duration-300 object-contain rounded-lg object-center"
                />
                <div className="absolute inset-0 text-shadow-2xs text-shadow-black bg-black/40 opacity-100 md:opacity-100 md:group-hover:opacity-0 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                  <client.icon className="w-10 h-10" />
                  <h3 className="text-xl font-semibold mt-2">{client.name}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
