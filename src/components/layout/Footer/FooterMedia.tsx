import React from "react";

import "../../../styles/FooterMedia.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const FooterMedia: React.FC = () => {
  return (
    <div className="footer__media">
      <h3>Obserwuj nas:</h3>
      <span className="underline" />
      <div className="media__icons">
        <div className="icon__container">
          <a href="https://www.facebook.com/burgerbargorlice" target="_blank">
            <FacebookIcon />
          </a>
        </div>
        <div className="icon__container">
          <a
            href="https://www.instagram.com/burgerbar.gorlice/?hl=pl"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <h3>Spradź opinie:</h3>
      <span className="underline" />
      <div className="icon__container">
        <a
          href="https://www.google.com/maps/place/BurgerBar+Gorlice/@49.6546212,21.1600024,15z/data=!4m5!3m4!1s0x0:0x9f5964adc401a251!8m2!3d49.6546212!4d21.1600024"
          target="_blank"
        >
          <GoogleIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterMedia;
