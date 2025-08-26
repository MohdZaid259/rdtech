"use client";

import { SafeImage } from "../ui/safe-image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-primary text-gray-300 pt-8 md:pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <SafeImage
                src="/Logos/rdtech-group-1.png?updatedAt=1755860934739"
                width={36}
                height={36}
                alt={t("logoAlt")}
              />
              <span className="text-lg font-semibold text-white">
                {t("groupName")}
              </span>
            </div>
            <p className="text-gray-400 mb-4 md:w-[80%] w-full text-sm">
              {t("description")}
            </p>
          </div>

          {/* Navigation & Utility & Contact */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-3">
                {t("navTitle")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white">
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="text-white font-semibold mb-3">
                {t("utilityTitle")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/companies/aa-contracting" className="hover:text-white">
                    {t("utility.ourCompanies")}
                  </Link>
                </li>
                <li>
                  <Link href="/about#mission" className="hover:text-white">
                    {t("utility.mission")}
                  </Link>
                </li>
                <li>
                  <Link href="/about#vision" className="hover:text-white">
                    {t("utility.vision")}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">
                    {t("utility.projects")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-6 md:mt-0">
              <h3 className="text-white font-semibold mb-3">
                {t("contactTitle")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white">{t("contact.phone")}</li>
                <li className="hover:text-white">
                  <a href="mailto:info@alaususgencont.com">{t("contact.email")}</a>
                </li>
                <li className="hover:text-white">{t("contact.po")}</li>
                <li className="hover:text-white">{t("contact.address")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-muted pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <Link href="/terms" className="hover:text-white">
              {t("terms")}
            </Link>
            <Link href="/policy" className="hover:text-white">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
