import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  MoveRightIcon,
  Phone,
} from "lucide-react";

import { Button } from "../ui/button";
import Link from "next/link";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
}

export default function ContactSection({
  title,
  subtitle,
  phone,
  email,
  address,
}: Readonly<ContactSectionProps>) {
  return (
    <section className="py-20 max-md:pb-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold mb-1 text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-12">
          {/* Left Side - Trio with line dividers */}
          <div className="flex flex-col divide-y divide-gray-200">
            {/* Phone */}
            <div className="flex items-center gap-6 pb-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <Phone className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Call Us
                </h3>
                <p className="text-gray-600">We’re ready to help anytime</p>
                <p className="text-lg font-semibold text-primary mt-1">
                  {phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 py-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <Mail className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600">
                  Detailed responses for inquiries
                </p>
                <p className="text-lg font-semibold text-primary mt-1">
                  {email}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-6 pt-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <MapPin className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-1">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  Meet us for personalized service
                </p>
                <p className="text-lg font-semibold text-primary mt-1">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - CTA & Additional Info */}
          <div className="lg:pl-8">
            <div className="bg-primary rounded-3xl p-10 text-white mb-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <MessageCircle className="h-12 w-12 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-8 text-white/90">
                  Choose your preferred way to connect with our team. We're here
                  to help!
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] text-base text-blue-950 font-semibold bg-white hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Link href="/#contact">
                    Start Conversation
                    <MoveRightIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
