import { Metadata } from "next";
import { ProjectDetail } from "@/components/projects/details";
import { ProjectType } from "@/type";
import { RelatedProjects } from "@/components/projects/related";
import arMessages from "@/messages/ar.json";
import enMessages from "@/messages/en.json";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const enProjects = enMessages.Project.ProjectsGrid.projects;
const arProjects = arMessages.Project.ProjectsGrid.projects;

interface ProjectPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const slug = await params;

  const project = enProjects.find((p) => p.slug === slug.slug);

  if (!project) {
    return {
      title: "Project Not Found | RDTech Group",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | RDTech Group`,
    description:
      project.description ||
      "Explore our detailed project work at RDTech Group.",
    openGraph: {
      title: `${project.title} | RDTech Group`,
      description:
        project.description ||
        "Explore our detailed project work at RDTech Group.",
      url: `https://rdtechgroup.com/projects/${project.slug}`,
      siteName: "RDTech Group",
      images: [
        {
          url: project.thumbnail || "/default-project.jpg",
          width: 1200,
          height: 630,
          alt: project.title || "Project Thumbnail",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: Readonly<ProjectPageProps>) {
  const slug = await params;
  setRequestLocale(slug.locale);
  const t = await getTranslations("Project.ProjectsGrid");

  const project = t
    .raw("projects")
    .find((p: ProjectType) => p.slug === slug.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen my-12">
      <ProjectDetail project={project} />
      <RelatedProjects currentProjectId={project.id} />
    </main>
  );
}

export function generateStaticParams() {
  const slugs = Array.from(
    new Set(
      [...enProjects, ...arProjects]
        .map((project) => project.slug)
        .filter((slug): slug is string => typeof slug === "string" && slug.length > 0)
    )
  );

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}
