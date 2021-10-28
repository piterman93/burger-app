import React from "react";
import ReactDOM from "react-dom";

import "../../styles/Start.scss";

import logo from "../../images/burger-icon.jpg";

const portalElement = document.getElementById("backdrop") as HTMLDivElement;

const Start: React.FC = () => {
  return ReactDOM.createPortal(
    <div className="start">
      <div className="start__logo">
        <div className="start__logo_container">
          <img src={logo} alt="Burger Bar logo" />
        </div>
        <span>BURGER</span>
        <span>BAR</span>
      </div>
    </div>,
    portalElement
  );
};

export default Start;
