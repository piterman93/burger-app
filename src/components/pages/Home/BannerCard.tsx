import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/BannerCard.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import logo from "../../../images/burger-icon.jpg";
import home1 from "../../../images/home-3.jpg";
import home2 from "../../../images/home-2.jpg";
import Card from "../../UI/Card";

const BannerCard: React.FC = () => {
  return (
    <Card className="home__card">
      <div className="card__image_container">
        <img src={home1} alt="Burger image 1" />
      </div>
      <div className="home__card_description">
        <div className="home__card_logo">
          <div className="home__logo_container">
            <img src={logo} alt="Burger Bar logo" />
          </div>
          <span>BURGER</span>
          <span>BAR</span>
        </div>
        <h1>Najlepsze burgery w Gorlicach!</h1>
        <h2>Sprawdź naszą ofertę</h2>
        <Link to="/menu">
          <button className="button button__menu">
            <span>MENU</span>
            <div className="arrow">
              Let's go!
              <ArrowRightAltIcon />
            </div>
          </button>
        </Link>
      </div>
      <div className="card__image_container">
        <img src={home2} alt="Burger image 2" />
      </div>
    </Card>
  );
};

export default BannerCard;
