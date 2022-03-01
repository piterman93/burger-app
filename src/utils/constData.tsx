import { BurgerMenuItemProps } from "../components/UI/BurgerMenuItem";
import { AboutFooterItemProps } from "../components/pages/About/AboutFooterItem";

export interface navItemData {
  id: number;
  title: string;
  route: string;
}

export const NavigationData: navItemData[] = [
  { id: 1, title: "ST67", route: "/home" },
  { id: 2, title: "ST6", route: "/about-us" },
  { id: 3, title: "ST68", route: "/menu" },
  { id: 4, title: "ST19", route: "/gallery" },
  { id: 5, title: "ST10", route: "/contact" },
];

export const AboutMenuItemsData: BurgerMenuItemProps[] = [
  {
    id: 1,
    src: require("../images/gallery/46.jpg").default,
    alt: "burger bar menu",
    title: "CHEESER",
    description: "ST44",
    priceSmall: "15 zł",
    priceBig: "18 zł",
    priceSet: "22/25 zł",
    childrenTitle: "",
  },
  {
    id: 2,
    src: require("../images/gallery/45.jpg").default,
    alt: "burger bar menu",
    title: "BACON",
    description: "ST45",
    priceSmall: "17 zł",
    priceBig: "20 zł",
    priceSet: "24/27 zł",
    childrenTitle: "",
  },
  {
    id: 3,
    src: require("../images/gallery/44.jpg").default,
    alt: "burger bar menu",
    title: "OSTRRRY",
    description: "ST46",
    priceSmall: "17 zł",
    priceBig: "20 zł",
    priceSet: "24/27 zł",
    childrenTitle: "",
  },
  {
    id: 4,
    src: require("../images/gallery/42.jpg").default,
    alt: "burger bar menu",
    title: "BBQ",
    description: "ST47",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
];

export const MenuBurgerItemsData: BurgerMenuItemProps[] = [
  {
    id: 1,
    src: require("../images/gallery/46.jpg").default,
    alt: "burger bar menu",
    title: "CHEESER",
    description: "ST44",
    priceSmall: "15 zł",
    priceBig: "18 zł",
    priceSet: "22/25 zł",
    childrenTitle: "",
  },
  {
    id: 2,
    src: require("../images/gallery/45.jpg").default,
    alt: "burger bar menu",
    title: "BACON",
    description: "ST45",
    priceSmall: "17 zł",
    priceBig: "20 zł",
    priceSet: "24/27 zł",
    childrenTitle: "",
  },
  {
    id: 3,
    src: require("../images/gallery/44.jpg").default,
    alt: "burger bar menu",
    title: "OSTRRRY",
    description: "ST46",
    priceSmall: "17 zł",
    priceBig: "20 zł",
    priceSet: "24/27 zł",
    childrenTitle: "",
  },
  {
    id: 4,
    src: require("../images/gallery/42.jpg").default,
    alt: "burger bar menu",
    title: "BBQ",
    description: "ST47",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 5,
    src: require("../images/gallery/41.jpg").default,
    alt: "burger bar menu",
    title: "GÓRAL",
    description: "ST48",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 6,
    src: require("../images/gallery/40.jpg").default,
    alt: "burger bar menu",
    title: "NACHO",
    description: "ST49",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 7,
    src: require("../images/gallery/39.jpg").default,
    alt: "burger bar menu",
    title: "AMERICANO",
    description: "ST50",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 8,
    src: require("../images/gallery/38.jpg").default,
    alt: "burger bar menu",
    title: "ANGLIK",
    description: "ST51",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 9,
    src: require("../images/gallery/37.jpg").default,
    alt: "burger bar menu",
    title: "DOUBLE",
    description: "ST52",
    priceSmall: "23 zł",
    priceBig: "28 zł",
    priceSet: "30/35 zł",
    childrenTitle: "",
  },
  {
    id: 10,
    src: require("../images/gallery/36.jpg").default,
    alt: "burger bar menu",
    title: "KOKO",
    description: "ST53",
    priceSmall: "17 zł",
    priceBig: "20 zł",
    priceSet: "24/27 zł",
    childrenTitle: "",
  },
  {
    id: 11,
    src: require("../images/gallery/35.jpg").default,
    alt: "burger bar menu",
    title: "VEGE SER",
    description: "ST54",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 12,
    src: require("../images/gallery/34.jpg").default,
    alt: "burger bar menu",
    title: "VEGE BURAK",
    description: "ST55",
    priceSmall: "19 zł",
    priceBig: "22 zł",
    priceSet: "26/29 zł",
    childrenTitle: "",
  },
  {
    id: 13,
    src: require("../images/gallery/106.jpg").default,
    alt: "burger bar menu",
    title: "JACEK PLACEK",
    description: "ST121",
    priceSmall: "20 zł",
    priceBig: "22 zł",
    priceSet: "27/29 zł",
    childrenTitle: "",
  },
  {
    id: 14,
    src: require("../images/babycheeser.jpg").default,
    alt: "burger bar menu",
    title: "BABYCHEESER",
    description: "ST84",
    priceSmall: "12 zł",
    priceBig: "-",
    priceSet: "16 zł",
    childrenTitle: "ST120",
  },
];

export interface weekDay {
  id: number;
  title: string;
  hours: string;
}

export const weekDays: weekDay[] = [
  { id: 1, title: "ST37", hours: "10:00 - 22:00" },
  { id: 2, title: "ST38", hours: "10:00 - 22:00" },
  { id: 3, title: "ST39", hours: "10:00 - 22:00" },
  { id: 4, title: "ST40", hours: "10:00 - 22:00" },
  { id: 5, title: "ST41", hours: "10:00 - 22:00" },
  { id: 6, title: "ST42", hours: "10:00 - 22:00" },
  { id: 7, title: "ST43", hours: "14:00 - 22:00" },
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
    alt: "ST19",
  },
  {
    id: 2,
    src: require("../images/gallery/2.jpg").default,
    alt: "ST19",
  },
  {
    id: 3,
    src: require("../images/gallery/3.jpg").default,
    alt: "ST19",
  },
  {
    id: 4,
    src: require("../images/gallery/4.jpg").default,
    alt: "ST19",
  },
  {
    id: 5,
    src: require("../images/gallery/5.jpg").default,
    alt: "ST19",
  },
  {
    id: 6,
    src: require("../images/gallery/6.jpg").default,
    alt: "ST19",
  },
  {
    id: 7,
    src: require("../images/gallery/7.jpg").default,
    alt: "ST19",
  },
  {
    id: 8,
    src: require("../images/gallery/8.jpg").default,
    alt: "ST19",
  },
  {
    id: 9,
    src: require("../images/gallery/9.jpg").default,
    alt: "ST19",
  },
  {
    id: 10,
    src: require("../images/gallery/10.jpg").default,
    alt: "ST19",
  },
  {
    id: 11,
    src: require("../images/gallery/11.jpg").default,
    alt: "ST19",
  },
  {
    id: 12,
    src: require("../images/gallery/12.jpg").default,
    alt: "ST19",
  },
  {
    id: 13,
    src: require("../images/gallery/13.jpg").default,
    alt: "ST19",
  },
  {
    id: 14,
    src: require("../images/gallery/14.jpg").default,
    alt: "ST19",
  },
  {
    id: 15,
    src: require("../images/gallery/15.jpg").default,
    alt: "ST19",
  },
  {
    id: 16,
    src: require("../images/gallery/16.jpg").default,
    alt: "ST19",
  },
  {
    id: 17,
    src: require("../images/gallery/17.jpg").default,
    alt: "ST19",
  },
  {
    id: 18,
    src: require("../images/gallery/18.jpg").default,
    alt: "ST19",
  },
  {
    id: 19,
    src: require("../images/gallery/19.jpg").default,
    alt: "ST19",
  },
  {
    id: 20,
    src: require("../images/gallery/20.jpg").default,
    alt: "ST19",
  },
  {
    id: 21,
    src: require("../images/gallery/21.jpg").default,
    alt: "ST19",
  },
  {
    id: 22,
    src: require("../images/gallery/22.jpg").default,
    alt: "ST19",
  },
  {
    id: 23,
    src: require("../images/gallery/23.jpg").default,
    alt: "ST19",
  },
  {
    id: 24,
    src: require("../images/gallery/24.jpg").default,
    alt: "ST19",
  },
  {
    id: 25,
    src: require("../images/gallery/25.jpg").default,
    alt: "ST19",
  },
  {
    id: 26,
    src: require("../images/gallery/26.jpg").default,
    alt: "ST19",
  },
  {
    id: 27,
    src: require("../images/gallery/27.jpg").default,
    alt: "ST19",
  },
  {
    id: 28,
    src: require("../images/gallery/28.jpg").default,
    alt: "ST19",
  },
  {
    id: 29,
    src: require("../images/gallery/29.jpg").default,
    alt: "ST19",
  },
  {
    id: 30,
    src: require("../images/gallery/30.jpg").default,
    alt: "ST19",
  },
  {
    id: 31,
    src: require("../images/gallery/31.jpg").default,
    alt: "ST19",
  },
  {
    id: 32,
    src: require("../images/gallery/32.jpg").default,
    alt: "ST19",
  },
  {
    id: 33,
    src: require("../images/gallery/33.jpg").default,
    alt: "ST19",
  },
  {
    id: 34,
    src: require("../images/gallery/34.jpg").default,
    alt: "ST19",
  },
  {
    id: 35,
    src: require("../images/gallery/35.jpg").default,
    alt: "ST19",
  },
  {
    id: 36,
    src: require("../images/gallery/36.jpg").default,
    alt: "ST19",
  },
  {
    id: 37,
    src: require("../images/gallery/37.jpg").default,
    alt: "ST19",
  },
  {
    id: 38,
    src: require("../images/gallery/38.jpg").default,
    alt: "ST19",
  },
  {
    id: 39,
    src: require("../images/gallery/39.jpg").default,
    alt: "ST19",
  },
  {
    id: 40,
    src: require("../images/gallery/40.jpg").default,
    alt: "ST19",
  },
  {
    id: 41,
    src: require("../images/gallery/41.jpg").default,
    alt: "ST19",
  },
  {
    id: 42,
    src: require("../images/gallery/42.jpg").default,
    alt: "ST19",
  },
  {
    id: 43,
    src: require("../images/gallery/43.jpg").default,
    alt: "ST19",
  },
  {
    id: 44,
    src: require("../images/gallery/44.jpg").default,
    alt: "ST19",
  },
  {
    id: 45,
    src: require("../images/gallery/45.jpg").default,
    alt: "ST19",
  },
  {
    id: 46,
    src: require("../images/gallery/46.jpg").default,
    alt: "ST19",
  },
  {
    id: 47,
    src: require("../images/gallery/47.jpg").default,
    alt: "ST19",
  },
  {
    id: 48,
    src: require("../images/gallery/48.jpg").default,
    alt: "ST19",
  },
  {
    id: 49,
    src: require("../images/gallery/49.jpg").default,
    alt: "ST19",
  },
  {
    id: 50,
    src: require("../images/gallery/50.jpg").default,
    alt: "ST19",
  },
  {
    id: 51,
    src: require("../images/gallery/51.jpg").default,
    alt: "ST19",
  },
  {
    id: 52,
    src: require("../images/gallery/52.jpg").default,
    alt: "ST19",
  },
  {
    id: 53,
    src: require("../images/gallery/53.jpg").default,
    alt: "ST19",
  },
  {
    id: 54,
    src: require("../images/gallery/54.jpg").default,
    alt: "ST19",
  },
  {
    id: 55,
    src: require("../images/gallery/55.jpg").default,
    alt: "ST19",
  },
  {
    id: 56,
    src: require("../images/gallery/56.jpg").default,
    alt: "ST19",
  },
  {
    id: 57,
    src: require("../images/gallery/57.jpg").default,
    alt: "ST19",
  },
  {
    id: 58,
    src: require("../images/gallery/58.jpg").default,
    alt: "ST19",
  },
  {
    id: 59,
    src: require("../images/gallery/59.jpg").default,
    alt: "ST19",
  },
  {
    id: 60,
    src: require("../images/gallery/60.jpg").default,
    alt: "ST19",
  },
  {
    id: 61,
    src: require("../images/gallery/61.jpg").default,
    alt: "ST19",
  },
  {
    id: 62,
    src: require("../images/gallery/62.jpg").default,
    alt: "ST19",
  },
  {
    id: 63,
    src: require("../images/gallery/63.jpg").default,
    alt: "ST19",
  },
  {
    id: 64,
    src: require("../images/gallery/64.jpg").default,
    alt: "ST19",
  },
  {
    id: 65,
    src: require("../images/gallery/65.jpg").default,
    alt: "ST19",
  },
  {
    id: 66,
    src: require("../images/gallery/66.jpg").default,
    alt: "ST19",
  },
  {
    id: 67,
    src: require("../images/gallery/67.jpg").default,
    alt: "ST19",
  },
  {
    id: 68,
    src: require("../images/gallery/68.jpg").default,
    alt: "ST19",
  },
  {
    id: 69,
    src: require("../images/gallery/69.jpg").default,
    alt: "ST19",
  },
  {
    id: 70,
    src: require("../images/gallery/70.jpg").default,
    alt: "ST19",
  },
  {
    id: 71,
    src: require("../images/gallery/71.jpg").default,
    alt: "ST19",
  },
  {
    id: 72,
    src: require("../images/gallery/72.jpg").default,
    alt: "ST19",
  },
  {
    id: 73,
    src: require("../images/gallery/73.jpg").default,
    alt: "ST19",
  },
  {
    id: 74,
    src: require("../images/gallery/74.jpg").default,
    alt: "ST19",
  },
  {
    id: 75,
    src: require("../images/gallery/75.jpg").default,
    alt: "ST19",
  },
  {
    id: 76,
    src: require("../images/gallery/76.jpg").default,
    alt: "ST19",
  },
  {
    id: 77,
    src: require("../images/gallery/77.jpg").default,
    alt: "ST19",
  },
  {
    id: 78,
    src: require("../images/gallery/78.jpg").default,
    alt: "ST19",
  },
  {
    id: 79,
    src: require("../images/gallery/79.jpg").default,
    alt: "ST19",
  },
  {
    id: 80,
    src: require("../images/gallery/80.jpg").default,
    alt: "ST19",
  },
  {
    id: 81,
    src: require("../images/gallery/81.jpg").default,
    alt: "ST19",
  },
  {
    id: 82,
    src: require("../images/gallery/82.jpg").default,
    alt: "ST19",
  },
  {
    id: 83,
    src: require("../images/gallery/83.jpg").default,
    alt: "ST19",
  },
  {
    id: 84,
    src: require("../images/gallery/84.jpg").default,
    alt: "ST19",
  },
  {
    id: 85,
    src: require("../images/gallery/85.jpg").default,
    alt: "ST19",
  },
  {
    id: 86,
    src: require("../images/gallery/86.jpg").default,
    alt: "ST19",
  },
  {
    id: 87,
    src: require("../images/gallery/87.jpg").default,
    alt: "ST19",
  },
  {
    id: 88,
    src: require("../images/gallery/88.jpg").default,
    alt: "ST19",
  },
  {
    id: 89,
    src: require("../images/gallery/89.jpg").default,
    alt: "ST19",
  },
  {
    id: 90,
    src: require("../images/gallery/90.jpg").default,
    alt: "ST19",
  },
  {
    id: 91,
    src: require("../images/gallery/91.jpg").default,
    alt: "ST19",
  },
  {
    id: 92,
    src: require("../images/gallery/92.jpg").default,
    alt: "ST19",
  },
  {
    id: 93,
    src: require("../images/gallery/93.jpg").default,
    alt: "ST19",
  },
  {
    id: 94,
    src: require("../images/gallery/94.jpg").default,
    alt: "ST19",
  },
  {
    id: 95,
    src: require("../images/gallery/95.jpg").default,
    alt: "ST19",
  },
  {
    id: 96,
    src: require("../images/gallery/96.jpg").default,
    alt: "ST19",
  },
  {
    id: 97,
    src: require("../images/gallery/97.jpg").default,
    alt: "ST19",
  },
  {
    id: 98,
    src: require("../images/gallery/98.jpg").default,
    alt: "ST19",
  },
  {
    id: 99,
    src: require("../images/gallery/99.jpg").default,
    alt: "ST19",
  },
  {
    id: 100,
    src: require("../images/gallery/100.jpg").default,
    alt: "ST19",
  },
  {
    id: 101,
    src: require("../images/gallery/101.jpg").default,
    alt: "ST19",
  },
  {
    id: 102,
    src: require("../images/gallery/102.jpg").default,
    alt: "ST19",
  },
  {
    id: 103,
    src: require("../images/gallery/103.jpg").default,
    alt: "ST19",
  },
  {
    id: 104,
    src: require("../images/gallery/104.jpg").default,
    alt: "ST19",
  },
  {
    id: 105,
    src: require("../images/gallery/105.jpg").default,
    alt: "ST19",
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

export interface menuListItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  backgroundImgSrc: string;
}

export const MenuListData: menuListItem[] = [
  {
    id: 1,
    src: require("../images/gallery/1.jpg").default,
    alt: "Burger Menu Image",
    title: "ST56",
    backgroundImgSrc: require("../images/burgery.jpg").default,
  },
  {
    id: 2,
    src: require("../images/gallery/31.jpg").default,
    alt: "Dodatki Menu Image",
    title: "ST57",
    backgroundImgSrc: require("../images/dodatki.jpg").default,
  },
  {
    id: 3,
    src: require("../images/cola.jpg").default,
    alt: "Napoje Menu Image",
    title: "ST58",
    backgroundImgSrc: require("../images/napoje.jpg").default,
  },
];

export interface menuAdditiveItem {
  id: number;
  description: string;
  price: string;
}

export const menuAdditivesItems: menuAdditiveItem[] = [
  { id: 1, description: "ST59", price: "6/12 zł" },
  { id: 2, description: "ST60", price: "11 zł" },
  { id: 3, description: "ST61", price: "11 zł" },
  { id: 4, description: "ST62", price: "6 zł" },
  {
    id: 5,
    description: "ST63",
    price: "2 zł",
  },
  { id: 6, description: "ST86", price: "12 zł" },
  { id: 7, description: "ST87", price: "12 zł" },
];

export const menuAdditivesDrinks: menuAdditiveItem[] = [
  { id: 1, description: "coca cola (0.33l/0.5l)", price: "5/7 zł" },
  { id: 2, description: "coca cola zero (0.33l/0.5l)", price: "5/7 zł" },
  { id: 3, description: "fanta (0.33l/0.5l)", price: "5/7 zł" },
  { id: 4, description: "sprite (0.33l/0.5l)", price: "5/7 zł" },
  { id: 5, description: "fuzetee (0.5l)", price: "7 zł" },
  { id: 6, description: "ST72", price: "6 zł" },
  { id: 7, description: "kropla beskidu (0.5l)", price: "4 zł" },
];

export const AboutFooterItemsData: AboutFooterItemProps[] = [
  {
    id: 1,
    title: "ST64",
    href: "https://www.facebook.com/burgerbargorlice",
    className: "facebook",
  },
  {
    id: 2,
    title: "ST65",
    href: "https://www.instagram.com/burgerbar/",
    className: "instagram",
  },
  {
    id: 3,
    title: "ST66",
    href: "https://www.google.com/maps/place/BurgerBar+Gorlice/@49.6546212,21.1600024,15z/data=!4m7!3m6!1s0x0:0x9f5964adc401a251!8m2!3d49.6546212!4d21.1600024!9m1!1b1",
    className: "google",
  },
];
