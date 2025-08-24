import { CircleCheck } from "lucide-react";
import { SafeImage } from "../ui/safe-image";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface ServicesSectionProps {
  title: string;
  services: ServiceItem[];
  companyName: string;
}

export default function ServicesSection({
  title,
  services,
  companyName,
}: Readonly<ServicesSectionProps>) {
  return (
    <section className="py-16 bg-white max-sm:px-4">
      <div className="flex flex-col container mx-auto max-sm:px-4">
        <h3 className="font-heading text-center text-3xl md:text-4xl font-bold text-black mb-6">
          {title}
        </h3>

        <div className="w-full grid sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full group p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-300 bg-white flex flex-col md:flex-row items-center gap-4"
            >
              {/* Image wrapper for consistent size */}
              <div className="relative flex-shrink-0 w-full h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-md">
                <SafeImage
                  src={`/Companies/${companyName}/Services/${service.image}`}
                  alt={
                    service.image.split("/").pop()?.split(".")[0] ||
                    "Service Image"
                  }
                  fill
                  sizes="(100vw)"
                  loading="lazy"
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-start gap-1 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold text-lg text-gray-900">
                    {service.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm md:text-base text-start leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
