import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/BurgerSideMenu.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { NavigationData } from "../../utils/constData";

interface BurgerSideMenuProps {
  onClick: () => void;
  active: boolean;
}

const BurgerSideMenu: React.FC<BurgerSideMenuProps> = ({ onClick, active }) => {
  const navListItems = NavigationData.map((item) => (
    <li key={item.id} onClick={onClick}>
      <NavLink to={item.route}>{item.title}</NavLink>
    </li>
  ));

  const sideMenuClasses = `side__menu ${active ? "active" : ""}`;

  return (
    <div className={sideMenuClasses}>
      <nav>
        <ul>{navListItems}</ul>
      </nav>
      <div className="side__menu__bottom">
        <div className="contact">
          <LocalPhoneIcon />
          <span>+48 735 073 060</span>
        </div>
        <div className="socialMedia">
          <a
            href="https://www.facebook.com/burgerbargorlice"
            target="_blank"
            aria-label="facebook icon"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/burgerbar.gorlice/?hl=pl"
            target="_blank"
            aria-label="instagram icon"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerSideMenu;
