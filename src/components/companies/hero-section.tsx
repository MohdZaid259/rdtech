import { Globe, MoveRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  companyName: string;
  slogan: string;
  description: string;
  backgroundImage: string;
  companyLogo?: React.ReactNode;
  projectsLink?: string;
  websiteLink?: string;
}

export default function HeroSection({
  companyName,
  slogan,
  description,
  backgroundImage,
  companyLogo,
  projectsLink = "#projects",
  websiteLink,
}: Readonly<HeroSectionProps>) {
  return (
    <section
      className="relative min-h-screen flex items-center bg-fixed bg-cover justify-center overflow-hidden py-12"
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGEKIT_URL}${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
        <div className="max-w-4xl mx-auto flex flex-col mt-18 sm:mt-10 items-center justify-center">
          {/* Company Logo */}
          {companyLogo && (
            <FadeIn delay={150}>
              <div className="bg-white/50 w-[70%] md:w-full rounded-full flex items-center justify-center aspect-square">
                {companyLogo}
              </div>
            </FadeIn>
          )}

          {/* Company Name */}
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-7xl font-bold mt-2 mb-0 md:mb-4 text-shadow-lg text-shadow-black/20">
              {companyName}
            </h1>
          </FadeIn>

          {/* Slogan */}
          <FadeIn delay={300}>
            <h2 className="text-xl md:text-4xl font-semibold mb-6 text-accent animate-pulse-glow text-shadow-lg text-shadow-black/20">
              {slogan}
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={400}>
            <p className="text-base md:text-xl mb-8 text-muted max-w-2xl mx-auto font-medium text-shadow-lg text-shadow-black/40">
              {description}
            </p>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {projectsLink && (
                <Button
                  asChild
                  size="lg"
                  className="text-base text-white font-semibold bg-primary hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href={projectsLink} className="flex items-center gap-2">
                    <span>Explore Projects</span>
                    <MoveRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}

              {websiteLink && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] text-base text-blue-950 font-semibold bg-white hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-5 w-5" />
                    Go to Site
                  </Link>
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
