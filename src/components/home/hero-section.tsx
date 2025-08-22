import { MoveRightIcon, PhoneCallIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import React from "react";
import { SafeImage } from "@/components/ui/safe-image";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];
  const companies = [
    {
      name: "AA Contracting",
      description: "Multi-disciplinary Contracting Excellence",
      logo: "aa-contracting-logo.png",
    },
    {
      name: "Core Grid",
      description: "Building Automation & Smart Solutions",
      logo: "core-grid-logo.png",
    },
    {
      name: "RD Tech",
      description: "Security Systems & ELV/ICT Solutions",
      logo: "rdtech-logo.png",
    },
  ];

  return (
    <section
      className="relative min-h-screen text-white flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url('/home/hero/dubai_2.png')`,
        backgroundPosition: "top",
      }}
    >
      {/* Color Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 opacity-75" />

      <div className="h-full w-full top-0 absolute z-20 flex flex-col items-center justify-start max-md:mt-20">
        {/* Hero Section */}
        <div className="h-[40%] sm:h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-accent font-bold text-xl px-0 mt-2 tracking-wide">
            Shaping the Future of
          </h1>
          <FlipWords
            words={words}
            className="text-3xl xs:text-5xl sm:text-6xl font-extrabold tracking-wide"
          />
          <p className="max-w-2xl mt-4 text-muted">
            One vision, three powers — ICT, ELV & enterprise solutions shaping
            the future for 30+ years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold bg-accent hover:bg-accent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
          {/* <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute -top-20 left-0 w-full fill-white h-30 z-30"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-inherit"
            ></path>
          </svg> */}

          {/* White Box with content */}
          <div className="relative bg-white text-gray-800 pt-10 pb-8 px-10 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center p-1">
                  <SafeImage
                    src={`/logos/${company.logo}`}
                    alt={`${company.name} Logo`}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain object-center"
                  />
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
