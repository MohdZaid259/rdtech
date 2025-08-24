import React from 'react'
import AAContractingLogo from "../logos/aa-contracting-logo";
import CoreGridLogo from "../logos/core-grid-logo";
import RDTechLogo from "../logos/rdtech-logo";
import Link from 'next/link';
import SectionHeader from './section-header';

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

function QuickCompany() {
  return (
    <>
        <div className="relative w-full max-md:my-20 ">
          {/* Wave Shape
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute -top-20 left-0 w-full fill-white h-30 z-30"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="absolute -top-8 left-0 w-full fill-white h-10 z-30"
          ></path>
            <path
              d="M0,80 L1200,0 L1200,120 L0,120 Z"
              className="fill-inherit"
            ></path>
          </svg> */}

          <div className="relative bg-white text-gray-800 pt-16 pb-12 px-6 md:px-10 z-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rotate-45"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rotate-12"></div>
            </div>

            {/* Flowing Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-70 hidden md:block">
              <div className="absolute bg-gradient-to-r from-blue-400 to-blue-600 opacity-60 animate-pulse"></div>
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
                <SectionHeader
                  title="Our Ecosystem of Excellence"
                  subTitle="Three specialized companies, one unified vision - delivering comprehensive solutions across technology, automation, and
                  security."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                {companies.map((company, index) => (
                  <Link href={company.href}
                    key={company.name}
                    className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105"
                    style={{ animationDelay: company.delay }}
                  >
                    {/* Geometric Shape Container */}
                    <div
                      className={`relative mb-6 transition-all duration-500 group-hover:shadow-2xl ${
                        company.shape === "hexagon"
                          ? "w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rotate-45 group-hover:rotate-90"
                          : company.shape === "circle"
                          ? "w-24 h-24 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full group-hover:rotate-180"
                          : "w-24 h-24 bg-gradient-to-br from-cyan-50 to-cyan-100 rotate-45 group-hover:rotate-90"
                      } flex items-center justify-center border-2 border-white shadow-lg group-hover:shadow-xl group-hover:border-blue-200`}
                    >
                      {/* Inner logo container */}
                      <div
                        className={`${
                          company.shape === "hexagon"
                            ? "w-16 h-16 bg-white rounded-lg -rotate-45 group-hover:-rotate-90"
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
                  </Link>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-12 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default QuickCompany