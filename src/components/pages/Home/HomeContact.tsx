import React from "react";

import "../../../styles/HomeContact.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const HomeContact: React.FC = () => {
  return (
    <div className="home__contact">
      <div className="home__contact_wrapper">
        <h1>Masz pytania? Zapraszamy do kontaktu! </h1>
        <button className="button button__menu">
          <span>KONTAKT</span>
          <div className="arrow">
            Let's go!
            <ArrowRightAltIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeContact;
