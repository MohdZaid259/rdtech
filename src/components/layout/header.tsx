"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

import AAContractingLogo from "../logos/aa-contracting-logo";
import CoreGridLogo from "../logos/core-grid-logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import RDTechGroupLogo from "../logos/rdtech-group-logo";
import RDTechLogo from "../logos/rdtech-logo";
import { usePathname } from "next/navigation";

const companies = [
  {
    name: "AA Contracting",
    description: "Multi-disciplinary General Contracting",
    logo: AAContractingLogo,
    href: "/companies/aa-contracting",
    services: [
      "Civil Construction",
      "MEP Services",
      "Project Management",
      "Maintenance",
    ],
  },
  {
    name: "CoreGrid Solutions",
    description: "Building Automation & Smart Solutions",
    logo: CoreGridLogo,
    href: "/companies/core-grid",
    services: [
      "BMS Systems",
      "Lighting Control",
      "Home Automation",
      "Energy Management",
    ],
  },
  {
    name: "RDTech",
    description: "Security Systems & ELV/ICT Solutions",
    logo: RDTechLogo,
    href: "/companies/rdtech",
    services: [
      "Access Control",
      "CCTV Systems",
      "Fire Alarm",
      "Network Infrastructure",
    ],
  },
];

export function Header() {
  const [showOverview, setShowOverview] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8); // 80vh
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // condition: remove bg for /projects/something (dynamic) or if not scrolled past 80vh
  const isProjectsPage =
    pathname.startsWith("/projects/") && pathname !== "/projects";

  const showBg = isProjectsPage ? true : isScrolled;

  const linkClass = () =>
    `relative text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full bg-transparent hover:bg-transparent px-1 py-1.5 text-white`;

  return (
    <header
      className={`fixed top-0 z-[99] w-full ${
        showBg && "bg-primary shadow-xs"
      }`}
    >
      <div className="container mx-auto max-sm:px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <RDTechGroupLogo iconSize={45} textSize={90} className="invert" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              onMouseEnter={() => setShowOverview(false)}
              className={linkClass()}
            >
              About
            </Link>

            <button
              onMouseEnter={() => setShowOverview(true)}
              className={`${linkClass()} ${showOverview && "after:w-full"}`}
            >
              Group Overview
            </button>

            <Link
              href="/projects"
              onMouseEnter={() => setShowOverview(false)}
              className={linkClass()}
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onMouseEnter={() => setShowOverview(false)}
              className={linkClass()}
            >
              Contact
            </Link>
          </nav>

          <div
            onMouseEnter={() => setShowOverview(true)}
            onMouseLeave={() => setShowOverview(false)}
            className={`max-md:hidden absolute  ${
              showOverview ? "top-0" : "-top-70"
            } left-0 w-full shadow-lg bg-primary/90 backdrop-blur-lg -z-[10] duration-300 transform`}
          >
            <div className="w-full grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-10 pt-4">
              {companies.map((company) => {
                const Logo = company.logo;
                return (
                  <Link
                    key={company.name}
                    href={company.href}
                    className="relative group space-y-2 rounded-lg p-4 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-accent after:transition-all duration-300 hover:after:w-full"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                        <Logo />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-accent text-white">
                          {company.name}
                        </h3>
                        <p className="text-sm text-zinc-50">
                          {company.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm text-zinc-50">
                      {company.services.map((service) => (
                        <li key={service}>• {service}</li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="p-6 gap-6 z-[100]">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center mb-6"
                  >
                    <RDTechGroupLogo iconSize={35} textSize={65} />
                  </Link>

                  <nav className="flex flex-col gap-4 flex-1">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium hover:text-accent transition"
                    >
                      Home
                    </Link>

                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium hover:text-accent transition"
                    >
                      About
                    </Link>

                    {/* Group Overview Accordion */}
                    <Accordion type="single" collapsible>
                      <AccordionItem value="group" className="border-b">
                        <AccordionTrigger className="py-0 text-lg font-medium hover:text-accent focus:outline-none focus:ring-0 transition">
                          Group Overview
                        </AccordionTrigger>
                        <AccordionContent aria-describedby="group-overview">
                          <div className="space-y-4 pl-2">
                            {companies.map((company) => {
                              const Logo = company.logo;
                              return (
                                <Link
                                  onClick={() => setOpen(false)}
                                  key={company.name}
                                  href={company.href}
                                  className="flex items-center space-x-3 rounded-lg p-2 hover:bg-accent/10 transition"
                                >
                                  <div className="w-10 h-10 flex items-center justify-center rounded-md border bg-muted">
                                    <Logo />
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-semibold">
                                      {company.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      {company.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Link
                      onClick={() => setOpen(false)}
                      href="/projects"
                      className="text-lg font-medium hover:text-accent transition"
                    >
                      Projects
                    </Link>

                    <Link
                      onClick={() => setOpen(false)}
                      href="/#contact"
                      className="block w-full text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-accent/90 transition"
                    >
                      Get in Touch
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
