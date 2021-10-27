import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/AboutDescription.scss";

import ButtonLink from "../../UI/ButtonLink";

const AboutDescription: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="about__description_info">
      <div className="about__description_left">
        <h2>{t("ST7")}</h2>
        <h3>{t("ST8")}</h3>
        <p>{t("ST9")}</p>
        <ButtonLink title="MENU" route="/menu" />
      </div>
      <div className="about__description_right">
        <div className="image__wrapper">
          <img
            src={require("../../../images/gallery/54.jpg").default}
            alt="BurgerBar"
          />
        </div>
        <div className="image__wrapper">
          <img
            src={require("../../../images/gallery/16.jpg").default}
            alt="BurgerBar"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
