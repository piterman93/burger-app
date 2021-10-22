import React, { useState, useEffect } from "react";

import "../../styles/Layout.scss";

import Footer from "./Footer/Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Section from "./Section";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Layout: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  const showArrowHandler = () => {
    if (window.scrollY > 600) setShowArrow(true);
    else setShowArrow(false);
  };

  const scrollTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", showArrowHandler);
    return () => {
      window.removeEventListener("scroll", showArrowHandler);
    };
  }, [showArrow]);
  return (
    <div className="app">
      <header>
        <NavBar />
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
