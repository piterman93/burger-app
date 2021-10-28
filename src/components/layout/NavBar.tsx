import React, { useState, useEffect, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/NavBar.scss";

import { NavigationData } from "../../utils/constData";

import NavigationMedia from "../UI/NavigationMedia";
import logo from "../../images/burger-icon.jpg";

const NavBar: React.FC = () => {
  const [navActive, setNavActive] = useState(true);
  const [navTransparent, setNavTransparent] = useState(true);

  const { t } = useTranslation();

  let oldScrollValue: number;

  const controlHeaderHandler = useCallback(() => {
    const newScrollValue = window.pageYOffset;
    if (oldScrollValue - newScrollValue > 0) {
      setNavActive(true);
    } else if (oldScrollValue - newScrollValue < 0 && window.scrollY > 500) {
      setNavActive(false);
    }
    if (newScrollValue > 495) {
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
    oldScrollValue = newScrollValue;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderHandler);
    return () => {
      window.removeEventListener("scroll", controlHeaderHandler);
    };
  }, [controlHeaderHandler]);

  const navClasses = `navigation ${navActive ? "" : "inactive"} ${
    navTransparent ? "" : "black"
  }`;

  const navListItems = NavigationData.map((item) => (
    <li key={item.id}>
      <NavLink to={item.route}>{t(item.title)}</NavLink>
    </li>
  ));

  return (
    <div className={navClasses}>
      <div className="navigation__logo">
        <div className="navigation__logo_container">
          <Link to="/home">
            <img src={logo} alt="Burger Bar logo" />
          </Link>
        </div>
        <span>BURGER</span>
        <span>BAR</span>
      </div>
      <div className="navigation__menu">
        <nav>
          <ul>{navListItems}</ul>
        </nav>
      </div>
      <div className="navigation__aside">
        <NavigationMedia />
      </div>
    </div>
  );
};

export default NavBar;
