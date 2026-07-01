import {
  Award,
  Fan,
  Zap,
  UsersRound,
  WholeWord,
  Handshake,
  Thermometer,
  Store,
  Clock,
  Star,
  ShieldHalf,
  Leaf,
  Phone,
  Mail,
  Map,
  Tag,
  Bubbles,
  SoapDispenserDroplet,
  WashingMachine,
  Heart,
  Van,
  MapPin,
  Headset,
  MessagesSquare,
  MessageCircleDashed,
  BadgeQuestionMark,
} from "lucide-react";

export const chooseNeatClean = [
  {
    icon: Clock,
    heading: "24 - Hour Service",
    detail:
      "Quick turnaround with same-day pickup and next-day delivery options.",
  },
  {
    icon: ShieldHalf,
    heading: "Quality Guarantee",
    detail: "100% satisfaction guarantee with professional cleaning standards.",
  },
  {
    icon: Leaf,
    heading: "Eco-Friendly",
    detail: "Environmentally conscious cleaning with biodegradable detergents.",
  },
  {
    icon: Phone,
    heading: "24/7 Support",
    detail: "Round-the-clock customer support for all your laundry needs.",
  },
];

export const howItWorks = [
  {
    topheading: 1,
    heading: "24 - Hour Service",
    detail:
      "Quick turnaround with same-day pickup and next-day delivery options.",
  },
  {
    topheading: 2,
    heading: "Quality Guarantee",
    detail: "100% satisfaction guarantee with professional cleaning standards.",
  },
  {
    topheading: 3,
    heading: "Eco-Friendly",
    detail: "Environmentally conscious cleaning with biodegradable detergents.",
  },
  {
    topheading: 4,
    heading: "24/7 Support",
    detail: "Round-the-clock customer support for all your laundry needs.",
  },
];

export const FooterUtils = [
  {
    heading: "Company",
    showPointer: true,
    subHeaders: [
      {
        detail: "About Us",
        path: "/about",
      },
      {
        detail: "Terms & Conditions",
        path: "/terms-cond",
      },
      {
        detail: "Privacy Policy",
        path: "privacy-policy",
      },
      {
        detail: "Contact Us",
        path: "/contact-us",
      },
    ],
  },
  {
    heading: "Our Service",
    showPointer: false,
    subHeaders: [
      {
        detail: "Dry Cleaning",
      },
      {
        detail: "Shoe Cleaning",
      },
      {
        detail: "Steam Ironing",
      },
      {
        detail: "Premium Laundry",
      },
    ],
  },
  {
    heading: "Our Presence",
    showPointer: false,
    subHeaders: [
      {
        icon: Map,
        detail: "Address: B-10, Ground Floor G-02, Sector-2, Noida, UP, 201301",
      },
      {
        icon: Mail,
        detail: "support@neatnclean.in",
      },
      {
        icon: Phone,
        detail: "+919654335152",
      },
    ],
  },
];

export const LaundryProcess = [
  {
    icon: Tag,
    heading: "Tagging",
    detail: "Clothes are tagged to avoid potential mix up.",
  },
  {
    icon: Bubbles,
    heading: "Treatment",
    detail: "Cuff & collar are treated using special detergents",
  },
  {
    icon: SoapDispenserDroplet,
    heading: "Pre-Wash",
    detail:
      "Clothes with extra soiling & oil stains are treated to a special enzyme soak before washing",
  },
  {
    icon: WashingMachine,
    heading: "Washing",
    detail: "Clothes are washed as per the load type",
  },
  {
    icon: Fan,
    heading: "Drying",
    detail: "Clothes are Air-dried in anti-bacterial stainless-steel dryers",
  },
  {
    icon: Thermometer,
    heading: "Ironing",
    detail:
      "High pressure vacuum steam iron is done for that perfect finishing",
  },
];

export const ServiceExcellence = [
  {
    heading: "99.8%",
    detail: "CUSTOMER SATISFACTION",
  },
  {
    heading: "24hrs",
    detail: "CUSTOMER SATISFACTION",
  },
  {
    heading: "30K+",
    detail: "CUSTOMER SATISFACTION",
  },
  {
    heading: "17",
    detail: "SERVICE AREAS",
  },
];

export const ServiceCategories = [
  {
    heading: "Basic Services",
    services: ["Wash & Fold", "Wash & Iron", "Steam Ironing"],
  },
  {
    heading: "Premium Services",
    services: ["Dry Cleaning", "Premium Laundry", "Specialty Cleaning"],
  },
  {
    heading: "Home Services",
    services: ["Sofa Cleaning", "Carpet Cleaning", "Household Items"],
  },
  {
    heading: "Specialty Services",
    services: ["Shoe Cleaning", "Leather Care", "Wedding Attire"],
  },
];

