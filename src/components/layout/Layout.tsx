import React, { useState, useEffect } from "react";

import "../../styles/Layout.scss";

import Footer from "./Footer/Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Section from "./Section";
import BurgerNavBar from "./BurgerNavBar";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Layout: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [opacity, setOpacity] = useState(0.8);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const opacityAndArrowHandler = () => {
    if (window.scrollY > 600) setShowArrow(true);
    else setShowArrow(false);

    const newScrollValue = window.scrollY;
    const newOpacity = 1 - newScrollValue / 450;
    setOpacity(newOpacity);
  };

  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };

  const documentWidthHandler = () => {
    const width = document.body.clientWidth;
    if (width < 1200) setHamburgerMenu(true);
    else setHamburgerMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", opacityAndArrowHandler);
    window.addEventListener("resize", documentWidthHandler);
    return () => {
      window.removeEventListener("scroll", opacityAndArrowHandler);
      window.addEventListener("resize", documentWidthHandler);
    };
  }, [showArrow]);
  return (
    <div className="app">
      {hamburgerMenu && <BurgerNavBar />}
      {!hamburgerMenu && <NavBar />}
      <header style={{ opacity: opacity }}>
        <Header />
      </header>
      <main>
        <Section />
      </main>
      <footer>
        <Footer />
      </footer>
      {showArrow && (
        <button className="arrowBottom" onClick={scrollTopHandler}>
          <ArrowUpwardIcon className="scroll__top" />
        </button>
      )}
    </div>
  );
};

export default Layout;
