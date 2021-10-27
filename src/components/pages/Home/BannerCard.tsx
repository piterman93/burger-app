import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/BannerCard.scss";

import logo from "../../../images/burger-icon.jpg";
import home1 from "../../../images/home-3.jpg";
import home2 from "../../../images/home-2.jpg";
import Card from "../../UI/Card";
import ButtonLink from "../../UI/ButtonLink";

const BannerCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Card className="home__card">
      <div className="card__image_container">
        <img src={home1} alt="Burger" />
      </div>
      <div className="home__card_description">
        <div className="home__card_logo">
          <div className="home__logo_container">
            <img src={logo} alt="Burger Bar logo" />
          </div>
          <span>BURGER</span>
          <span>BAR</span>
        </div>
        <h1>{t("ST15")}</h1>
        <h2>{t("ST16")}</h2>
        <ButtonLink title="MENU" route="/menu" />
      </div>
      <div className="card__image_container">
        <img src={home2} alt="Burger" />
      </div>
    </Card>
  );
};

export default BannerCard;
