import { FadeIn } from "@/components/ui/fade-in";
import { NumberTicker } from "../magicui/number-ticker";
import { SafeImage } from "../ui/safe-image";
import SectionHeader from "./section-header";

export default function GlobalCountriesSection() {
  const emirates = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
    "Ajman",
  ];

  const stats = [
    { label: "Countries", value: 20 },
    { label: "Projects", value: 500 },
    { label: "Clients", value: 100 },
  ];

  return (
    <section className="flex flex-col items-center py-8 md:py-20 container mx-auto">
      {/* Heading */}
      <SectionHeader
        title="Global Reach"
        subTitle="Serving clients across the UAE, GCC, and through strong partnerships with technology vendors in Europe, North America, and Asia."
      />

      {/* Content Grid */}
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Side (Map) */}
            <div className="md:col-span-2">
              <SafeImage
                src="/Home/uae-map.jpg?updatedAt=1755860716884"
                alt="UAE Map"
                width={900}
                height={500}
                className="object-contain h-[300px] sm:h-[450px] w-full"
              />
            </div>

            {/* Right Side (Emirates List + Stats) */}
            <div className="w-full flex sm:flex-col justify-center gap-6">
              {/* Emirates */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  UAE Emirates
                </h3>
                <ul className="space-y-2">
                  {emirates.map((emirate, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-base border-l-4 border-primary pl-3"
                    >
                      {emirate}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Section */}
              <div className="w-[40%] sm:w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-primary text-white rounded-2xl shadow-lg flex flex-col items-center justify-center py-2"
                  >
                    <div className="text-2xl text-white font-bold flex items-center">
                      <NumberTicker value={stat.value} className="text-white" />
                      +
                    </div>
                    <div className="text-xs opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
