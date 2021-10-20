import React from "react";

import "../../styles/Layout.scss";

import Footer from "./Footer/Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Section from "./Section";

const Layout: React.FC = () => {
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
    </div>
  );
};

export default Layout;
