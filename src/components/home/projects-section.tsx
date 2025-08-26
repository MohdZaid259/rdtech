"use client";

import {
  Award,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProjectsSection() {
  const t = useTranslations("Home.ProjectsSection");
  const projects = t.raw("flagshipProjects"); // `raw` lets you fetch arrays/objects directly from JSON

  const [currentProject, setCurrentProject] = useState(0);
  const project = projects[currentProject];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);
console.log('p',project)
  return (
    <section className="min-h-screen flex flex-col py-8 md:py-20 bg-primary">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader
          title={t("title")}
          subTitle={t("subtitle")}
          titleColor="text-primary bg-white"
          subTitleColor="text-muted"
        />

        {/* Project showcase */}
        <div className="relative container mx-auto px-4 mt-12">
          {/* Mobile: Horizontal scrollable cards */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden pb-4">
            {projects.map((proj: any) => (
              <Card
                key={proj.id}
                className="min-w-[85%] snap-center py-0 gap-0 overflow-hidden rounded-2xl shadow-lg border-none bg-white flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56">
                  <SafeImage
                    src={proj.heroImage}
                    alt={proj.title}
                    quality={100}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    variant="outline"
                    className="border-white absolute top-2 right-2 text-white font-semibold"
                  >
                    {proj.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{proj.title}</h3>
                  <p className="text-sm text-gray-600">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 my-2">
                    {proj.services.map((service: string) => (
                      <span
                        key={service}
                        className="bg-blue-50 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full mt-auto">
                    <a href={`/projects/${proj.slug}`}>{t("viewProject")}</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Desktop: Slideshow */}
          <div className="hidden md:block">
            <Card className="relative overflow-hidden rounded-2xl py-0 md:py-6 md:pb-0 shadow-lg border-none bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2">
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
                    className="border-white absolute top-2 right-2 text-white font-semibold"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Details */}
                <div className="p-4 pb-0 md:p-8 md:py-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>

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
                          {t("duration")}
                        </div>
                        <div className="text-base md:text-xl font-semibold text-primary">
                          {project.duration}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="md:text-base text-sm text-gray-600">
                          {t("size")}
                        </div>
                        <div className="text-base md:text-xl font-semibold text-primary">
                          {project.size}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="md:text-base text-sm text-gray-600">
                          {t("budget")}
                        </div>
                        <div className="text-base md:text-xl font-semibold text-primary">
                          {project.budget}
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        {t("services")}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service: string) => (
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
                        {t("features")}
                      </div>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {project.features.map((feature: string) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="default"
                      className="float-right mb-4 md:bottom-16 md:right-10 cursor-pointer"
                    >
                      <a href={`/projects/${project.slug}`}>{t("viewProject")}</a>
                    </Button>                    
                  </div>
                </div>
              </div>
            </Card>

            {/* Prev / Next */}
            <div className="absolute hidden md:flex -bottom-4 right-8 gap-2 z-20">
              <Button
                variant="ghost"
                onClick={() =>
                  setCurrentProject((prev) =>
                    prev === 0 ? projects.length - 1 : prev - 1
                  )
                }
                className="bg-white text-primary shadow-md px-3"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                onClick={() =>
                  setCurrentProject((prev) =>
                    prev === projects.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-white text-primary shadow-md"
              >
                <ChevronRight />
              </Button>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {projects.map((_: any, idx: number) => (
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
      </div>
    </section>
  );
}
