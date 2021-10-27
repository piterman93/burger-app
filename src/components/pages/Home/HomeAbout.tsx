import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/HomeAbout.scss";

import aboutImage from "../../../images/about-image.jpg";
import ButtonLink from "../../UI/ButtonLink";

const HomeAbout: React.FC = () => {
  const { t } = useTranslation();
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
          <p>{t("ST17")}</p>
          <ButtonLink title={t("ST6")} route="/about-us" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
