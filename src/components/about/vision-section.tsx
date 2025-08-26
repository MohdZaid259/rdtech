"use client";

import React from "react";
import { SafeImage } from "../ui/safe-image";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function VisionSection() {
  const t = useTranslations("About.VisionSection");

  return (
    <section id="vision" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              {t("description")}
            </p>
            <ul className="space-y-3">
              {t.raw("points").map((point: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <SafeImage
                src="/mission.jpg"
                alt={t("title")}
                width={600}
                height={500}
                quality={100}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