export const LaundryPricing = {
  1: [
    {
      type: "Shirt",
      price: "95",
    },
    {
      type: "T - Shirt",
      price: "95",
    },
    {
      type: "Trouser",
      price: "100",
    },
    {
      type: "Jeans",
      price: "100",
    },
    {
      type: "Cap",
      price: "50",
    },
    {
      type: "Tie",
      price: "60",
    },
    {
      type: "Sweater half sleeve",
      price: "150",
    },
    {
      type: "Sweater full sleeve",
      price: "250 - 300",
    },
    {
      type: "Sweater long",
      price: "300 - 400",
    },
    {
      type: "Sweat Shirt",
      price: "200 - 300",
    },
    {
      type: "Coat/Blazer",
      price: "300",
    },
    {
      type: "Coat Pant",
      price: "300 - 500",
    },
    {
      type: "3 Piece Suit",
      price: "500 - 700",
    },
    {
      type: "Overcoat",
      price: "399 - 699",
    },
    {
      type: "Jacket half",
      price: "200 - 250",
    },
    {
      type: "Jacket full",
      price: "250 - 400",
    },
    {
      type: "Kurta Payjama",
      price: "250 - 350",
    },
    {
      type: "Leather Jacket",
      price: "399 - 1000",
    },
    {
      type: "Sherwani",
      price: "499 - 1000",
    },
  ],
  2: [
    {
      type: "Top",
      price: "100 - 150",
    },
    {
      type: "Blouse",
      price: "70 - 150",
    },
    {
      type: "Skirt",
      price: "150 - 300",
    },
    {
      type: "Dupatta",
      price: "80 - 150",
    },
    {
      type: "Petticoat",
      price: "100 - 150",
    },
    {
      type: "Stole",
      price: "150 - 250",
    },
    {
      type: "Saree only chark",
      price: "70 - 100",
    },
    {
      type: "Saree with work",
      price: "400 - 800",
    },
    {
      type: "Shawl",
      price: "200 - 499",
    },
    {
      type: "Kurta Suit",
      price: "120 - 150",
    },
    {
      type: "Kurta Pajama 2pcs",
      price: "200 - 300",
    },
    {
      type: "Kurta With Work",
      price: "250 - 300",
    },
    {
      type: "Kurta Pajama Dupatta 3pcs",
      price: "250 - 499",
    },
    {
      type: "Dress",
      price: "200 - 300",
    },
    {
      type: "Long Dress",
      price: "300 - 500",
    },
    {
      type: "Coat",
      price: "250 - 350",
    },
    {
      type: "Over Coat",
      price: "300 - 350",
    },
    {
      type: "Long Coat",
      price: "300 - 350",
    },
    {
      type: "Jacket Half",
      price: "200 - 250",
    },

    {
      type: "Jacket Full Sleeve",
      price: "250 - 400",
    },

    {
      type: "Lehenga 1PCS",
      price: "300 - 500",
    },
    {
      type: "Lehenga 2PCS",
      price: "500 - 999",
    },
    {
      type: "Lehenga 3PCS",
      price: "799 - 1499",
    },
  ],
  3: [
    {
      type: "Pillow Cover",
      price: "50 - 150",
    },
    {
      type: "Bedsheet Single",
      price: "150 - 200",
    },
    {
      type: "Bedsheet Double",
      price: "200 - 300",
    },
    {
      type: "Blanket single",
      price: "300",
    },
    {
      type: "Blanket Double",
      price: "350 - 400",
    },
    {
      type: "Quilt single",
      price: "300 - 450",
    },
    {
      type: "Quilt Double",
      price: "400 - 500",
    },
    {
      type: "Bed Cover Single",
      price: "200",
    },
    {
      type: "Bed Cover Double",
      price: "300",
    },
    {
      type: "Curtain without lining per panel",
      price: "180",
    },
    {
      type: "Curtain  lining per panel",
      price: "250",
    },
    {
      type: "Curtain velvet with lining per panel",
      price: "350",
    },
    {
      type: "Curtain with embroidery with lining per panel",
      price: "350",
    },
    {
      type: "Cushion Cover",
      price: "70 - 150",
    },
    {
      type: "Sofa per seat fabric",
      price: "249",
    },
    {
      type: "Sofa per seat Swede/leather",
      price: "400",
    },
    {
      type: "Rugs mat",
      price: "150 - 200",
    },
    {
      type: "Rugs mat heavy",
      price: "200 - 300",
    },
    {
      type: "Carpet per square feet",
      price: "50 - 150",
    },
  ],
  4: [
    {
      type: "Shoes/Sandal drycleaning",
      price: "200 - 499",
    },
    {
      type: "Bag drycleaning",
      price: "250 - 400",
    },
    {
      type: "Car Cleaning",
      price: "700 - 1499",
    },
    {
      type: "Steam iron per piece (starting)",
      price: "50",
    },
    {
      type: "Wash & iron 15kg (3-time pickup & drop free)",
      price: "1399",
    },
    {
      type: "Premium laundry per kg",
      price: "149",
    },
    {
      type: "Premium laundry per piece",
      price: "51",
    },
    {
      type: "Wash & iron (per kg)",
      price: "110",
    },
    {
      type: "Wash & fold (per kg)",
      price: "80",
    },
    {
      type: "Wash & iron 30kg (5-time pickup & drop free)",
      price: "2799",
    },
  ],
};

