import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/HomeMenu.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Card from "../../UI/Card";
import BurgerMenuItem from "../../UI/BurgerMenuItem";
import { AboutMenuItemsData } from "../../../utils/constData";
import BurgerMenuItemTitle from "../../UI/BurgerMenuItemTitle";

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
          <ul>
            <BurgerMenuItemTitle />
            {menuData}
          </ul>
        </Card>
        <Link to="/menu">
          <button className="button button__menu">
            <span>CAŁE MENU</span>
            <div className="arrow">
              Let's go!
              <ArrowRightAltIcon />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeMenu;
