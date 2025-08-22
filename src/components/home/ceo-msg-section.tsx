"use client";

import { useEffect, useState } from "react";

import { Quote } from "lucide-react";

export default function CEOMessageSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative py-8 md:py-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/home/ceo/image.png')",
        backgroundAttachment: "fixed",
        backgroundPositionY: `50% ${scrollY * 0.5}px`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Quote Frame - Transparent Background */}
          <div className="relative bg-transparent border-2 rounded-3xl p-12 backdrop-blur-xs shadow-2xl">
            {/* Opening Quote Mark */}
            <div className="absolute -top-2 -left-2 text-6xl font-bold text-white">
              <Quote className="fill-white rotate-y-180" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Our CEO Message
              </h1>

              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="text-white/90">
                  We have set Principles and Objectives tailored coincide with
                  our mission.
                </p>

                <p className="text-white/90">
                  In AA, our clients are our priority. Our prosperity and
                  success is owned to our creative engineers. We can assure you,
                  you're in good hands once you choose AA
                </p>
              </div>

              {/* CEO Attribution */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-right font-semibold text-white">
                  Eng. Khaled Akhozahaya - General Manager
                </p>
              </div>
            </div>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-2 -right-2 text-6xl font-bold text-white">
              <Quote className="fill-white" />
            </div>
          </div>

          {/* Accent Color Highlight */}
          <div className="absolute -inset-1 rounded-3xl opacity-20 -z-10 bg-primary" />
        </div>
      </div>
    </section>
  );
}