export const categories = [
  {
    id: 1,
    name: "Men",
  },
  {
    id: 2,
    name: "Women",
  },
  {
    id: 3,
    name: "Household",
  },
  {
    id: 4,
    name: "Others",
  },
];

export const aboutUsDetails = [
  {
    icon: Store,
    heading: "17+ Stores",
    detail: "Growing nationwide with reliable, local service.",
  },
  {
    icon: UsersRound,
    heading: "10,000+ Customers",
    detail: "Trusted by households and professionals alike.",
  },
  {
    icon: Clock,
    heading: "24h Turnaround",
    detail: "Fast delivery without compromising care.",
  },
];

export const whyWeStand = [
  {
    icon: ShieldHalf,
    heading: "Quality & Care",
    detail:
      "Fabric-safe methods, expert handling, and rigorous checks for every order.",
  },
  {
    icon: Zap,
    heading: "Speed & Reliability",
    detail:
      "Consistent, on-time delivery with clear communication at every step.",
  },
  {
    icon: Leaf,
    heading: "Eco Mindset",
    detail: "Lower-impact solvents and processes designed to reduce waste.",
  },
];

export const AwardDetails = [
  {
    icon: Award,
    heading: "Best Laundry Service 2025",
    detail: "Recognized by Indian Business Excellence Awards",
  },
  {
    icon: Star,
    heading: "Customer Choice Award",
    detail: "Highest rated laundry service in customer satisfaction",
  },
  {
    icon: Handshake,
    heading: "Franchise Excellence",
    detail: "Best franchise opportunity in home services category",
  },
  {
    icon: WholeWord,
    heading: "Green Business Award",
    detail: "Recognized for sustainable and eco-friendly practices",
  },
];

export const CommunityDetails = [
  {
    icon: Heart,
    heading: "Community Support",
    detail:
      "Supporting local communities through employment opportunities and sustainable practices.",
  },
  {
    icon: Leaf,
    heading: "Enviromental Care",
    detail:
      "Reducing water consumption by 40% and using biodegradable detergents.",
  },
  {
    icon: Van,
    heading: "Accessibility",
    detail: "Making quality laundry services accessible to all income groups.",
  },
];

export const showContactDetails = [
  {
    icon: Phone,
    heading: "Call Us",
    detail: "+91 0000000000",
  },
  {
    icon: MessageCircleDashed,
    heading: "WhatsApp",
    detail: "+91 0000000000",
  },
  {
    icon: Mail,
    heading: "Email",
    detail: "support@ecorinse.in",
  },
  {
    icon: MapPin,
    heading: "Visit Us",
    detail:
      "H-16/431, Sangam Vihar, Hamdard Nagar, South Delhi, New Delhi, Delhi, India, 110062",
  },
];

export const askedQuestions = [
  {
    heading: "How do I schedule a pickup?",
    detail:
      "Simply call us or use our online booking system. We offer same-day pickup in most areas.",
  },
  {
    heading: "What are your service hours?",
    detail:
      "We operate 24/7 for pickup and delivery. Our cleaning facilities run from 6 AM to 10 PM.",
  },
  {
    heading: "Do you offer dry cleaning?",
    detail:
      "Yes, we provide professional dry cleaning services for delicate garments and formal wear.",
  },
  {
    heading: "What if I'm not satisfied?",
    detail:
      "We offer 100% satisfaction guarantee. If you're not happy, we'll re-clean or refund your money.",
  },
  {
    heading: "How do I track my order?",
    detail:
      "You'll receive SMS updates throughout the process, from pickup to delivery.",
  },
  {
    heading: "Do you clean household items?",
    detail:
      "Yes, we clean curtains, carpets, sofa covers, and other household textiles.",
  },
];

export const supportHours = [
  {
    icon: Clock,
    heading: "Customer Support",
    detail: "24/7 Available",
  },
  {
    icon: Headset,
    heading: "Technical Support",
    detail: "6 AM - 10 PM",
  },
  {
    icon: MessagesSquare,
    heading: "Live Chat",
    detail: "8 AM - 8 PM",
  },
];

export const waysToReachUs = [
  {
    icon: Phone,
    heading: "Phone Support",
    detail: "8 AM - 8 PM",
    path: "/details",
    linkDetails: "+91 0000000000",
  },
  {
    icon: MessagesSquare,
    heading: "WhatsApp",
    detail: "Quick messaging for non-urgent queries and updates.",
    path: "/details",
    linkDetails: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    heading: "Email Support",
    detail: "Detailed queries and documentation via email.",
    path: "/details",
    linkDetails: "support@ecorinse.in",
  },
  {
    icon: BadgeQuestionMark,
    heading: "Help Center",
    detail: "Self-service options and detailed guides.",
    path: "/details",
    linkDetails: "Visit Help Center",
  },
];
