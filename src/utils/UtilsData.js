import { Clock } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Leaf } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Map } from "lucide-react";
import { Tag } from "lucide-react";
import { Bubbles } from "lucide-react";
import { SoapDispenserDroplet } from "lucide-react";
import { WashingMachine } from "lucide-react";
import { Fan } from "lucide-react";
import { Thermometer } from "lucide-react";

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
