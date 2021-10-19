import React from "react";

import "../../../styles/Home.scss";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Card from "../../UI/Card";

import BannerCard from "./BannerCard";
import HomeAbout from "./HomeAbout";
// import ostry from "../../../images/ostry.jpg";

import { AboutMenuItemsData } from "../../../utils/constData";
import MenuItem from "../../../components/UI/MenuItem";
import HomeMenu from "./HomeMenu";

const Home: React.FC = () => {
  return (
    <div className="home__wrapper">
      <BannerCard />
      <HomeAbout />
      <HomeMenu />
    </div>
  );
};

export default Home;
