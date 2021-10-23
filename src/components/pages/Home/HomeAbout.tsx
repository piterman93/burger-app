import React from "react";

import "../../../styles/HomeAbout.scss";

import aboutImage from "../../../images/about-image.jpg";
import ButtonLink from "../../UI/ButtonLink";

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
          <ButtonLink title="O NAS" route="/about-us" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
