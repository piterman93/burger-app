import { MenuItemProps } from "../components/UI/MenuItem";

import ostry from "../images/ostry.jpg";
import cheeser from "../images/cheeser.jpg";
import bbq from "../images/bbq.jpg";
import bacon from "../images/bacon.jpg";

// import img1 from "../images/gallery/1.jpg";
// import img2 from "../images/gallery/2.jpg";
// import img3 from "../images/gallery/3.jpg";
// import img4 from "../images/gallery/4.jpg";
// import img5 from "../images/gallery/5.jpg";
// import img6 from "../images/gallery/6.jpg";
// import img7 from "../images/gallery/7.jpg";
// import img8 from "../images/gallery/8.jpg";
// import img9 from "../images/gallery/9.jpg";
// import img10 from "../images/gallery/10.jpg";
// import img11 from "../images/gallery/11.jpg";
// import img12 from "../images/gallery/12.jpg";
// import img13 from "../images/gallery/13.jpg";
// import img14 from "../images/gallery/14.jpg";
// import img15 from "../images/gallery/15.jpg";
// import img16 from "../images/gallery/16.jpg";
// import img17 from "../images/gallery/17.jpg";
// import img18 from "../images/gallery/18.jpg";
// import img19 from "../images/gallery/19.jpg";
// import img20 from "../images/gallery/20.jpg";
// import img21 from "../images/gallery/21.jpg";
// import img22 from "../images/gallery/22.jpg";
// import img23 from "../images/gallery/23.jpg";
// import img24 from "../images/gallery/24.jpg";
// import img25 from "../images/gallery/25.jpg";
// import img26 from "../images/gallery/26.jpg";
// import img27 from "../images/gallery/27.jpg";
// import img28 from "../images/gallery/28.jpg";
// import img29 from "../images/gallery/29.jpg";
// import img30 from "../images/gallery/30.jpg";
// import img31 from "../images/gallery/31.jpg";
// import img32 from "../images/gallery/32.jpg";
// import img33 from "../images/gallery/33.jpg";
// import img34 from "../images/gallery/34.jpg";
// import img35 from "../images/gallery/35.jpg";
// import img36 from "../images/gallery/36.jpg";
// import img37 from "../images/gallery/37.jpg";
// import img38 from "../images/gallery/38.jpg";
// import img39 from "../images/gallery/39.jpg";
// import img40 from "../images/gallery/40.jpg";
// import img41 from "../images/gallery/41.jpg";
// import img42 from "../images/gallery/42.jpg";
// import img43 from "../images/gallery/43.jpg";
// import img44 from "../images/gallery/44.jpg";
// import img45 from "../images/gallery/45.jpg";
// import img46 from "../images/gallery/46.jpg";
// import img47 from "../images/gallery/47.jpg";
// import img48 from "../images/gallery/48.jpg";
// import img49 from "../images/gallery/49.jpg";
// import img50 from "../images/gallery/50.jpg";
// import img51 from "../images/gallery/51.jpg";
// import img52 from "../images/gallery/52.jpg";
// import img53 from "../images/gallery/53.jpg";
// import img54 from "../images/gallery/54.jpg";
// import img55 from "../images/gallery/55.jpg";
// import img56 from "../images/gallery/56.jpg";
// import img57 from "../images/gallery/57.jpg";
// import img58 from "../images/gallery/58.jpg";
// import img59 from "../images/gallery/59.jpg";
// import img60 from "../images/gallery/60.jpg";
// import img61 from "../images/gallery/61.jpg";
// import img62 from "../images/gallery/62.jpg";
// import img63 from "../images/gallery/63.jpg";
// import img64 from "../images/gallery/64.jpg";
// import img65 from "../images/gallery/65.jpg";
// import img66 from "../images/gallery/66.jpg";
// import img67 from "../images/gallery/67.jpg";
// import img68 from "../images/gallery/68.jpg";
// import img69 from "../images/gallery/69.jpg";
// import img70 from "../images/gallery/70.jpg";
// import img71 from "../images/gallery/71.jpg";
// import img72 from "../images/gallery/72.jpg";
// import img73 from "../images/gallery/73.jpg";
// import img74 from "../images/gallery/74.jpg";
// import img75 from "../images/gallery/75.jpg";
// import img76 from "../images/gallery/76.jpg";
// import img77 from "../images/gallery/77.jpg";
// import img78 from "../images/gallery/78.jpg";
// import img79 from "../images/gallery/79.jpg";
// import img80 from "../images/gallery/80.jpg";
// import img81 from "../images/gallery/81.jpg";

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

export interface weekDay {
  id: number;
  title: string;
  hours: string;
}

