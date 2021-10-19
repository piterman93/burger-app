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
