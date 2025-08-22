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
        backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/Home/ceo.png')`,
        backgroundAttachment: "fixed",
        backgroundPositionY: `50% ${scrollY * 0.5}px`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="relative">
          {/* Quote Frame - Transparent Background */}
          <div className="relative bg-transparent border-2 rounded-3xl p-6 px-12 backdrop-blur-xs shadow-2xl">
            {/* Opening Quote Mark */}
            <div className="absolute -top-6 -left-8 text-6xl font-bold text-white">
              <Quote className="fill-white size-16 rotate-y-180" />
            </div>

            {/* Content */}
            <div className="space-y-2">

              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="text-white/90">
                  More than projects, we create relationships rooted in trust and integrity.
                  Excellence is not just a goal—it is the standard we live by.
                </p>
              </div>

              {/* CEO Attribution */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-right font-semibold text-white">
                  Eng. Khaled Akhozahaya - CEO
                </p>
              </div>
            </div>

            {/* Closing Quote Mark */}
            <div className="absolute -bottom-6 -right-8 text-6xl font-bold text-white">
              <Quote className="size-16 fill-white" />
            </div>
          </div>

          {/* Accent Color Highlight */}
          <div className="absolute -inset-1 rounded-3xl opacity-20 -z-10 bg-primary" />
        </div>
      </div>
    </section>
  );
}
