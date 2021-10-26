import React from "react";

import "../../../styles/HomeMenu.scss";

import Card from "../../UI/Card";
import BurgerMenuItem from "../../UI/BurgerMenuItem";
import ButtonLink from "../../UI/ButtonLink";
import BurgerMenuItemTitle from "../../UI/BurgerMenuItemTitle";

import { AboutMenuItemsData } from "../../../utils/constData";

const HomeMenu: React.FC = () => {
  const menuData = AboutMenuItemsData.map((item) => (
    <BurgerMenuItem
      key={item.id}
      src={item.src}
      description={item.description}
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
        <h1>Sprawdź nasze Menu</h1>
        <h2>Każdy znajdzie coś dla siebie!</h2>
        <p>
          Najwyższej jakości składniki, 100% wołowiny i pyszne, świeżo wypiekane
          bułki. Nie czekaj i spróbuj już dziś!
        </p>
        <Card className="home__menu_card">
          <ul className="home__menu_ul">
            <BurgerMenuItemTitle />
            {menuData}
          </ul>
        </Card>
        <ButtonLink title="CAŁE MENU" route="/menu" />
      </div>
    </div>
  );
};

export default HomeMenu;
