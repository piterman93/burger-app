import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/HomeMenu.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Card from "../../UI/Card";
import MenuItem from "../../../components/UI/MenuItem";
import { AboutMenuItemsData } from "../../../utils/constData";

const HomeMenu: React.FC = () => {
  const menuData = AboutMenuItemsData.map((item) => (
    <MenuItem
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
            <li>
              <div className="menu__item_wrapper">
                <div className="menu__item">
                  <div className="menu__item_left">
                    <span className="item__title">NAZWA:</span>
                  </div>
                  <div className="menu__item_right">
                    <div className="price">mały</div>
                    <div className="price">duży</div>
                    <div className="price">zestaw</div>
                  </div>
                </div>
              </div>
            </li>
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
