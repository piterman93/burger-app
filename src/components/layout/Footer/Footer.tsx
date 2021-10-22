import React from "react";

import "../../../styles/Footer.scss";

import logo from "../../../images/burger-icon.jpg";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";
import FooterMedia from "./FooterMedia";

const Footer: React.FC = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__top">
        <div className="footer__logo">
          <div className="footer__logo_container">
            <img src={logo} alt="Burger Bar logo" />
          </div>
          <span>BURGER</span>
          <span>BAR</span>
          <span>GORLICE</span>
        </div>
        <FooterContact />
        <FooterHours />
        <FooterMedia />
      </div>
      <div className="footer__bottom">
        <p>Copyright© 2021</p>
        <span>
          <a href="https://www.linkedin.com/in/piotrmaniak93/" target="_blank">
            Piotr Maniak
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
