'use client';
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("Project.HeroSection");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]); // slower movement

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://ik.imagekit.io/or8msinzg/rdtech/projectPage/skyline.jpg")`,
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg text-shadow-black/50">
          {t.rich("heading", { accent: (children) => <span className="text-accent">{children}</span> })}
        </h1>
        <p className="text-white max-w-3xl text-base md:text-lg text-shadow-lg text-shadow-black/50">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
