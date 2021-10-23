import React from "react";

import "../../../styles/HomeContact.scss";

import ButtonLink from "../../UI/ButtonLink";

const HomeContact: React.FC = () => {
  return (
    <div className="home__contact">
      <div className="home__contact_wrapper">
        <h1>Masz pytania? Zapraszamy do kontaktu! </h1>
        <ButtonLink title="KONTAKT" route="/contact" />
      </div>
    </div>
  );
};

export default HomeContact;
