'use client'
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
          backgroundImage: `url("https://ik.imagekit.io/or8msinzg/rdtech/aboutBg.jpg?tr=q-auto")`,
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Crafting Excellence Together
        </h1>
        <p className="text-white max-w-3xl text-base md:text-lg drop-shadow">
          For over three decades, RDTech Group has been at the forefront of
          technological innovation, infrastructure excellence, and secure
          operations in the UAE and beyond.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
