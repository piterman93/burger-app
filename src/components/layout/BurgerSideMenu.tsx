import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/BurgerSideMenu.scss";

import { NavigationData } from "../../utils/constData";
import NavigationMedia from "../UI/NavigationMedia";

interface BurgerSideMenuProps {
  onClick: () => void;
  active: boolean;
}

const BurgerSideMenu: React.FC<BurgerSideMenuProps> = ({ onClick, active }) => {
  const { t } = useTranslation();

  const navListItems = NavigationData.map((item) => (
    <li key={item.id} onClick={onClick}>
      <NavLink to={item.route}>{t(item.title)}</NavLink>
    </li>
  ));

  const sideMenuClasses = `side__menu ${active ? "active" : ""}`;

  return (
    <div className={sideMenuClasses}>
      <nav>
        <ul>{navListItems}</ul>
      </nav>
      <div className="side__menu__bottom">
        <NavigationMedia />
      </div>
    </div>
  );
};

export default BurgerSideMenu;