export const weekDays: weekDay[] = [
  { id: 1, title: "Poniedziałek: ", hours: "10:00 - 22:00" },
  { id: 2, title: "Wtorek: ", hours: "10:00 - 22:00" },
  { id: 3, title: "Środa: ", hours: "10:00 - 22:00" },
  { id: 4, title: "Czwartek: ", hours: "10:00 - 22:00" },
  { id: 5, title: "Piątek: ", hours: "10:00 - 22:00" },
  { id: 6, title: "Sobota: ", hours: "10:00 - 22:00" },
  { id: 7, title: "Niedziela: ", hours: "14:00 - 22:00" },
];

export interface galleryItem {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: galleryItem[] = [
  {
    id: 1,
    src: require("../images/gallery/1.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 2,
    src: require("../images/gallery/2.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 3,
    src: require("../images/gallery/3.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 4,
    src: require("../images/gallery/4.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 5,
    src: require("../images/gallery/5.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 6,
    src: require("../images/gallery/6.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 7,
    src: require("../images/gallery/7.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 8,
    src: require("../images/gallery/8.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 9,
    src: require("../images/gallery/9.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 10,
    src: require("../images/gallery/10.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 11,
    src: require("../images/gallery/11.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 12,
    src: require("../images/gallery/12.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 13,
    src: require("../images/gallery/13.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 14,
    src: require("../images/gallery/14.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 15,
    src: require("../images/gallery/15.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 16,
    src: require("../images/gallery/16.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 17,
    src: require("../images/gallery/17.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 18,
    src: require("../images/gallery/18.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 19,
    src: require("../images/gallery/19.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 20,
    src: require("../images/gallery/20.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 21,
    src: require("../images/gallery/21.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 22,
    src: require("../images/gallery/22.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 23,
    src: require("../images/gallery/23.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 24,
    src: require("../images/gallery/24.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 25,
    src: require("../images/gallery/25.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 26,
    src: require("../images/gallery/26.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 27,
    src: require("../images/gallery/27.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 28,
    src: require("../images/gallery/28.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 29,
    src: require("../images/gallery/29.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 30,
    src: require("../images/gallery/30.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 31,
    src: require("../images/gallery/31.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 32,
    src: require("../images/gallery/32.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 33,
    src: require("../images/gallery/33.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 34,
    src: require("../images/gallery/34.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 35,
    src: require("../images/gallery/35.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 36,
    src: require("../images/gallery/36.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 37,
    src: require("../images/gallery/37.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 38,
    src: require("../images/gallery/38.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 39,
    src: require("../images/gallery/39.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 40,
    src: require("../images/gallery/40.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 41,
    src: require("../images/gallery/41.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 42,
    src: require("../images/gallery/42.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 43,
    src: require("../images/gallery/43.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 44,
    src: require("../images/gallery/44.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 45,
    src: require("../images/gallery/45.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 46,
    src: require("../images/gallery/46.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 47,
    src: require("../images/gallery/47.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 48,
    src: require("../images/gallery/48.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 49,
    src: require("../images/gallery/49.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 50,
    src: require("../images/gallery/50.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 51,
    src: require("../images/gallery/51.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 52,
    src: require("../images/gallery/52.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 53,
    src: require("../images/gallery/53.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 54,
    src: require("../images/gallery/54.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 55,
    src: require("../images/gallery/55.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 56,
    src: require("../images/gallery/56.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 57,
    src: require("../images/gallery/57.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 58,
    src: require("../images/gallery/58.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 59,
    src: require("../images/gallery/59.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 60,
    src: require("../images/gallery/60.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 61,
    src: require("../images/gallery/61.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 62,
    src: require("../images/gallery/62.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 63,
    src: require("../images/gallery/63.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 64,
    src: require("../images/gallery/64.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 65,
    src: require("../images/gallery/65.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 66,
    src: require("../images/gallery/66.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 67,
    src: require("../images/gallery/67.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 68,
    src: require("../images/gallery/68.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 69,
    src: require("../images/gallery/69.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 70,
    src: require("../images/gallery/70.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 71,
    src: require("../images/gallery/71.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 72,
    src: require("../images/gallery/72.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 73,
    src: require("../images/gallery/73.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 74,
    src: require("../images/gallery/74.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 75,
    src: require("../images/gallery/75.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 76,
    src: require("../images/gallery/76.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 77,
    src: require("../images/gallery/77.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 78,
    src: require("../images/gallery/78.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 79,
    src: require("../images/gallery/79.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 80,
    src: require("../images/gallery/80.jpg").default,
    alt: "Burger Bar Gallery",
  },
  {
    id: 81,
    src: require("../images/gallery/81.jpg").default,
    alt: "Burger Bar Gallery",
  },
];

export const containerVariants = {
  hidden: {
    delay: 1,
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 1.1,
      duration: 1,
      type: "spring",
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
      type: "tween",
    },
  },
};
