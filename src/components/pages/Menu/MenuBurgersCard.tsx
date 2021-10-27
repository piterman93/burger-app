import React from "react";

import "../../../styles/MenuBurgersCard.scss";

import Card from "../../UI/Card";

const MenuBurgersCard: React.FC = () => {
  return (
    <Card className="additives__card">
      <h2>Dodatkowe informacje</h2>
      <div className="additives__description">
        <div className="left">
          <h3>Każdy zestaw zawiera:</h3>
          <ul>
            <li>✔ burger</li>
            <li>✔ frytki</li>
            <li>✔ surówka colesław</li>
          </ul>
        </div>
        <div className="right">
          <h3>Każdy dodatkowy składnik do burgera:</h3>
          <div className="additives__item">
            <span>* warzywa:</span>
            <span>1 zł</span>
          </div>
          <div className="additives__item">
            <span>* ser, bekon,pikantna salami, krążki cebulowe, nachos:</span>
            <span>2 zł</span>
          </div>
          <div className="additives__item">
            <span>* mięso, ser camembert, vege kotlet:</span>
            <span>6/8 zł</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuBurgersCard;
