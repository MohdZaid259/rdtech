"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WorkingSection() {
  const t = useTranslations("About.WorkingSection");

  const steps = [
    {
      number: "01",
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700",
    },
    {
      number: "02",
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700",
    },
    {
      number: "03",
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700",
    },
    {
      number: "04",
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      bgColor: "bg-gradient-to-br from-blue-950 to-blue-700",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
        {t("title")}
      </h2>
      <p className="text-gray-800 mb-8 leading-relaxed text-center">
        {t("subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`
              ${step.bgColor} 
              text-white 
              p-6 
              rounded-lg 
              flex-1 
              min-w-[25px] 
              max-w-[100%]
              mx-4 
              md:mx-0
              relative 
              shadow-lg 
              hover:shadow-xl 
              transition-all 
              duration-300 
              hover:scale-105
            `}
          >
            <div className="text-4xl font-bold mb-2 opacity-90">{step.number}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm opacity-90 mb-6">{step.description}</p>
            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
