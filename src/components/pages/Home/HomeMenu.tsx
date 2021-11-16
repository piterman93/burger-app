import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/HomeMenu.scss";

import Card from "../../UI/Card";
import BurgerMenuItem from "../../UI/BurgerMenuItem";
import ButtonLink from "../../UI/ButtonLink";
import BurgerMenuItemTitle from "../../UI/BurgerMenuItemTitle";

import { AboutMenuItemsData } from "../../../utils/constData";

const HomeMenu: React.FC = () => {
  const { t } = useTranslation();

  const menuData = AboutMenuItemsData.map((item) => (
    <BurgerMenuItem
      key={item.id}
      src={item.src}
      description={t(item.description)}
      childrenTitle={t(item.childrenTitle)}
      alt={item.alt}
      title={item.title}
      priceSmall={item.priceSmall}
      priceBig={item.priceBig}
      priceSet={item.priceSet}
    />
  ));
  return (
    <div className="home__menu">
      <div className="home__menu_description">
        <h1>{t("ST21")}</h1>
        <h2>{t("ST70")}!</h2>
        <p>{t("ST22")}</p>
        <Card className="home__menu_card">
          <ul className="home__menu_ul">
            <BurgerMenuItemTitle />
            {menuData}
          </ul>
        </Card>
        <ButtonLink title={t("ST71")} route="/menu" />
      </div>
    </div>
  );
};

export default HomeMenu;
