import React from "react";

export interface menuAdditiveItemProps {
  id?: number;
  description: string;
  price: string;
}

const MenuItemOther: React.FC<menuAdditiveItemProps> = ({
  description,
  price,
}) => {
  return (
    <li>
      <span>{description}</span>
      <span>{price}</span>
    </li>
  );
};

export default MenuItemOther;
