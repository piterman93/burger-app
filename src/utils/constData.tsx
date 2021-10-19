import { MenuItemProps } from "../components/UI/MenuItem";

import ostry from "../images/ostry.jpg";
import cheeser from "../images/cheeser.jpg";
import bbq from "../images/bbq.jpg";
import bacon from "../images/bacon.jpg";

export interface navItemData {
  id: number;
  title: string;
  route: string;
}

export const NavigationData: navItemData[] = [
  { id: 1, title: "START", route: "/home" },
  { id: 2, title: "O NAS", route: "/about-us" },
  { id: 3, title: "MENU", route: "/menu" },
  { id: 4, title: "GALERIA", route: "/gallery" },
  { id: 5, title: "KONTAKT", route: "/contact" },
];

export const AboutMenuItemsData: MenuItemProps[] = [
  {
    id: 1,
    src: cheeser,
    alt: "burger bar menu",
    title: "CHEESER",
    description:
      "(wołowina, 2x cheddar, sałata, ogórek, czerwona cebula, pomidor, ketchup, sos majonezowo piklowy)",
    priceSmall: "14 zł",
    priceBig: "16 zł",
    priceSet: "20/22 zł",
  },
  {
    id: 2,
    src: bacon,
    alt: "burger bar menu",
    title: "BACON",
    description:
      "(wołowina, 2x cheddar, bekon, sałata, ogórek, czerwona cebula, pomidor, ketchup, sos majonezowo piklowy)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
  {
    id: 3,
    src: ostry,
    alt: "burger bar menu",
    title: "OSTRRRY",
    description:
      "(wołowina, pikantne salami, cheddar, sałata, papryczki jalapeno, czerwona cebula, pomidor, sos sriracha, sos chiptoe mayo)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
  {
    id: 4,
    src: bbq,
    alt: "burger bar menu",
    title: "BBQ",
    description:
      "(wołowina, 2x cheddar, bekon, sałata, pieczarki, krążki cebulowe, pomidor, sos chiptoe mayo, sos BBQ)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
];
