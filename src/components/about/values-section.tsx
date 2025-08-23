"use client";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import {
  CheckCircle,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Users,
  Heart,
} from "lucide-react";

const values = [
  {
    icon: <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
    title: "Excellence",
    description: "Delivering the highest quality outcomes on every project.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
    title: "Integrity",
    description: "Building trust through transparency and accountability.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />,
    title: "Innovation",
    description: "Embracing change and leading with new technologies.",
  },
  {
    icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-purple-600" />,
    title: "Collaboration",
    description: "Partnering with clients, vendors, teams for shared success.",
  },
  {
    icon: <Leaf className="w-8 h-8 md:w-12 md:h-12 text-emerald-500" />,
    title: "Sustainability",
    description: "Creating solutions that are mindful of environment.",
  },
  {
    icon: <Heart className="w-8 h-8 md:w-12 md:h-12 text-red-500" />,
    title: "Customer Focus",
    description: "Putting client needs at the center of every decision.",
  },
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

function ValuesSection() {
  return (
    <div className="py-8 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our Values
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We ensure every project reflects our commitment to excellence, trust,
          innovation, collaboration, and a sustainable future.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {values.map((value, index) => (
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
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600 -mt-2 md:-mt-0 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ValuesSection;
