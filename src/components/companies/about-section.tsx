import { SafeImage } from "../ui/safe-image";

interface Stat {
  value: string;
  label: string;
}

interface AboutSectionProps {
  title: string;
  description: string[];
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
          </div>

          {/* Right Image */}
          <div className="relative self-end order-1 lg:order-2">
            <SafeImage
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className={`rounded-xl ${image.alt.includes('AA')?'h-[400px]':''} shadow-lg`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
