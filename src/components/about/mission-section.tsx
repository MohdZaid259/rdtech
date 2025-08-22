import { CheckCircle } from "lucide-react";
import React from "react";
import { SafeImage } from "../ui/safe-image";

function MissionSection() {
  return (
    <section
      id="mission"
      className="py-8 md:py-20 bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="relative">
            <SafeImage
              src="https://ik.imagekit.io/or8msinzg/planning.png?updatedAt=1755837494228"
              alt="Construction planning"
              width={500}
              height={300}
              quality={100}
              className="rounded-2xl"
            />
            <SafeImage
              src="/office.jpg?updatedAt=1755838457044"
              alt="Office"
              width={350}
              height={350}
              quality={100}
              className="absolute -bottom-12 right-6 rounded-xl border-8 border-blue-900"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-6">
              Our Mission
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              To empower clients with innovative, reliable, and future-ready
              solutions that enhance safety, efficiency, and performance across
              diverse industries. We are dedicated to helping organizations stay
              ahead in a rapidly evolving world by blending human expertise with
              cutting-edge technology. Through our commitment to quality,
              innovation, and customer success, we ensure that every solution is
              designed to meet present needs while anticipating future
              challenges.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-200">
                  Delivering Future-Ready Solutions Across Sectors
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-200">
                  Enhancing Safety, Efficiency, and Performance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-200">
                  Combining Human Expertise with Technology
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-sm md:text-base text-gray-200">
                  Adapting to Evolving Industry Challenges
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
