import React, { useState, useEffect } from "react";

import "../../styles/Layout.scss";

import Footer from "./Footer/Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Section from "./Section";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Layout: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [opacity, setOpacity] = useState(0.8);

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

  useEffect(() => {
    window.addEventListener("scroll", opacityAndArrowHandler);
    return () => {
      window.removeEventListener("scroll", opacityAndArrowHandler);
    };
  }, [showArrow]);
  return (
    <div className="app">
      <NavBar />
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
