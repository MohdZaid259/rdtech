"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  const images = [
    "/home/hero/alAususHero.png",
    "/home/hero/dubai_2.png",
    "/home/hero/rdTechHero.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-header-theme="light"
    >
      {/* Background images layered */}
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
            current === idx ? "opacity-100" : "opacity-0"
          } ${idx === 2 ? "bg-bottom" : "bg-top"}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col mt-18 md:mt-24 items-center justify-center">
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-shadow-lg text-shadow-black/20">
            Shaping the Future of{" "}
            <span className="block text-accent animate-pulse-glow">
              Infrastructure & Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-muted max-w-3xl mx-auto font-medium text-shadow-lg text-shadow-black/20">
            From world-class contracting to intelligent buildings and advanced security, RT Tech Group delivers integrated solutions that power progress across the UAE and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-primary hover:text-white hover:border-transparent px-8 py-4 text-lg bg-transparent hover-lift cursor-pointer shadow-lg shadow-black/15 flex items-center"
            >
              <Link className="flex items-center gap-2" href="/#services">
                <span>Explore Our Services</span>
                <Play className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Dash Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 sm:left-20 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              current === idx ? "bg-white w-6 sm:w-8" : "bg-white/50 w-3 sm:w-5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
