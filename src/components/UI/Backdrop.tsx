import React from "react";
import ReactDOM from "react-dom";

import "../../styles/Backdrop.scss";

export interface BackdropProps {
  onClose: () => void;
}

const portalElement = document.getElementById("backdrop") as HTMLDivElement;

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClose} />,
    portalElement
  );
};

export default Backdrop;
