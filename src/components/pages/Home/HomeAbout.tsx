import React from "react";

import "../../../styles/HomeAbout.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutImage from "../../../images/about-image.jpg";

const HomeAbout: React.FC = () => {
  return (
    <div className="home__about">
      <div className="about__image">
        <div className="about__image_card">
          <img src={aboutImage} alt="burger bar" />
        </div>
      </div>
      <div className="about__description">
        <h1>BurgerBar Gorlice</h1>
        <div className="about__description_wrapper">
          <p>
            Serwujemy Wam najlepsze burgery 100% wołowiny w pysznych bułach z
            lokalnej piekarni, do tego belgijskie frytki smażone tradycyjnie na
            tłuszczu wołowym. Mamy w menu również burgery wegetariańskie.
          </p>
          <button className="button button__menu">
            <span>O NAS</span>
            <div className="arrow">
              Let's go!
              <ArrowRightAltIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
