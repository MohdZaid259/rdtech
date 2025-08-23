
import { SafeImage } from "../ui/safe-image";

interface Stat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  title: string;
  description: string[];
  stats: Stat[];
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export default function AboutSection({
  title,
  description,
  stats,
  image,
}: Readonly<AboutSectionProps>) {
  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 ">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
              {title}
            </h2>

            {/* Render description paragraphs */}
            {description.map((para, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 last:mb-8"
              >
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 ">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-start">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative self-end order-1 lg:order-2">
            <SafeImage
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
