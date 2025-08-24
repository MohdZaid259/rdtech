import {
  Cable,
  Database,
  HardDrive,
  MapPin,
  Monitor,
  Network,
  Phone,
  Printer,
  Shield,
  Wifi,
  Zap,
  Server,
  Video,
  Flame,
  Megaphone,
  Clock,
  Speaker,
  Lock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Structured Cabling Solutions",
    description: "Cabling infrastructure with intelligent monitoring",
    icon: Cable,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "End-to-end Cat6 and Cat6A Structured Cabling",
      "Copper & Fibre Termination expertise",
      "Data Centre Pre-terminated Solution",
      "Intelligent Cabling Monitoring",
      "Best Practices Installation & Documentation",
      "Large Local Stock Available",
    ],
  },
  {
    title: "Structured Converged Data & Voice Solutions",
    description: "Top notch network solutions with redundancy and security",
    icon: Network,
    color: "bg-slate-50 text-slate-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "Redundant solutions with sub-second failover",
      "High Bandwidth & Multi-service Delivery",
      "Digital, IP, Analog & SIP Telephony Support",
      "Multi-layer Security Approach",
      "Application Load Balancing",
      "Single Monitoring Platform",
    ],
  },
  {
    title: "UC / CC Solutions & Mobility Infrastructure",
    description: "Secure wireless coverage with advanced location services",
    icon: Wifi,
    color: "bg-indigo-50 text-indigo-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "Secure Corporate Wireless Coverage",
      "Wireless Internet for corporate networks",
      "Voice over WLAN for mobile staff",
      "Handheld device integration",
      "Location Tracking (People & Equipment)",
      "Location-based Service Delivery",
    ],
  },
  {
    title: "Enterprise Systems, Storage & Security",
    description: "Reliable enterprise systems with backup and protection",
    icon: Server,
    color: "bg-green-50 text-green-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "Enterprise Servers & Systems",
      "Disaster Recovery & Backup Solutions",
      "Multifunction & Large Format Printers",
      "Advanced Spam & Security Protections",
    ],
  },
  {
    title: "Audio-Visual Solutions",
    description: "Smart AV systems for seamless experiences",
    icon: Speaker,
    color: "bg-yellow-50 text-yellow-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "Background Music Systems",
      "Professional AV Solutions",
      "Centralized Music Servers",
    ],
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security for safer environments",
    icon: Shield,
    color: "bg-red-50 text-red-600 dark:bg-blue-100 dark:text-indigo-400",
    features: [
      "CCTV & Video Surveillance",
      "Access Control & Gate Barriers",
      "Intrusion & Threat Detection Systems",
      "Fire Alarm & Public Address Systems",
      "Nurse Call & Emergency Alerts",
      "Biometric Time & Attendance",
      "Centralized Clock Systems",
    ],
  },
];


export default function CoreGridOverview() {
  const getFeatureIcon = (feature: string) => {
  if (feature.includes("Telephony") || feature.includes("VoWLAN"))
    return Phone;
  if (feature.includes("Security") || feature.includes("Spam"))
    return Shield;
  if (feature.includes("Database") || feature.includes("Storage") || feature.includes("Server"))
    return Database;
  if (feature.includes("Monitoring") || feature.includes("Load Balancing"))
    return Monitor;
  if (feature.includes("Backup") || feature.includes("Recovery"))
    return HardDrive;
  if (feature.includes("Printer"))
    return Printer;
  if (feature.includes("Location") || feature.includes("Tracking"))
    return MapPin;
  if (feature.includes("failover") || feature.includes("Redundant"))
    return Zap;
  if (feature.includes("Music") || feature.includes("AV"))
    return Speaker;
  if (feature.includes("CCTV") || feature.includes("Surveillance"))
    return Video;
  if (feature.includes("Access Control") || feature.includes("Biometric"))
    return Lock;
  if (feature.includes("Fire Alarm"))
    return Flame;
  if (feature.includes("Public Address") || feature.includes("Nurse Call"))
    return Megaphone;
  if (feature.includes("Clock"))
    return Clock;
  
  // default
  return Network;
};


  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font font-bold text-slate-900 dark:text-slate-100 mb-2">
            <span className="text-white"> Overview</span>
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to power your business
            infrastructure with reliability, security, and scalability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 gap-2 hover:-translate-y-1 border-0 shadow-lg bg-white backdrop-blur-sm p-4"
              >
                <CardHeader className="p-2">
                  <div
                    className={`p-3 mb-2 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300 max-w-max`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-slate-500 text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = getFeatureIcon(feature);
                      return (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 p-1 rounded-lg group/feature"
                        >
                          <FeatureIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover/feature:text-blue-500 transition-colors flex-shrink-0" />
                          <span className="text-slate-800 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
