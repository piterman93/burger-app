import React from "react";

import "../../../styles/HomeGallery.scss";

import gallery1 from "../../../images/gallery1.jpg";
import gallery2 from "../../../images/gallery2.jpg";
import gallery3 from "../../../images/gallery3.jpg";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const HomeGallery: React.FC = () => {
  return (
    <div className="home__gallery">
      <div className="home__gallery_description">
        <div className="description__wrapper">
          <h1>GALERIA</h1>
          <p>
            Głodny? Zobacz zdjęcia naszych przepysznych burgerów i odwiedź nasz
            lokal już dziś!
          </p>
          <Link to="/gallery">
            <button className="button button__menu">
              <span>GALERIA</span>
              <div className="arrow">
                Let's go!
                <ArrowRightAltIcon />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="home__gallery_images">
        <div className="image__wrapper">
          <img src={gallery1} alt="burger Bar 1" />
        </div>
        <div className="image__wrapper">
          <img src={gallery2} alt="burger Bar 2" />
        </div>
        <div className="image__wrapper">
          <img src={gallery3} alt="burger Bar 3" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
