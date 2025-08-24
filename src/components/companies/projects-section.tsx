import { SafeImage } from "../ui/safe-image";

interface ProjectsSectionProps {
  projects: Array<{
    name: string;
    image: string;
  }>;
  companyName: string;
}

export default function ProjectsSection({
  projects,
  companyName,
}: Readonly<ProjectsSectionProps>) {
  return (
    <section className="py-16 pb-24 bg-primary max-sm:px-4">
      <div className="container mx-auto flex flex-col gap-4 max-sm:px-4">
        <h3 className="font-heading text-center text-3xl md:text-4xl font-bold text-white mb-6">
          Our Projects
        </h3>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${
            companyName == "coreProjects" ? "grid-rows-3" : "grid-rows-4"
          } gap-0`}
        >
          {projects.map((project, index) => (
            <div
              key={`project.name-${index}`}
              className="relative w-full h-52 overflow-hidden group hover:shadow-lg hover:scale-110 transition-all duration-300 hover:z-[99]"
            >
              <SafeImage
                src={`/${companyName}/${project.image}`}
                alt={`${project.name} - Project ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full transition-all duration-300 object-cover object-center group-hover:scale-105"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 text-shadow-2xs text-shadow-black bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-xl font-semibold mt-2 capitalize">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
