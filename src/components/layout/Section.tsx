import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "../../styles/Section.scss";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Menu from "../pages/Menu/Menu";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CompanyInfo from "../pages/CompanyInfo";

const Section: React.FC = () => {
  const location = useLocation();

  return (
    <div className="section">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/company-info">
            <CompanyInfo />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Section;
