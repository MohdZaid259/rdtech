'use client'
import React, { useState, useEffect } from "react";
import { MoveRightIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WordRotate } from "../magicui/word-rotate";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];

  // Background images
  const bgImages = [
    "https://ik.imagekit.io/or8msinzg/rdtech/aaBg.jpeg",
    "https://ik.imagekit.io/or8msinzg/rdtech/Companies/RDTech/controlRoom.webp",
    "https://ik.imagekit.io/or8msinzg/rdtech/rdtechBg2.jpeg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000); // change every 3 secs
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImages[currentBg]})`,
      }}
    >
      {bgImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
            currentBg === idx ? "opacity-100" : "opacity-0"
          } ${idx === 1 ? "bg-center" : "bg-top"}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black opacity-30" />

      <div className="h-full w-full top-0 absolute z-20 flex flex-col items-center justify-start max-md:mt-20">
        {/* Hero Section */}
        <div className="h-[30%] md:h-full max-md:max-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white font-bold text-3xl xs:text-5xl sm:text-6xl px-0 mt-2 text-shadow-xs text-shadow-black/20 tracking-wider">
            Shaping the Future of
          </h1>
          <WordRotate
            className="text-3xl xs:text-5xl sm:text-6xl font-extrabold  text-accent tracking-wide"
            words={words}
          />
          <p className="max-w-2xl mt-4 text-muted text-shadow-xs text-shadow-black/20">
            Constructing, Protecting, and Connecting the Future through Technology and Expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 my-6">
            <Button
              asChild
              size="lg"
              className="text-base text-primary font-semibold bg-accent hover:bg-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link href="/#services" className="flex items-center gap-2">
                <span>Explore Our Services</span>
                <MoveRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="default"
              size="lg"
              className="text-base text-blue-950 font-semibold bg-white hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Link href="/#contact" className="flex items-center gap-2">
                <span>Contact Us</span>
                <PhoneCallIcon className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Companies Section */}
      </div>
      {/* <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
}
