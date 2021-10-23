import React from "react";
import { Link } from "react-router-dom";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export interface buttonLinkProps {
  title: string;
  route: string;
}

const ButtonLink: React.FC<buttonLinkProps> = ({ title, route }) => {
  return (
    <Link to={route}>
      <button className="button button__menu">
        <span>{title}</span>
        <div className="arrow">
          Let's go!
          <ArrowRightAltIcon />
        </div>
      </button>
    </Link>
  );
};

export default ButtonLink;
