import React from 'react'
import { SafeImage } from '../ui/safe-image'
import { CheckCircle } from "lucide-react";

function MissionSection() {
  return (
    <section id="mission" className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
            <div>
              <SafeImage
                src="/about/planning.png"
                alt="Construction planning and blueprints"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To empower clients with innovative, reliable, and future-ready
                solutions that enhance safety, efficiency, and performance
                across diverse industries. We are dedicated to helping
                organizations stay ahead in a rapidly evolving world by blending
                human expertise with cutting-edge technology. Through our
                commitment to quality, innovation, and customer success, we
                ensure that every solution is designed to meet present needs
                while anticipating future challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-700">
                    Delivering Future-Ready Solutions Across Sectors
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-700">
                    Enhancing Safety, Efficiency, and Performance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-700">
                    Combining Human Expertise with Technology
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  <span className="text-sm md:text-base text-gray-700">
                    Adapting to Evolving Industry Challenges
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MissionSection