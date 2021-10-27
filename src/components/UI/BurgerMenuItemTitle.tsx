import React from "react";
import { useTranslation } from "react-i18next";

import "../../styles/BurgerMenuItem.scss";

const BurgerMenuItemTitle: React.FC = () => {
  const { t } = useTranslation();
  return (
    <li>
      <div className="menu__item_wrapper">
        <div className="menu__item">
          <div className="menu__item_left">
            <span className="item__title">{t("ST33")}</span>
          </div>
          <div className="menu__item_right">
            <div className="price">{t("ST34")}</div>
            <div className="price">{t("ST35")}</div>
            <div className="price">{t("ST36")}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BurgerMenuItemTitle;
