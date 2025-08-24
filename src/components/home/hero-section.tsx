'use client'
import React, { useState, useEffect } from "react";
import { MoveRightIcon, PhoneCallIcon } from "lucide-react";
import AAContractingLogo from "../logos/aa-contracting-logo";
import { Button } from "@/components/ui/button";
import CoreGridLogo from "../logos/core-grid-logo";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import RDTechLogo from "../logos/rdtech-logo";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];
  const companies = [
    {
      name: "AA Contracting",
      description: "Multi-disciplinary Contracting Excellence",
      Logo: AAContractingLogo,
    },
    {
      name: "Core Grid",
      description: "Building Automation & Smart Solutions",
      Logo: CoreGridLogo,
    },
    {
      name: "RD Tech",
      description: "Security Systems & ELV/ICT Solutions",
      Logo: RDTechLogo,
    },
  ];

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
      <div className="absolute z-10 inset-0 bg-black opacity-20" />

      <div className="h-full w-full top-0 absolute z-20 flex flex-col items-center justify-start max-md:mt-20">
        {/* Hero Section */}
        <div className="h-[30%] md:h-full max-md:max-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white font-bold text-3xl xs:text-5xl sm:text-6xl px-0 mt-2 text-shadow-xs text-shadow-black/20 tracking-wider">
            Shaping the Future of
          </h1>
          <FlipWords
            words={words}
            className="text-3xl xs:text-5xl text-accent sm:text-6xl text-shadow-xs text-shadow-black/20 font-extrabold tracking-wide"
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
        <div className="relative w-full max-md:mt-20">
          {/* Wave Shape */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute -top-20 left-0 w-full fill-white h-30 z-30"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-inherit"
            ></path>
          </svg>

          {/* White Box with content */}
          <div className="relative bg-white text-gray-800 pt-10 pb-8 px-10 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center p-1">
                  <company.Logo />
                </div>
                <h3 className="font-semibold mb-2">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
