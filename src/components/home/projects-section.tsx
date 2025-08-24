"use client";

import { Award, Building, Calendar, ChevronLeft, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import {ChevronRight} from 'lucide-react'
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

const flagshipProjects = [
  {
    id: "1",
    slug: "ajman-transport-vehicle-surveillance",
    title: "Ajman Transport – Vehicle Surveillance",
    description:
      "Deployment of advanced surveillance systems for over 2,600 public transport vehicles in Ajman.",
    category: "RDTech",
    location: "Ajman, UAE",
    year: "2022",
    thumbnail: "/projectPage/rdtech/ajmanHero.jpg",
    heroImage: "/projectPage/rdtech/ajmanHero.jpg",
    duration: "12 months",
    size: "2,600 vehicles",
    client: "Ajman Public Transport Corporation",
    budget: "$3M+",
    services: ["Vehicle Surveillance", "Fleet Security Systems"],
    features: [
      "Onboard CCTV for 2,600 vehicles",
      "Live monitoring integration",
      "Tamper-proof recording",
    ],
  },
  {
    id: "6",
    slug: "sharjah-sustainable-city-automation",
    title: "Sharjah Sustainable City ",
    description:
      "Home automation and smart metering for 280 villas in the first Net Zero energy community of Sharjah.",
    category: "CoreGrid",
    location: "Sharjah, UAE",
    year: "2021",
    thumbnail: "/projectPage/coregrid/SharjahHero.jpg",
    heroImage: "/projectPage/coregrid/SharjahHero.jpg",
    duration: "24 months",
    size: "280 Villas",
    client: "Sharjah Sustainable City",
    budget: "$25M+",
    services: ["Home Automation", "Smart Metering", "Energy Optimization"],
    features: [
      "280 smart villas with home automation",
      "Smart metering and energy monitoring",
      "Sustainable and future-ready housing"
    ],
  },
  {
    id: "3",
    slug: "al-ain-club-restaurants",
    title: "Al Ain Club – Restaurants",
    description:
      "Development of a stylish, state-of-the-art restaurant located inside the Al Ain Sports Club premises.",
    category: "Al Ausus",
    location: "Al Ain – Al Sanaiya",
    year: "2020",
    thumbnail: "/projectPage/alAusus/alAinHero.jpeg",
    heroImage: "/projectPage/alAusus/alAinHero.jpeg",
    duration: "10 months",
    size: "3,500 sq m",
    client: "Al Ain Sports Club",
    budget: "$4M+",
    services: ["Civil Works", "Fit-out"],
    features: [
      "High-quality dining facilities",
      "Structural construction",
      "Durable and sustainable building solutions",
    ],
  },
];

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const project = flagshipProjects[currentProject];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) =>
        prev === flagshipProjects.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col py-8 md:py-20 bg-primary">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader
          title="Flagship Projects"
          subTitle="Showcasing our expertise in delivering mission-critical technology
              solutions across diverse industries"
          titleColor="text-primary bg-white"
          subTitleColor="text-muted"
        />

        {/* Project showcase */}
        <div className="relative container mx-auto px-4 mt-12">
          <Card className="relative overflow-hidden rounded-2xl py-0 md:py-6 md:pb-0 shadow-lg border-none bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              {/* Image */}
              <div className="relative h-80 md:h-[450px] md:pl-6">
                <SafeImage
                  key={project.id}
                  src={project.heroImage}
                  alt={project.title}
                  quality={100}
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover md:rounded-sm"
                />
                <Badge
                  variant="outline"
                  className="border-primary absolute top-2 right-2 text-primary font-semibold"
                >
                  {project.category}
                </Badge>
              </div>

              {/* Details */}
              <div className="p-4 pb-0 md:p-8 md:py-0">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        {project.budget}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="md:text-base text-sm text-gray-600">
                        Duration
                      </div>
                      <div className="text-base md:text-xl font-semibold text-primary">
                        {project.duration}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="md:text-base text-sm text-gray-600">
                        Size
                      </div>
                      <div className="text-base md:text-xl font-semibold text-primary">
                        {project.size}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="md:text-base text-sm text-gray-600">
                        Budget
                      </div>
                      <div className="text-base md:text-xl font-semibold text-primary">
                        {project.budget}
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Services
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-blue-50 text-gray-700 px-3 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-2">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features
                    </div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="default"
                    className="float-right mb-4 md:bottom-16 md:right-10 cursor-pointer"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Prev / Next buttons */}
          <div className="absolute -bottom-4 right-8 flex gap-2 z-20">
            <Button
              variant="ghost"
              onClick={() =>
                setCurrentProject((prev) =>
                  prev === 0 ? flagshipProjects.length - 1 : prev - 1
                )
              }
              className="bg-white text-primary shadow-md px-3"
            >
              <ChevronLeft/>
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                setCurrentProject((prev) =>
                  prev === flagshipProjects.length - 1 ? 0 : prev + 1
                )
              }
              className="bg-white text-primary shadow-md"
            >
              <ChevronRight/>
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {flagshipProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentProject === idx
                    ? "bg-white w-6 sm:w-8"
                    : "bg-white/30 w-3 sm:w-5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
