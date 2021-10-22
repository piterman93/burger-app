import React from "react";

import "../../styles/BurgerMenuItem.scss";

export interface BurgerMenuItemProps {
  id?: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  priceSmall: string;
  priceBig: string;
  priceSet: string;
}

const BurgerMenuItem: React.FC<BurgerMenuItemProps> = ({
  src,
  alt,
  title,
  description,
  priceSmall,
  priceBig,
  priceSet,
}) => {
  return (
    <li>
      <div className="menu__item_wrapper">
        <div className="menu__image">
          <img src={src} alt={alt} />
        </div>
        <div className="menu__item">
          <div className="menu__item_left">
            <span className="item__title">{title}</span>
            <span className="item__info">{description}</span>
          </div>
          <div className="menu__item_right">
            <div className="price">{priceSmall}</div>
            <div className="price">{priceBig}</div>
            <div className="price">{priceSet}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BurgerMenuItem;
