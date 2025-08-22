import { CheckCircle } from "lucide-react";
import { Image } from "@imagekit/next";
import React from "react";
import { SafeImage } from "../ui/safe-image";

function VisionSection() {
  return (
    <section id="vision" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be the most trusted and respected partner for delivering
              innovative, reliable, and future-ready solutions that drive
              safety, efficiency, and performance across industries. We envision
              a future where technology and human expertise work hand in hand to
              create smarter, more sustainable systems and communities. By
              staying ahead of global trends and industry needs, we aim to
              progress, set new standards of excellence, and help our clients
              thrive in a world of constant change.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-700">
                  Becoming the Most Trusted Industry Partner
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-700">
                  Setting New Standards of Excellence
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-700">
                  Driving Innovation and Sustainable Growth
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-700">
                  Anticipating and Adapting to Future Needs
                </span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <SafeImage
                src="/mission.jpg?updatedAt=1755786638173"
                alt="Construction planning"
                width={600}
                height={500}
                quality={100}
                className="rounded-2xl"
              />
              {/* <SafeImage
                  src="/plan.jpg?updatedAt=1755786638241"
                  alt="Office"
                  width={300}
                  height={300}
                  quality={100}
                  className="absolute top-1/2 -translate-y-1/2 -right-14 rounded-xl border-8 border-white "
                /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
