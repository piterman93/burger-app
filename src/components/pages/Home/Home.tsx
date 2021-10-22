import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { containerVariants } from "../../../utils/constData";

import BannerCard from "./BannerCard";
import HomeAbout from "./HomeAbout";
import HomeMenu from "./HomeMenu";
import HomeGallery from "./HomeGallery";
import HomeContact from "./HomeContact";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="home__wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BannerCard />
      <HomeAbout />
      <HomeMenu />
      <HomeGallery />
      <HomeContact />
    </motion.div>
  );
};

export default Home;
