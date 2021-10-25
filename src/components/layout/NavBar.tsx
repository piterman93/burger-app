import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "../../styles/NavBar.scss";

import logo from "../../images/burger-icon.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { NavigationData } from "../../utils/constData";

const NavBar: React.FC = () => {
  const [navActive, setNavActive] = useState(true);
  const [navTransparent, setNavTransparent] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderHandler);
    return () => {
      window.removeEventListener("scroll", controlHeaderHandler);
    };
  }, []);

  let oldScrollValue: number;

  const controlHeaderHandler = () => {
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
  };

  const navClasses = `navigation ${navActive ? "" : "inactive"} ${
    navTransparent ? "" : "black"
  }`;

  const navListItems = NavigationData.map((item) => (
    <li key={item.id}>
      <NavLink to={item.route}>{item.title}</NavLink>
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
        <div className="navigation__contact">
          <LocalPhoneIcon />
          <span>+48 735 073 060</span>
        </div>
        <div className="navigation__socialMedia">
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

export default NavBar;
