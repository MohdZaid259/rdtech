"use client";

import { MoveRightIcon, PhoneCallIcon } from "lucide-react";

import AAContractingLogo from "../logos/aa-contracting-logo";
import { Button } from "@/components/ui/button";
import CoreGridLogo from "../logos/core-grid-logo";
import Link from "next/link";
import RDTechLogo from "../logos/rdtech-logo";
import { WordRotate } from "../magicui/word-rotate";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];
  const companies = [
    {
      name: "AA Contracting",
      description: "Multi-disciplinary Contracting Excellence",
      Logo: AAContractingLogo,
      shape: "hexagon",
      delay: "0s",
    },
    {
      name: "Core Grid",
      description: "Building Automation & Smart Solutions",
      Logo: CoreGridLogo,
      shape: "circle",
      delay: "0.2s",
    },
    {
      name: "RD Tech",
      description: "Security Systems & ELV/ICT Solutions",
      Logo: RDTechLogo,
      shape: "diamond",
      delay: "0.4s",
    },
  ];

  return (
    <section
      className="relative min-h-[155vh] xs:min-h-[140vh] md:min-h-screen text-white flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/Home/dubai_2.png)`,
        backgroundPosition: "top",
      }}
    >
      {/* Color Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 opacity-75" />

      <div className="h-full w-full top-0 absolute z-20 flex flex-col items-center justify-start max-md:mt-20">
        {/* Hero Section */}
        <div className="h-[30%] md:h-full max-md:max-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-accent font-bold text-xl px-0 mt-2 tracking-wide">
            Shaping the Future of
          </h1>
          <WordRotate
            className="text-3xl xs:text-5xl sm:text-6xl font-extrabold tracking-wide"
            words={words}
          />
          <p className="max-w-2xl mt-4 text-muted">
            One vision, three powers — ICT, ELV & enterprise solutions shaping
            the future for 30+ years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
            className="absolute -top-8 left-0 w-full fill-white h-10 z-30"
          >
            <path
              d="M0,80 L1200,0 L1200,120 L0,120 Z"
              className="fill-inherit"
            ></path>
          </svg>

          <div className="relative bg-white text-gray-800 pt-16 pb-12 px-6 md:px-10 z-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rotate-45"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rotate-12"></div>
            </div>

            {/* Flowing Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-60 animate-pulse"></div>
              {/* Flowing dots animation */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ left: "20%", animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ left: "50%", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ left: "80%", animationDelay: "1s" }}
              ></div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Our Ecosystem of Excellence
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Three specialized companies, one unified vision - delivering
                  comprehensive solutions across technology, automation, and
                  security.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: company.delay }}
                  >
                    {/* Geometric Shape Container */}
                    <div
                      className={`relative mb-6 transition-all duration-500 group-hover:shadow-2xl ${
                        company.shape === "hexagon"
                          ? "w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rotate-0 group-hover:rotate-12"
                          : company.shape === "circle"
                          ? "w-24 h-24 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full group-hover:rotate-180"
                          : "w-24 h-24 bg-gradient-to-br from-cyan-50 to-cyan-100 rotate-45 group-hover:rotate-90"
                      } flex items-center justify-center border-2 border-white shadow-lg group-hover:shadow-xl group-hover:border-blue-200`}
                    >
                      {/* Inner logo container */}
                      <div
                        className={`${
                          company.shape === "hexagon"
                            ? "w-16 h-16 bg-white rounded-lg rotate-0 group-hover:-rotate-12"
                            : company.shape === "circle"
                            ? "w-16 h-16 bg-white rounded-full group-hover:-rotate-180"
                            : "w-16 h-16 bg-white rounded-md -rotate-45 group-hover:-rotate-90"
                        } flex items-center justify-center shadow-inner transition-all duration-500 p-2`}
                      >
                        <company.Logo />
                      </div>

                      {/* Floating particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                      <div
                        className="absolute -bottom-2 -left-2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>

                    {/* Company Info */}
                    <div className="space-y-3 group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {company.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed max-w-xs group-hover:text-gray-700 transition-colors duration-300">
                        {company.description}
                      </p>

                      {/* Subtle accent line */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                    </div>

                    {/* Connection nodes for desktop */}
                    {index < companies.length - 1 && (
                      <div className="hidden md:block absolute top-12 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-200 to-transparent">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-12 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}
