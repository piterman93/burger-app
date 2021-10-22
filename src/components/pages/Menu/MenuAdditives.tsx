import React from "react";

import "../../../styles/MenuAdditives.scss";

import Card from "../../UI/Card";
import MenuItemOther from "../../UI/MenuItemOther";

import {
  menuAdditivesItems,
  menuAdditivesDrinks,
} from "../../../utils/constData";

export interface MenuAdditivesProps {
  activeId: number;
}

const MenuAdditives: React.FC<MenuAdditivesProps> = ({ activeId }) => {
  const dataForContent =
    activeId === 2 ? menuAdditivesItems : menuAdditivesDrinks;

  const items = dataForContent.map((item) => (
    <MenuItemOther
      key={item.id}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <Card className="menu__additives_card">
      <h2>{activeId === 2 ? "DODATKI" : "NAPOJE"}</h2>
      <div className="menu__additives_description">
        <ul>{items}</ul>
      </div>
    </Card>
  );
};

export default MenuAdditives;
