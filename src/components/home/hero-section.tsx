'use client'
import React, { useState, useEffect } from "react";
import { ChevronRight ,MoveRightIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WordRotate } from "../magicui/word-rotate";
import AAContractingLogo from "../logos/aa-contracting-logo";
import CoreGridLogo from "../logos/core-grid-logo";
import RDTechLogo from "../logos/rdtech-logo";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];
  const companies = [
      {
        name: "AA Contracting",
        description: "Multi-disciplinary Contracting Excellence",
        Logo: AAContractingLogo,
        shape: "hexagon",
        href: "/companies/aa-contracting",
        delay: "0s",
      },
      {
        name: "RDTech",
        description: "Security Systems & ELV/ICT Solutions",
        Logo: RDTechLogo,
        shape: "diamond",
        href: "/companies/rdtech",
        delay: "0.4s",
      },
      {
        name: "CoreGrid Solutions",
        description: "Building Automation & Smart Solutions",
        Logo: CoreGridLogo,
        shape: "circle",
        href: "/companies/core-grid",
        delay: "0.2s",
      },
    ];
  
  // Background images
  const bgImages = [
    "https://ik.imagekit.io/or8msinzg/rdtech/aaBg.jpeg",

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
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 opacity-80" />

      <div className="absolute z-20 h-full flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center justify-start md:mt-20">
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
                  <ChevronRight className="h-6 w-6 font-bold transition-transform group-hover:translate-x-1" />
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
        {/* Companies Section */}
        <div className="w-full mt-auto md:mt-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {companies.map((company, index) => (
              <Link
                href={company.href}
                key={company.name}
                className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: company.delay }}
              >
                {/* Circle logo container */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 p-3"
                >
                  <company.Logo />
                </div>

                {/* Company Info */}
                <div className="mt-4 space-y-3 group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {company.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-accent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
