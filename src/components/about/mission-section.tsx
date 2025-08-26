import { CheckCircle } from "lucide-react";
import React from "react";
import { SafeImage } from "../ui/safe-image";
import { useTranslations } from "next-intl";

function MissionSection() {
  const t = useTranslations("About.Mission");
  const points = t.raw('points')
  return (
    <section
      id="mission"
      className="py-8 md:py-20 bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="relative">
            <SafeImage
              src="/planning.png"
              alt={t("images.planningAlt")}
              width={500}
              height={300}
              quality={100}
              className="rounded-2xl"
            />
            <SafeImage
              src="/office.jpg"
              alt={t("images.officeAlt")}
              width={350}
              height={350}
              quality={100}
              className="absolute hidden md:block -bottom-12 right-6 rounded-xl border-8 border-blue-900"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-6">
              {t("title")}
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">{t("description")}</p>
            <ul className="space-y-3">
              {points.map((point:any, i:any) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
