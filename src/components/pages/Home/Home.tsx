import React from "react";

import BannerCard from "./BannerCard";
import HomeAbout from "./HomeAbout";
import HomeMenu from "./HomeMenu";
import HomeGallery from "./HomeGallery";
import HomeContact from "./HomeContact";

const Home: React.FC = () => {
  return (
    <div className="home__wrapper">
      <BannerCard />
      <HomeAbout />
      <HomeMenu />
      <HomeGallery />
      <HomeContact />
    </div>
  );
};

export default Home;
