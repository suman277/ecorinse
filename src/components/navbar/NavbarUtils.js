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
    detail: "B-10, Ground Floor KVG Complex, Raghavendra Circle, T C Palya, Bangalore, 560016",
  },
  {
    icon: Phone,
    detail: "9900388956",
  },
  {
    icon: Mail,
    detail: "ecorinselaundry@gmail.com",
  },
];
