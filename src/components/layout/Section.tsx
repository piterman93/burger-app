import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../../styles/Section.scss";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

const Section: React.FC = () => {
  return (
    <div className="section">
      <Switch>
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
      </Switch>
    </div>
  );
};

export default Section;
