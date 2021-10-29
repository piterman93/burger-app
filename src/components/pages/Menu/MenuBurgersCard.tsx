import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/MenuBurgersCard.scss";

import Card from "../../UI/Card";

const MenuBurgersCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Card className="additives__card">
      <h2>{t("ST25")}</h2>
      <div className="additives__description">
        <div className="left">
          <h3>{t("ST26")}</h3>
          <ul>
            <li>✔ {t("ST73")}</li>
            <li>✔ {t("ST27")}</li>
            <li>✔ {t("ST28")}</li>
          </ul>
        </div>
        <div className="right">
          <h3>{t("ST29")}</h3>
          <div className="additives__item">
            <span>* {t("ST30")}</span>
            <span>1 zł</span>
          </div>
          <div className="additives__item">
            <span>* {t("ST31")}</span>
            <span>2 zł</span>
          </div>
          <div className="additives__item">
            <span>* {t("ST32")}</span>
            <span>6/8 zł</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuBurgersCard;
