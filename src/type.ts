export type Locale = "en" | "ar";

export interface ProjectType {
  id: string;
  slug?: string;
  title: string;
  description: string;
  fullDescription: string;
  category: "RDTech" | "CoreGrid" | "Al Ausus";
  location: string;
  year: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  duration: string;
  size: string;
  client: string;
  budget: string;
  services: string[];
  features: string[];
  challenges: string;
}
