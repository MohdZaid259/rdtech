export interface Project {
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

export const projects: Project[] = [
  // RDTech
  {
    id: "1",
    slug: "jw-marriott-marquis-security",
    title: "JW Marriott Marquis – Security & Surveillance",
    description:
      "Installation of over 2,200 CCTV cameras and a state-of-the-art control room at one of the world’s tallest 5-star hotels.",
    fullDescription:
      "RDTech successfully delivered a large-scale surveillance and control solution for JW Marriott Marquis, enhancing guest safety and operational monitoring. The project included more than 2,200 CCTV cameras, centralized monitoring systems, and advanced threat detection features, ensuring round-the-clock security for a luxury hospitality environment.",
    category: "RDTech",
    location: "Dubai, UAE",
    year: "2021",
    thumbnail: "/projectPage/rdtech/jwHero.jpeg",
    heroImage: "/projectPage/rdtech/jwHero.jpeg",
    gallery: [
      "/projectPage/rdtech/jwG1.webp",
      "/projectPage/rdtech/jwG2.webp",
      "/projectPage/rdtech/jwG3.webp",
    ],
    duration: "18 months",
    size: "1,608 rooms (covered under surveillance)",
    client: "JW Marriott Marquis",
    budget: "$5M+",
    services: [
      "CCTV Installation",
      "Centralized Control Room",
      "Access Control Systems",
    ],
    features: [
      "Over 2,200 CCTV cameras",
      "Centralized surveillance and monitoring",
      "Integrated access control",
      "Advanced threat detection",
    ],
    challenges:
      "Coordinating installation in a fully operational luxury hotel without disturbing guest experience was the key challenge. Work was scheduled in phases and executed with minimal disruption.",
  },
  {
    id: "3",
    slug: "burj-khalifa-security-systems",
    title: "Burj Khalifa – Integrated Security Systems",
    description:
      "Comprehensive security integration at the tallest building in the world, including surveillance, access control, and monitoring systems.",
    fullDescription:
      "RDTech implemented a world-class integrated security solution for the Burj Khalifa. The project included CCTV surveillance, access control systems, intrusion detection, and a centralized monitoring control room. This deployment ensured the safety of visitors, residents, and businesses within one of the most iconic landmarks globally.",
    category: "RDTech",
    location: "Dubai, UAE",
    year: "2018",
    thumbnail: "/projectPage/rdtech/burjHero.webp",
    heroImage: "/projectPage/rdtech/burjHero.webp",
    gallery: [
      "/projectPage/rdtech/burjG1.webp",
      "/projectPage/rdtech/burjG2.webp",
      "/projectPage/rdtech/burjG3.jpg",
    ],
    duration: "24 months",
    size: "828 m tower – mixed-use facility",
    client: "Emaar Properties",
    budget: "$20M+",
    services: [
      "CCTV Systems",
      "Access Control",
      "Centralized Monitoring",
      "Intrusion Detection",
    ],
    features: [
      "Advanced surveillance coverage",
      "Centralized security command center",
      "Biometric access control",
      "Redundant system design",
    ],
    challenges:
      "Due to the size and global prominence of the project, RDTech had to ensure zero downtime and seamless integration of multiple systems with ongoing daily operations.",
  },
  {
    id: "0",
    title: "Atlantis Hotel",
    description:
      "Comprehensive security integration at one of Dubai’s most iconic luxury resorts, including CCTV surveillance, access control, and advanced monitoring systems to ensure guest safety and operational reliability.",
    fullDescription:
      "",
    category: "RDTech",
    location: "Dubai, UAE",
    year: "2022",
    thumbnail: "/rdProjects/atlantis.webp",
    heroImage: "/rdProjects/atlantis.webp",
    gallery: [],
    duration: "",
    size: "",
    client: "",
    budget: "$6M+",
    services: [],
    features: [],
    challenges:
      "",
  },
  // CoreGrid
  {
  id: "4",
  slug: "expo-2020-dubai-bms",
  title: "Expo 2020 Dubai – Smart Building & Lighting Control",
  description:
    "KNX-based automation for 10 pavilions at Expo 2020 Dubai, integrating BMS, lighting, and energy efficiency systems.",
  fullDescription:
    "The Expo 2020 in Dubai showcased innovation and technology, offering a world-class visitor experience. Controlrium Building Technology implemented the KNX system in 10 pavilions with seamless integration into other systems. The solution provided flexibility for future transformation into District 2020, a sustainable smart city. Key achievements include integration with DMX, DALI & BACnet, up to 60% energy savings, and a cost-effective, future-proof smart infrastructure.",
  category: "CoreGrid",
  location: "Dubai, UAE",
  year: "2020",
  thumbnail: "/projectPage/coregrid/expoHero.jpg",
  heroImage: "/projectPage/coregrid/expoHero.jpg",
  gallery: [
    "/projectPage/coregrid/expoG1.jpg",
    "/projectPage/coregrid/expoG2.jpg",
    "/projectPage/coregrid/expoG3.jpg"
  ],
  duration: "18 months",
  size: "10 Pavilions",
  client: "Expo 2020 Dubai",
  budget: "$20M+",
  services: ["BMS", "Lighting Control", "Facade Lighting", "Energy Optimization"],
  features: [
    "10 pavilions equipped with KNX",
    "Integration with DMX, DALI & BACnet",
    "Up to 60% energy savings",
    "Future-proof automation for District 2020"
  ],
  challenges:
    "Ensuring seamless integration with multiple systems while maintaining flexibility for future upgrades."
  },
  {
    id: "5",
    slug: "miramar-al-aqah-beach-resort-bms",
    title: "Miramar Al Aqah Beach Resort – GRMS & Smart Lighting",
    description:
      "Smart hospitality automation with GRMS, BMS, and lighting control for a luxury beachfront resort.",
    fullDescription:
      "Nestled between the Hajar Mountains and the Indian Ocean, Miramar Al Aqah Beach Resort is a unique blend of Arabic, Moroccan, and Mediterranean design. The project implemented GRMS, BMS, and smart lighting solutions, enhancing guest comfort and energy efficiency. The automation ensured elegant, reliable, and luxurious hospitality services with seamless technology integration.",
    category: "CoreGrid",
    location: "Al Fujairah, UAE",
    year: "2019",
    thumbnail: "/projectPage/coregrid/miramarHero.webp",
    heroImage: "/projectPage/coregrid/miramarHero.webp",
    gallery: [
      "/projectPage/coregrid/miramarG1.webp",
      "/projectPage/coregrid/miramarG2.webp",
      "/projectPage/coregrid/miramarG3.webp"
    ],
    duration: "16 months",
    size: "5-star resort, 321 rooms",
    client: "Miramar Al Aqah Beach Resort",
    budget: "$10M+",
    services: ["GRMS", "BMS", "Lighting Control"],
    features: [
      "Room automation with GRMS",
      "Smart lighting & mood control",
      "Energy-efficient BMS integration",
      "Seamless guest comfort technology"
    ],
    challenges:
      "Integration of modern automation into a boutique-style luxury resort while preserving traditional Arabian ambiance."
  },
  {
    id: "6",
    slug: "sharjah-sustainable-city-automation",
    title: "Sharjah Sustainable City – Smart Homes & Energy Systems",
    description:
      "Home automation and smart metering for 280 villas in the first Net Zero energy community of Sharjah.",
    fullDescription:
      "Sharjah Sustainable City, inspired by the iconic Sustainable City model, is the UAE’s first fully integrated Net Zero energy community. The project covers 280 villas of 3–5 bedrooms with advanced home automation and smart metering systems. Designed for a sustainable and happy lifestyle, it provides exceptional facilities while promoting energy efficiency and renewable living.",
    category: "CoreGrid",
    location: "Sharjah, UAE",
    year: "2021",
    thumbnail: "/projectPage/coregrid/SharjahHero.jpg",
    heroImage: "/projectPage/coregrid/SharjahHero.jpg",
    gallery: [
      "/projectPage/coregrid/sharjahG1.jpg",
      "/projectPage/coregrid/SharjahG3.jpg",
      "/projectPage/coregrid/expoG2.jpg"
    ],
    duration: "24 months",
    size: "280 Villas",
    client: "Sharjah Sustainable City",
    budget: "$25M+",
    services: ["Home Automation", "Smart Metering", "Energy Optimization"],
    features: [
      "280 smart villas with home automation",
      "Smart metering and energy monitoring",
      "Net Zero energy-ready infrastructure",
      "Sustainable and future-ready housing"
    ],
    challenges:
      "Delivering scalable smart home solutions for a large community while ensuring energy efficiency and Net Zero compliance."
  },
  // Al Ausus
  {
    id: "7",
    slug: "emirates-post-office-construction",
    title: "Emirates Post Office Construction",
    description:
      "Civil works and building construction for Emirates Post Office facilities.",
    fullDescription:
      "Al Ausus executed the full civil works and building construction of the Emirates Post Office complex, covering architectural design, MEP coordination, and structural delivery. The project enhanced postal service infrastructure with modern and durable facilities.",
    category: "Al Ausus",
    location: "Al Ain – Al Amera-Alhayar-Al Qoua-AlWagan",
    year: "2019",
    thumbnail: "/projectPage/alAusus/emiratesHero.webp",
    heroImage: "/projectPage/alAusus/emiratesHero.webp",
    gallery: [
      "/projectPage/alAusus/emiratesG1.webp",
      "/projectPage/alAusus/emiratesG2.webp",
      "/projectPage/alAusus/emiratesG3.webp",
    ],
    duration: "16 months",
    size: "12,000 sq m",
    client: "Emirates Post",
    budget: "$12M+",
    services: ["Civil Works", "Structural Engineering", "Project Management"],
    features: [
      "Modern postal facilities",
      "High-quality building construction",
      "Integrated MEP systems",
    ],
    challenges:
      "The challenge was constructing across multiple sites simultaneously, which required strict scheduling and logistics management.",
  },
  {
    id: "8",
    slug: "al-ain-club-restaurants",
    title: "Al Ain Club – Restaurants",
    description:
      "Construction of modern restaurants within the Al Ain sports club facilities.",
    fullDescription:
      "Al Ausus carried out full civil works for the restaurant complexes inside Al Ain Club, providing durable infrastructure and quality finishes suited for high footfall hospitality spaces.",
    category: "Al Ausus",
    location: "Al Ain – Al Sanaiya",
    year: "2020",
    thumbnail: "/projectPage/alAusus/alAinHero.jpeg",
    heroImage: "/projectPage/alAusus/alAinHero.jpeg",
    gallery: [
      "/projectPage/alAusus/alAinG1.webp",
      "/projectPage/alAusus/alAinG2.webp",
      "/projectPage/alAusus/alAinG3.webp",
    ],
    duration: "10 months",
    size: "3,500 sq m",
    client: "Al Ain Sports Club",
    budget: "$4M+",
    services: ["Civil Works", "Fit-out"],
    features: [
      "High-quality dining facilities",
      "Structural construction",
      "Modern finishes",
    ],
    challenges:
      "Strict deadlines were imposed to complete the project before a sports season opening event, requiring efficient resource allocation.",
  },
  {
    id: "9",
    slug: "al-ain-dar-zayed-cultural-house",
    title: "Cultural House – Al Ain Dar Zayed",
    description:
      "Civil and electromechanical works for a landmark Cultural House project in Al Ain.",
    fullDescription:
      "Al Ausus executed complete civil construction and electromechanical installations for the Cultural House in Al Ain Dar Zayed. The project included structural works, HVAC, electrical systems, and finishing tailored to cultural and community usage.",
    category: "Al Ausus",
    location: "Al Ain – Dar Zayed",
    year: "2020",
    thumbnail: "/projectPage/alAusus/culturalHero.jpeg",
    heroImage: "/projectPage/alAusus/culturalHero.jpeg",
    gallery: [
      "/projectPage/alAusus/culturalG1.webp",
      "/projectPage/alAusus/culturalG2.webp",
      "/projectPage/alAusus/culturalG3.webp",
    ],
    duration: "14 months",
    size: "8,000 sq m",
    client: "Government of Al Ain",
    budget: "$6M+",
    services: ["Civil Works", "Electromechanical Installations"],
    features: [
      "Modern cultural and community facilities",
      "Integrated HVAC and electrical systems",
      "Durable construction for high footfall",
    ],
    challenges:
      "The project required careful alignment with cultural guidelines and delivering within tight deadlines to coincide with public events.",
  },
  {
    id: "10",
    title: "University of Sharjah",
    description:
      "Construction works for academic facilities at the University of Sharjah, delivering high-quality structural, finishing, and MEP works to support modern education infrastructure.",
    fullDescription:
      "",
    category: "Al Ausus",
    location: "Sharjah, UAE",
    year: "2019",
    thumbnail: "/aaProjects/university.webp",
    heroImage: "/aaProjects/university.webp",
    gallery: [],
    duration: "",
    size: "",
    client: "",
    budget: "$6M+",
    services: [],
    features: [],
    challenges:
      "",
  },
  {
    id: "11",
    title: "Al Dhafra Private Schools",
    description:
      "General contracting and civil works for Al Dhafra Private Schools, including classrooms, administrative blocks, and supporting facilities to create a safe and functional learning environment.",
    fullDescription:
      "",
    category: "Al Ausus",
    location: "Abu Dhabi, UAE",
    year: "2020",
    thumbnail: "/aaProjects/aldhaher.webp",
    heroImage: "/aaProjects/aldhaher.webp",
    gallery: [],
    duration: "",
    size: "",
    client: "",
    budget: "$6M+",
    services: [],
    features: [],
    challenges:
      "",
  },
  {
    id: "12",
    title: "Al Markhaniya Center",
    description:
      "Execution of construction and finishing works at Al Markhaniya Center, ensuring durable structures and high-quality finishes for government and public use.",
    fullDescription:
      "",
    category: "Al Ausus",
    location: "Al Ain, UAE",
    year: "2018",
    thumbnail: "/aaProjects/almarkhaniya.png",
    heroImage: "/aaProjects/almarkhaniya.png",
    gallery: [],
    duration: "",
    size: "",
    client: "",
    budget: "$6M+",
    services: [],
    features: [],
    challenges:
      "",
  },
  {
    id: "13",
    title: "Al Ain Residential Villa",
    description:
      "Execution of construction and finishing works at Al Markhaniya Center, ensuring durable structures and high-quality finishes for government and public use.",
    fullDescription:
      "",
    category: "Al Ausus",
    location: "Al Ain, UAE",
    year: "2021",
    thumbnail: "/aaProjects/alain.png",
    heroImage: "/aaProjects/alain.png",
    gallery: [],
    duration: "",
    size: "",
    client: "",
    budget: "$6M+",
    services: [],
    features: [],
    challenges:
      "",
  },
];
