import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../../../styles/Footer.scss";

import logo from "../../../images/burger-icon.jpg";
import FooterContact from "./FooterContact";
import FooterHours from "./FooterHours";
import FooterMedia from "./FooterMedia";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer__wrapper">
      <div className="footer__top">
        <div className="footer__logo">
          <div className="footer__logo_container">
            <img src={logo} alt="Burger Bar logo" />
          </div>
          <span>BurgerBar</span>
          <span>Gorlice</span>
        </div>
        <FooterContact />
        <FooterHours />
        <FooterMedia />
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <p>
            {t("ST75")}
            <span>
              <a
                href="https://piterman93.github.io/portfolio-app/"
                target="_blank"
                rel="noreferrer"
              >
                Piotr Maniak
              </a>
            </span>
            .
          </p>
          <p>Copyright© 2021. {t("ST78")}</p>
        </div>
        <div className="footer__bottom_right">
          <Link to="privacy-policy">
            <p>{t("ST76")}</p>
          </Link>
          <Link to="company-info">
            <p>{t("ST77")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
