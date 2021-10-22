import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../../../styles/Menu.scss";

import BurgerMenuItem from "../../UI/BurgerMenuItem";

import {
  MenuBurgerItemsData,
  containerVariants,
} from "../../../utils/constData";
import { MenuListData } from "../../../utils/constData";
import { menuListItem } from "../../../utils/constData";

import BurgerMenuItemTitle from "../../UI/BurgerMenuItemTitle";
import MenuBurgersCard from "./MenuBurgersCard";
import MenuAdditives from "./MenuAdditives";

const Menu: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<menuListItem>(
    MenuListData[0]
  );

  const activeItemHandler = (item: menuListItem) => {
    setActiveMenuItem(item);
  };

  const menuList = MenuListData.map((item) => {
    let className;
    if (item.id === activeMenuItem.id) className = "active";
    return (
      <li
        key={item.id}
        className={className}
        onClick={() => activeItemHandler(item)}
      >
        <div className="menu__list_image">
          <img src={item.src} alt={item.alt} />
        </div>
        <span className={className}>{item.title}</span>
      </li>
    );
  });

  const burgersData = MenuBurgerItemsData.map((item) => (
    <BurgerMenuItem
      key={item.id}
      src={item.src}
      description={item.description}
      alt={item.alt}
      title={item.title}
      priceSmall={item.priceSmall}
      priceBig={item.priceBig}
      priceSet={item.priceSet}
    />
  ));

  const content =
    (activeMenuItem.id === 1 && (
      <>
        <ul>
          <BurgerMenuItemTitle />
          {burgersData}
        </ul>
        <MenuBurgersCard />
      </>
    )) ||
    ((activeMenuItem.id === 2 || activeMenuItem.id === 3) && (
      <MenuAdditives activeId={activeMenuItem.id} />
    ));

  useEffect(() => {
    window.scrollTo(0, 520);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="menu"
    >
      <h1>MENU:</h1>
      <div className="menu__image">
        <img src={activeMenuItem.backgroundImgSrc} alt={activeMenuItem.alt} />
        <h2>{activeMenuItem.title}</h2>
      </div>
      <div className="menu__list">
        <ul>{menuList}</ul>
      </div>
      <div className="menu__card">{content}</div>
    </motion.div>
  );
};

export default Menu;
