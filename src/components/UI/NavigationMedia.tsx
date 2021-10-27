import React from "react";
import { useTranslation } from "react-i18next";

import "../../styles/NavigationMedia.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import pl from "../../images/pl.png";
import en from "../../images/en.png";

const NavigationMedia: React.FC = () => {
  const { i18n } = useTranslation();

  const langChangeHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <React.Fragment>
      <div className="navigation__contact">
        <LocalPhoneIcon />
        <span>+48 735 073 060</span>
      </div>
      <div className="socialMedia">
        <div className="media">
          <a
            href="https://www.facebook.com/burgerbargorlice"
            target="_blank"
            aria-label="facebook icon"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/burgerbar.gorlice/?hl=pl"
            target="_blank"
            aria-label="instagram icon"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="languages">
          <div
            className="language__icon"
            onClick={() => langChangeHandler("en")}
          >
            <img src={en} alt="english" />
          </div>
          <div
            className="language__icon"
            onClick={() => langChangeHandler("pl")}
          >
            <img src={pl} alt="polish" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationMedia;
