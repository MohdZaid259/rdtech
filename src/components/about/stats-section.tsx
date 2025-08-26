"use client";

import React from "react";
import { NumberTicker } from "../magicui/number-ticker";
import { useTranslations } from "next-intl";

export default function StatsSection() {
  const t = useTranslations("About.StatsSection");

  const stats = [
    { value: 200, label: t("completeProjects") },
    { value: 32, label: t("yearsExperience") },
    { value: 120, label: t("teamMembers") },
    { value: 200, label: t("customerReviews") },
  ];

  return (
    <section className="py-6 pb-0 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-2 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="md:text-4xl text-3xl font-bold text-shadow-xs text-shadow-black/40 text-accent mb-2">
              <NumberTicker value={stat.value} className="text-accent" />+
            </div>
            <div className="text-gray-800 text-base md:text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
