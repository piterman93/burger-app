import React from "react";

import "../../../styles/ContactCard.scss";
import "../../../styles/FooterContact.scss";

import Card from "../../UI/Card";
import FooterContact from "../../layout/Footer/FooterContact";
import FooterHours from "../../layout/Footer/FooterHours";
import FooterMedia from "../../layout/Footer/FooterMedia";

import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";

const ContactCard: React.FC = () => {
  return (
    <Card className="info__card">
      <div className="info__wrapper">
        <div className="info__icon">
          <HomeIcon />
        </div>
        <FooterContact />
      </div>
      <div className="info__wrapper">
        <div className="info__icon">
          <AccessTimeIcon />
        </div>
        <FooterHours />
      </div>
      <div className="info__wrapper">
        <div className="info__icon">
          <SearchIcon />
        </div>
        <FooterMedia />
      </div>
    </Card>
  );
};

export default ContactCard;
