import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/FooterMedia.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const FooterMedia: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer__media">
      <h3>{t("ST4")}</h3>
      <span className="underline" />
      <div className="media__icons">
        <div className="icon__container">
          <a
            href="https://www.facebook.com/burgerbargorlice"
            target="_blank"
            aria-label="facebook icon"
            rel="noreferrer"
            className="facebook"
          >
            <FacebookIcon />
          </a>
        </div>
        <div className="icon__container">
          <a
            href="https://www.instagram.com/burgerbar.gorlice/?hl=pl"
            target="_blank"
            aria-label="instagram icon"
            rel="noreferrer"
            className="instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <h3>{t("ST5")}</h3>
      <span className="underline" />
      <div className="icon__container">
        <a
          href="https://www.google.com/maps/place/BurgerBar+Gorlice/@49.6546212,21.1600024,15z/data=!4m7!3m6!1s0x0:0x9f5964adc401a251!8m2!3d49.6546212!4d21.1600024!9m1!1b1"
          target="_blank"
          aria-label="google icon"
          rel="noreferrer"
          className="google"
        >
          <GoogleIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterMedia;
