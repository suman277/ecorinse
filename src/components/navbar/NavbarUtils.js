import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export const NavbarDetails = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Our Services",
    path: "/our-services",
  },
  {
    title: "Contact us",
    path: "/contact-us",
  },
  // {
  //   title: "membeship",
  //   path: "/contact-us",
  // },
];

export const labelDetails = [
  {
    hideOnMobile: true,
    icon: MapPin,
    detail:
      "Shop No. 02, Ground Floor, K V G Complex. 9, 3rd Main, Thambu Chetty Palya Main Rd, Bengaluru, Karnataka 560016",
    path: "https://maps.app.goo.gl/zvRpU81sUXDQw56p7",
  },
  {
    icon: Phone,
    detail: "9900388956",
    path: "tel:+919900388956",
  },
  {
    icon: Mail,
    detail: "ecorinselaundry@gmail.com",
    path: "mailto:ecorinselaundry@gmail.com",
  },
];
