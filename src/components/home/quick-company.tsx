"use client";

import React from "react";
import { useTranslations } from "next-intl";
import AAContractingLogo from "../logos/aa-contracting-logo";
import CoreGridLogo from "../logos/core-grid-logo";
import RDTechLogo from "../logos/rdtech-logo";
import Link from "next/link";
import SectionHeader from "./section-header";

const companies = [
  {
    nameKey: "companies.aa.name",
    descriptionKey: "companies.aa.description",
    Logo: AAContractingLogo,
    shape: "hexagon",
    href: "/companies/aa-contracting",
    delay: "0s",
  },
  {
    nameKey: "companies.rdtech.name",
    descriptionKey: "companies.rdtech.description",
    Logo: RDTechLogo,
    shape: "diamond",
    href: "/companies/rdtech",
    delay: "0.4s",
  },
  {
    nameKey: "companies.coregrid.name",
    descriptionKey: "companies.coregrid.description",
    Logo: CoreGridLogo,
    shape: "circle",
    href: "/companies/core-grid",
    delay: "0.2s",
  },
];

function QuickCompany() {
  const t = useTranslations("Home.QuickCompany");

  return (
    <div className="relative w-full max-md:my-20">
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
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ left: "20%", animationDelay: "0s" }}></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ left: "50%", animationDelay: "0.5s" }}></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ left: "80%", animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeader
              title={t("sectionHeader.title")}
              subTitle={t("sectionHeader.subTitle")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {companies.map((company, index) => (
              <Link
                href={company.href}
                key={company.nameKey}
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
                </div>

                {/* Company Info */}
                <div className="space-y-3 group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {t(company.nameKey)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs group-hover:text-gray-700 transition-colors duration-300">
                    {t(company.descriptionKey)}
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickCompany;
