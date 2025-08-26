"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle, Leaf, Lightbulb, ShieldCheck, Users, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

const iconComponents = [
  CheckCircle,
  ShieldCheck,
  Lightbulb,
  Users,
  Leaf,
  Heart,
];

// animation variant for icons
const iconVariants: Variants = {
  hidden: { y: 50, scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ValuesSection() {
  const t = useTranslations("About.ValuesSection");

  const values = t.raw("values").map((value: { title: string; description: string }, index: number) => ({
    Icon: iconComponents[index],
    title: value.title,
    description: value.description,
  }));

  return (
    <div className="py-8 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {t("title")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{t("subtitle")}</p>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {values.map((value: any, index:any) => {
            const Icon = value.Icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={iconVariants}
                className="flex flex-col items-center text-center space-y-2 md:space-y-4"
              >
                <div className="bg-white p-6 rounded-full shadow-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 -mt-2 md:-mt-0 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
