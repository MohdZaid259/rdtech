"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MoveRightIcon, PhoneCallIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import React from "react";
import { SafeImage } from "@/components/ui/safe-image";

export default function HeroSection() {
  const words = ["Technology", "Innovation", "Sustainability"];
  const logos = [
    "aa-contracting-logo.png",
    "core-grid-logo.png",
    "rdtech-logo.png",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-float"
          style={{
            animation: "float 20s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-2xl animate-float"
          style={{
            animation: "float 25s ease-in-out infinite reverse",
            animationDelay: "5s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-400/12 to-cyan-400/12 rounded-full blur-3xl animate-float"
          style={{
            animation: "float 30s ease-in-out infinite",
            animationDelay: "10s",
          }}
        />

        {/* Abstract flowing lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path
            d="M-100,200 Q300,50 600,200 T1300,150"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M-50,400 Q400,250 800,400 T1400,350"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <path
            d="M100,600 Q500,450 900,600 T1500,550"
            stroke="url(#gradient1)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </svg>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "drift 60s linear infinite",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 max-w-2xl">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900">
                Shaping the Future of <br className="hidden sm:block" />
                <FlipWords
                  words={words}
                  className="text-primary font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl px-0"
                />
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
              One vision. Three powers. Endless possibilities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-base font-semibold bg-primary/90 hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/#services" className="flex items-center gap-2">
                  <span>Explore Our Services</span>
                  <MoveRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base text-primary font-semibold border-2 border-muted hover:border-blue-500 hover:bg-blue-50 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/#contact" className="flex items-center gap-2">
                  <span>Contact Us</span>
                  <PhoneCallIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Company Logos */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">
                Our Group Companies
              </p>
              <div className="flex items-center gap-6 lg:gap-8">
                {logos.map((src, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <SafeImage
                      src={`/logos/${src}`}
                      alt={`Company ${src.split(".")[0]} Logo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 3D Image Card */}
          <div className="flex justify-center lg:justify-end">
            <CardContainer className="inter-var">
              <CardBody className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-lg relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-white/[0.3] w-auto sm:w-[32rem] lg:w-[36rem] h-auto rounded-2xl p-4 border shadow-xl">
                {/* Floating decorative elements */}
                <CardItem
                  translateZ="150"
                  className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-70"
                />
                <CardItem
                  translateZ="130"
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full opacity-70"
                />
                <CardItem
                  translateZ="140"
                  className="absolute top-1/4 -right-4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-50"
                />
                <CardItem
                  translateZ="120"
                  className="absolute bottom-1/3 -left-3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-50"
                  style={{ animationDelay: "1s" }}
                />

                {/* Main Hero Image - Primary Focus */}
                <CardItem translateZ="80" className="w-full">
                  <div className="relative overflow-hidden rounded-xl bg-transparent">
                    <SafeImage
                      src="/heroModel.png"
                      alt="Future Technology Innovation"
                      width={1200}
                      height={1200}
                      className="h-72 lg:h-96 w-full object-contain rounded-lg group-hover/card:shadow-2xl transition-all duration-500 transform group-hover/card:scale-[1.02]"
                      priority
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>

      {/* CSS Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0px, 0px);
          }
          100% {
            transform: translate(-50px, -50px);
          }
        }
      `}</style>
    </section>
  );
}
