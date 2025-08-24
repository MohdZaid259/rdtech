"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]); // slower movement

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/aboutBg.jpg?tr=q-auto)`,
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg text-shadow-black/50">
          Building a Legacy of <span className="text-accent">Innovation</span>
        </h1>
        <p className="text-white max-w-3xl text-base md:text-lg text-shadow-lg text-shadow-black/50">
          For over three decades, RDTech Group has been at the forefront of
          technological innovation, infrastructure excellence, and secure
          operations in the UAE and beyond.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
