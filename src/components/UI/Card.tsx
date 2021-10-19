import React from "react";

import "../../styles/Card.scss";

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
