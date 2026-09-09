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
    isNaviagte: true,
    subHeaders: [
      {
        detail: "About Us",
        path: "/about-us",
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
    showPointer: true,
    isNaviagte: true,
    subHeaders: [
      {
        detail: "Dry Cleaning",
        path: "/our-services#laundryDetails",
      },
      {
        detail: "Shoe Cleaning",
        path: "/our-services#laundryDetails",
      },
      {
        detail: "Steam Ironing",
        path: "/our-services#laundryDetails",
      },
      {
        detail: "Premium Laundry",
        path: "/our-services#laundryDetails",
      },
    ],
  },
  {
    heading: "Our Presence",
    showPointer: true,
    isNaviagte: false,
    subHeaders: [
      {
        icon: Map,
        detail:
          "Shop No. 02, Ground Floor, K V G Complex. 9, 3rd Main, Thambu Chetty Palya Main Rd, Bengaluru, Karnataka 560016",
        path: "https://maps.app.goo.gl/zvRpU81sUXDQw56p7",
      },
      {
        icon: Mail,
        detail: "ecorinselaundry@gmail.com",
        path: "mailto:ecorinselaundry@gmail.com",
      },
      {
        icon: Phone,
        detail: "+919900388956",
        path: "tel:+919900388956",
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
    detail: "+91 9900388956",
    path: "tel:919900388956",
  },
  {
    icon: MessageCircleDashed,
    heading: "WhatsApp",
    detail: "+91 9900388956",
    path: "https://wa.me/919900388956?text=Hi%20EcoRinse%20Laundry,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
  },
  {
    icon: Mail,
    heading: "Email",
    detail: "ecorinselaundry@gmail.com",
    path: "mailto:ecorinselaundry@gmail.com",
  },
  {
    icon: MapPin,
    heading: "Visit Us",
    detail:
      "Shop No. 02, Ground Floor, K V G Complex. 9, 3rd Main, Thambu Chetty Palya Main Rd, Bengaluru, Karnataka 560016",
    path: "https://maps.app.goo.gl/zvRpU81sUXDQw56p7",
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
    path: "tel:9900388956",
    linkDetails: "+91 9900388956",
  },
  {
    icon: MessagesSquare,
    heading: "WhatsApp",
    detail: "Quick messaging for non-urgent queries and updates.",
    path: "https://wa.me/919900388956?text=Hi%20EcoRinse%20Laundry,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    linkDetails: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    heading: "Email Support",
    detail: "Detailed queries and documentation via email.",
    path: "mailto:ecorinselaundry@gmail.com",
    linkDetails: "ecorinselaundry@gmail.com",
  },
  {
    icon: BadgeQuestionMark,
    heading: "Help Center",
    detail: "Self-service options and detailed guides.",
    path: "mailto:ecorinselaundry@gmail.com",
    linkDetails: "Visit Help Center",
  },
];

export const itemCategories = {
  1: {
    categoryName: "Laundry",
    categoryDetail: [
      {
        categoryDetailName: "Regular",
        items: [
          { id: 1, item_name: "Wash & Fold", unit_price: 80, unit: "kg" },
          { id: 2, item_name: "Wash and Stream Iron", unit_price: 100, unit: "kg" },
          { id: 37, item_name: "Stream Iron", unit_price: 12, unit: "piece" },
        ],
      },
    ],
  },
  2: {
    categoryName: "Dry Clean",
    categoryDetail: [
      {
        categoryDetailName: "Men",
        items: [
          { id: 3, item_name: "Shirt", unit_price: 100, unit: "piece" },
          { id: 4, item_name: "Pant", unit_price: 110, unit: "piece" },
          { id: 5, item_name: "T - Shirt", unit_price: 100, unit: "piece" },
          { id: 6, item_name: "Shorts", unit_price: 70, unit: "piece" },
          { id: 7, item_name: "Kurta", unit_price: 80, unit: "piece" },
          { id: 9, item_name: "Pyjama", unit_price: 80, unit: "piece" },
          { id: 10, item_name: "Jacket", unit_price: 350, unit: "piece" },
          { id: 11, item_name: "Leather Jacket", unit_price: 450, unit: "piece" },
          { id: 12, item_name: "Coat", unit_price: 250, unit: "piece" },
        ],
      },
      {
        categoryDetailName: "Women",
        items: [
          { id: 13, item_name: "Plazo Plain", unit_price: 100, unit: "piece" },
          { id: 14, item_name: "Kurta Plain", unit_price: 100, unit: "piece" },
          { id: 15, item_name: "Saree", unit_price: 200, unit: "piece" },
          { id: 16, item_name: "Blouse", unit_price: 60, unit: "piece" },
          { id: 17, item_name: "Dress Plain", unit_price: 180, unit: "piece" },
          { id: 18, item_name: "Duppatta", unit_price: 60, unit: "piece" },
          { id: 19, item_name: "Lehenga Plain", unit_price: 300, unit: "piece" },
          { id: 20, item_name: "Skirt Short", unit_price: 100, unit: "piece" },
          { id: 21, item_name: "Petticoat", unit_price: 70, unit: "piece" },
          { id: 22, item_name: "Top Plain", unit_price: 100, unit: "piece" },
          { id: 37, item_name: "Shawl", unit_price: 170, unit: "piece" },
        ],
      },
      {
        categoryDetailName: "Household",
        items: [
          { id: 23, item_name: "Blanket Single", unit_price: 300, unit: "piece" },
          { id: 24, item_name: "Blanket Double", unit_price: 450, unit: "piece" },
          {
            id: 25,
            item_name: "Curtain Per Pleat ( 4 Feet)",
            unit_price: 40,
            unit: "piece",
          },
          {
            id: 26,
            item_name: "Curtain per Pleat ( 6 Feet)",
            unit_price: 45,
            unit: "piece",
          },
          {
            id: 27,
            item_name: "Carpet ( Per Square Feet) ",
            unit_price: 55,
            unit: "piece",
          },
          { id: 28, item_name: "Bedsheet Single", unit_price: 150, unit: "piece" },
          { id: 29, item_name: "Pillow Cover", unit_price: 60, unit: "piece" },
          { id: 30, item_name: "Bath Towel", unit_price: 60, unit: "piece" },
          { id: 31, item_name: "Quilt Single", unit_price: 400, unit: "piece" },
          { id: 32, item_name: "Quilt Double", unit_price: 500, unit: "piece" },
        ],
      },
    ],
  },
  3: {
    categoryName: "Others",
    categoryDetail: [
      {
        categoryDetailName: "Regular",
        items: [
          { id: 33, item_name: "Sport Shoes", unit_price: 300, unit: "piece" },
          { id: 34, item_name: "Leather Shoes", unit_price: 400, unit: "piece" },
          { id: 35, item_name: "Toys/Soft Shoes", unit_price: 150, unit: "piece" },
          { id: 36, item_name: "Suit Case", unit_price: 250, unit: "piece" },
        ],
      },
    ],
  },
};
