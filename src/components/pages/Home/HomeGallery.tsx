import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/HomeGallery.scss";

import gallery1 from "../../../images/gallery1.jpg";
import gallery2 from "../../../images/gallery2.jpg";
import gallery3 from "../../../images/gallery3.jpg";

import ButtonLink from "../../UI/ButtonLink";

const HomeGallery: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="home__gallery">
      <div className="home__gallery_description">
        <div className="description__wrapper">
          <h1>{t("ST19")}</h1>
          <p>{t("ST20")}</p>
          <ButtonLink title={t("ST19")} route="/gallery" />
        </div>
      </div>
      <div className="home__gallery_images">
        <div className="image__wrapper">
          <img src={gallery1} alt="burgerBar 1" />
        </div>
        <div className="image__wrapper">
          <img src={gallery2} alt="burgerBar 2" />
        </div>
        <div className="image__wrapper">
          <img src={gallery3} alt="burgerBar 3" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
