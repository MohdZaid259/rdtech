import "../globals.css";

import { Inter, Poppins } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";

import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Locale } from "@/type";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title: {
    default: "Home | RDTech Group",
    template: "%s | RDTech Group",
  },
  description:
    "Leading the way in Security, Contracting, and Building Automation across the UAE.",

  // Keywords for SEO
  keywords: [
    "RDTech Group",
    "Security Solutions UAE",
    "Contracting UAE",
    "Building Automation",
    "Smart Homes UAE",
    "CCTV Installation",
    "Access Control Systems",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://www.rdtechgroup.com",
  },

  // OpenGraph (for link previews: Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    url: "https://www.rdtechgroup.com",
    title: "RDTech Group - Security, Contracting & Automation in UAE",
    description:
      "RDTech Group specializes in Security, Contracting, and Building Automation services across the UAE.",
    siteName: "RDTech Group",
    images: [
      {
        url: "https://www.rdtechgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RDTech Group Office",
      },
    ],
    locale: "en_US",
  },

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
  },

  // Robots (control search engine indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // MetadataBase for relative URLs (optional, helps with OpenGraph)
  metadataBase: new URL("https://www.rdtechgroup.com"),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
