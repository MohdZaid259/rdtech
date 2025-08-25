import Link from "next/link";
import { SafeImage } from "../ui/safe-image";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-8 md:pt-16 pb-6">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Logo & About - custom span */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <SafeImage src="/Logos/rdtech-group-1.png?updatedAt=1755860934739" width={36} height={36} alt="logo"/>
              <span className="text-lg font-semibold text-white">
                RDTech Group
              </span>
            </div>
            <p className="text-gray-400 mb-4 md:w-[80%] w-full text-sm">
              Uniting three industry leaders — RDTech Security Solutions, AL
              AUSUS AL ARBAA Contracting, and CoreGrid Automation — to deliver
              innovative, reliable, and future-ready solutions across security,
              construction, and smart building technologies.
            </p>
          </div>

          {/* Wrapper for other 3 columns */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="text-white font-semibold mb-3">Utility Pages</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/companies/aa-contracting"
                    className="hover:text-white"
                  >
                    Our Companies
                  </Link>
                </li>
                <li>
                  <Link href="/about#mission" className="hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about#vision" className="hover:text-white">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">
                    Flagship Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-6 md:mt-0">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white">+971 3733 0116 </li>
                <li className="hover:text-white">
                  <a href="mailto:info@alaususgencont.com ">info@alaususgencont.com </a>
                </li>
                <li className="hover:text-white">PO : 23113</li>
                <li className="hover:text-white">Abu Dhabi, UAE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-muted pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© RDGroup {new Date().getFullYear()}</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="/terms" className="hover:text-white">
              Term of service
            </a>
            <a href="/policy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
