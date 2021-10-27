import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/FooterContact.scss";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const FooterContact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="footer__contact">
      <h3>{t("ST1")}</h3>
      <span id="underline" />
      <div className="contact__info">
        <HomeIcon className="icon" />
        <div className="contact__description">
          <p>Burger Bar Gorlice</p>
          <p>Henryka Sienkiewicza 2</p>
          <p>38-300 Gorlice</p>
        </div>
      </div>
      <div className="contact__info">
        <LocalPhoneIcon />
        <div className="contact__description">
          <p>+48 735 073 060</p>
        </div>
      </div>
      <div className="contact__info">
        <EmailIcon />
        <div className="contact__description">
          <p>burgerbar.gorlice@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
