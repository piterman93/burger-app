import { BurgerMenuItemProps } from "../components/UI/BurgerMenuItem";
import { AboutFooterItemProps } from "../components/pages/About/AboutFooterItem";

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

export const AboutMenuItemsData: BurgerMenuItemProps[] = [
  {
    id: 1,
    src: require("../images/cheeser.jpg").default,
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
    src: require("../images/bacon.jpg").default,
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
    src: require("../images/ostry.jpg").default,
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
    src: require("../images/bbq.jpg").default,
    alt: "burger bar menu",
    title: "BBQ",
    description:
      "(wołowina, 2x cheddar, bekon, sałata, pieczarki, krążki cebulowe, pomidor, sos chiptoe mayo, sos BBQ)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
];

export const MenuBurgerItemsData: BurgerMenuItemProps[] = [
  {
    id: 1,
    src: require("../images/cheeser.jpg").default,
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
    src: require("../images/bacon.jpg").default,
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
    src: require("../images/ostry.jpg").default,
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
    src: require("../images/bbq.jpg").default,
    alt: "burger bar menu",
    title: "BBQ",
    description:
      "(wołowina, 2x cheddar, bekon, sałata, pieczarki, krążki cebulowe, pomidor, sos chiptoe mayo, sos BBQ)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
  {
    id: 5,
    src: require("../images/goral.jpg").default,
    alt: "burger bar menu",
    title: "GÓRAL",
    description:
      "(wołowina, ser wędzony, bekon, sałata, ogórek kwaszony, czerwona cebula, pomidor, ketchup, sos żurawinowo chrzanowy)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
  },
  {
    id: 6,
    src: require("../images/nacho.jpg").default,
    alt: "burger bar menu",
    title: "NACHO",
    description:
      "(wołowina, cheddar, nachos, sałata, papryczki jalapeno, czerwona cebula, pomidor, salsa meksykańska, sos chiptoe mayo)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
  },
  {
    id: 7,
    src: require("../images/americano.jpg").default,
    alt: "burger bar menu",
    title: "AMERICANO",
    description:
      "(wołowina, 2x cheddar, bekon, krążki cebulowe, sałata, papryczki jalapeno, pomidor, sos pomidorowo-ziołowy, majonez)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
  },
  {
    id: 8,
    src: require("../images/anglik.jpg").default,
    alt: "burger bar menu",
    title: "ANGLIK",
    description:
      "(wołowina, 2x cheddar, bekon, jajko sadzone, sałata, czerwona cebula, pomidor, ketchup, sos miodowo-musztardowy)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
  },
  {
    id: 9,
    src: require("../images/double.jpg").default,
    alt: "burger bar menu",
    title: "DOUBLE",
    description:
      "(2x wołowina, 2x cheddar, 2x bekon, sałata, ogórek lub papryczki jalapeno, czerwona cebula, pomidor, ketchup, sos majonezowo-piklowy)",
    priceSmall: "22 zł",
    priceBig: "24 zł",
    priceSet: "28/32 zł",
  },
  {
    id: 10,
    src: require("../images/koko.jpg").default,
    alt: "burger bar menu",
    title: "KO KO",
    description:
      "(grillowany kurczak, cheddar, sałata rukola, czerwona cebula, pomidor, ogórek, sos BBQ, sos majonezowo-piklowy)",
    priceSmall: "16 zł",
    priceBig: "18 zł",
    priceSet: "22/24 zł",
  },
  {
    id: 11,
    src: require("../images/vege-ser.jpg").default,
    alt: "burger bar menu",
    title: "VEGE SER",
    description:
      "(grillowany ser camembert, sałata rukola, szpinak, cukinia, grillowana cebula, pomidor, mix kiełków, ketchup, sos majonezowo-piklowy)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
  },
  {
    id: 12,
    src: require("../images/vege-burak.jpg").default,
    alt: "burger bar menu",
    title: "VEGE BURAK",
    description:
      "(kotlet z buraka i kaszy jaglanej z dodatkiem ziaren, sałata rukola, szpinak, cukinia, czerwona cebula, pomidor, mix kiełków, ketchup, sos majonezowo-piklowy)",
    priceSmall: "18 zł",
    priceBig: "20 zł",
    priceSet: "24/26 zł",
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
    title: "Burgery",
    backgroundImgSrc: require("../images/burgers.jpg").default,
  },
  {
    id: 2,
    src: require("../images/gallery/31.jpg").default,
    alt: "Dodatki Menu Image",
    title: "Dodatki",
    backgroundImgSrc: require("../images/fries.jpg").default,
  },
  {
    id: 3,
    src: require("../images/cola.jpg").default,
    alt: "Napoje Menu Image",
    title: "Napoje",
    backgroundImgSrc: require("../images/cola-menu.jpg").default,
  },
];

export interface menuAdditiveItem {
  id: number;
  description: string;
  price: string;
}

export const menuAdditivesItems: menuAdditiveItem[] = [
  { id: 1, description: "frytki belgijskie", price: "5/10 zł" },
  { id: 2, description: "frytki z batatów", price: "10 zł" },
  { id: 3, description: "krążki cebulowe", price: "10 zł" },
  { id: 4, description: "surówka colesław", price: "5 zł" },
  {
    id: 5,
    description:
      "sosy (jeden w cenie frytek): ketchup/ majonez/ BBQ/ duński/ 1000 wysp",
    price: "1 zł",
  },
];

export const menuAdditivesDrinks: menuAdditiveItem[] = [
  { id: 1, description: "coca cola (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 2, description: "coca cola zero (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 3, description: "fanta (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 4, description: "sprite (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 5, description: "fuzetee (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 6, description: "sok cappy (0.33l/0.5l)", price: "4.5/6 zł" },
  { id: 7, description: "kropla beskidu (0.33l/0.5l)", price: "4.5/6 zł" },
];

export const AboutFooterItemsData: AboutFooterItemProps[] = [
  {
    id: 1,
    title: "Śledź nas na facebooku",
    href: "https://www.facebook.com/burgerbargorlice",
    className: "facebook",
  },
  {
    id: 2,
    title: "Obserwuj nas na Instagramie",
    href: "https://www.instagram.com/burgerbar/",
    className: "instagram",
  },
  {
    id: 3,
    title: "Podziel się swoją opinią",
    href: "https://www.google.com/maps/place/BurgerBar+Gorlice/@49.6546212,21.1600024,15z/data=!4m7!3m6!1s0x0:0x9f5964adc401a251!8m2!3d49.6546212!4d21.1600024!9m1!1b1",
    className: "google",
  },
];
