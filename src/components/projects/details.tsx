
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { Project } from "../../../public/projectData";
import { SafeImage } from "../ui/safe-image";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-card">
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/projects"
            className="flex text-sm items-center py-4 pt-2 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-base md:text-xl tracking-wide text-muted-foreground">
                {project.location} • {project.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative container mx-auto md:rounded-xl h-full md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat blur-xl transform scale-110"
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT_URL}${project.heroImage})` }}
        />
        <SafeImage
          src={project.heroImage || ""}
          alt={project.title}
          width={2266}
          height={675}
          className="relative z-10 h-full w-full object-contain "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-2 md:mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {project?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    <span className="-mt-1">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">
                Challenges & Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-4">
            <Card className="p-6 shadow-xl border-l-4 border-l-primary rounded-l-none">
              <h3 className="font-bold text-xl">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">
                    Duration
                  </span>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Size</span>
                  <p className="font-medium">{project.size}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Client</span>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    Budget Range
                  </span>
                  <p className="font-medium">{project.budget}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-2xl border-l-4 border-l-primary rounded-l-none">
              <h3 className="font-bold text-xl">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project?.services?.map((service, index) => (
                  <Badge key={index} variant="secondary">
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-3xl font-bold mb-4 md:mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project?.gallery?.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <SafeImage
                  src={image || ""}
                  alt={`${project.title} gallery ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
