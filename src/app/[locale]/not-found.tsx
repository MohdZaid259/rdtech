import { Metadata } from "next";
import StatusPage from "@/components/not-found";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Oops! The page you’re looking for has moved, been removed, or never existed. Return to the homepage of RDTech Group.",
  openGraph: {
    title: "404 - Page Not Found",
    description:
      "The page you’re trying to reach could not be found. Go back to RDTech Group homepage.",
    url: "https://yourdomain.com/404",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "RDTech Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <StatusPage
      code="404"
      title="Page Not Found"
      description="Oops! It seems the page you’re looking for has moved, been removed, or never existed."
    />
  );
}
