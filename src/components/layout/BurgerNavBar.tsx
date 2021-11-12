import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "../../styles/BurgerNavBar.scss";

import BurgerSideMenu from "./BurgerSideMenu";
import Backdrop from "../UI/Backdrop";

import logo from "../../images/burger-icon.jpg";

const BurgerNavBar: React.FC = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [navActive, setNavActive] = useState(true);
  const [navTransparent, setNavTransparent] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(false);

  let oldScrollValue: number;

  const controlHeaderHandler = useCallback(() => {
    const newScrollValue = window.pageYOffset;
    if (oldScrollValue - newScrollValue > 0) {
      setNavActive(true);
    } else if (oldScrollValue - newScrollValue < 0 && window.scrollY > 0) {
      setNavActive(false);
    }
    if (newScrollValue > 495) {
      setNavTransparent(false);
    } else {
      setNavTransparent(true);
    }
    oldScrollValue = newScrollValue;
  }, []);

  const burgerActiveHandler = () => {
    setBurgerActive(!burgerActive);
    setShowBackdrop(!showBackdrop);
  };

  const showBackdropHandler = () => {
    setShowBackdrop(!showBackdrop);
    setBurgerActive(!burgerActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderHandler);
    if (burgerActive) {
      window.removeEventListener("scroll", controlHeaderHandler);
    }
    return () => {
      window.removeEventListener("scroll", controlHeaderHandler);
    };
  }, [burgerActive, controlHeaderHandler]);

  const burgerMenuClasses = `hamburger__menu ${burgerActive ? "active" : ""}`;
  const burgerNavClasses = `burger__nav ${navActive ? "" : "inactive"} ${
    navTransparent ? "" : "black"
  } ${burgerActive ? "active" : ""}`;

  return (
    <React.Fragment>
      {showBackdrop && <Backdrop onClose={showBackdropHandler} />}
      <BurgerSideMenu onClick={burgerActiveHandler} active={burgerActive} />
      <div className={burgerNavClasses}>
        <div className="navigation__logo">
          <div className="navigation__logo_container">
            <Link to="/home">
              <img src={logo} alt="BurgerBar logo" />
            </Link>
          </div>
          <span>BURGER</span>
          <span>BAR</span>
        </div>
        <div className={burgerMenuClasses} onClick={burgerActiveHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BurgerNavBar;
