"use client";

import { ChevronRight, PhoneCallIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import AAContractingLogo from "../logos/aa-contracting-logo";
import { Button } from "@/components/ui/button";
import CoreGridLogo from "../logos/core-grid-logo";
import Link from "next/link";
import RDTechLogo from "../logos/rdtech-logo";
import { WordRotate } from "../magicui/word-rotate";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Home.Hero");

  console.log(t('title'));

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
  const bgImages = ["https://ik.imagekit.io/or8msinzg/rdtech/aaBg.jpeg"];

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

      <div className="absolute z-20 h-full flex flex-col items-center gap-10">
        {/* Hero Section */}
        <div className="h-full flex flex-col items-center justify-center text-center mt-32 md:mt-28 px-4">
          <h1 className="text-white font-bold text-3xl xs:text-5xl sm:text-6xl px-0 text-shadow-xs text-shadow-black/20 tracking-wider">
            {t("title")}
          </h1>
          {/* <WordRotate
            className="text-3xl xs:text-5xl sm:text-6xl font-extrabold  text-accent tracking-wide"
            words={[""]}
          /> */}
          <p className="max-w-2xl mt-4 text-muted text-shadow-xs text-shadow-black/20">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
        <div className="w-full mt-auto mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
            {companies.map((company, index) => (
              <Link
                href={company.href}
                key={company.name}
                className={`group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 ${
                  index == 2 && "max-sm:col-span-2"
                }`}
                style={{ animationDelay: company.delay }}
              >
                {/* Circle logo container */}
                <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 p-3">
                  <company.Logo />
                </div>

                {/* Company Info */}
                <div className="mt-2 group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
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
