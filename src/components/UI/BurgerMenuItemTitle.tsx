import React from "react";

import "../../styles/BurgerMenuItem.scss";

const BurgerMenuItemTitle: React.FC = () => {
  return (
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
  );
};

export default BurgerMenuItemTitle;
