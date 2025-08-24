"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";

import { SafeImage } from "../ui/safe-image";

interface RowConfig {
  baseVelocity: number;
  direction: 1 | -1;
  logos: string[];
}

interface ClientsSectionProps {
  title: string;
  subTitle: string;
  rows: RowConfig[];
}

export default function ClientsSection({
  title,
  subTitle,
  rows,
}: Readonly<ClientsSectionProps>) {
  return (
    <section className="py-8 md:py-24 max-sm:px-4 bg-blue-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-center">
        {/* Left Content */}
        <div className="md:p-4 p-0">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
            {title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {subTitle}
          </p>
        </div>

        {/* Logos with scroll velocity */}
        <div className="container mx-auto p-4 relative z-10">
          <ScrollVelocityContainer className="space-y-8">
            {rows.map((row, idx) => (
              <ScrollVelocityRow
                key={idx}
                baseVelocity={row.baseVelocity}
                direction={row.direction}
              >
                {row.logos.map((src, i) => {
                  const altName =
                    src.split("/").pop()?.split(".")[0] || "Client Logo";

                  return (
                    <div
                      key={`${idx}-${i}`}
                      className="flex-shrink-0 w-34 h-17 md:w-40 md:h-20 relative mx-2 flex items-center justify-center bg-white rounded-md p-2 overflow-hidden"
                    >
                      <SafeImage
                        src={`/Clients/${src}`}
                        alt={altName}
                        width={160}
                        height={80}
                        loading="lazy"
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </ScrollVelocityRow>
            ))}
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}
