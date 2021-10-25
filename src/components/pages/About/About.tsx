import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "../../../styles/About.scss";

import AboutDescription from "./AboutDescription";
import AboutFooterItem from "./AboutFooterItem";

import { containerVariants } from "../../../utils/constData";
import { AboutFooterItemsData } from "../../../utils/constData";

const About: React.FC = () => {
  const footerItems = AboutFooterItemsData.map((item) => (
    <AboutFooterItem
      key={item.id}
      title={item.title}
      href={item.href}
      className={item.className}
    />
  ));

  useEffect(() => {
    window.scrollTo(0, 470);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about__wrapper"
    >
      <h1>O NAS</h1>
      <AboutDescription />
      <div className="about__footer">
        <div className="about__footer_wrapper">{footerItems}</div>
      </div>
    </motion.div>
  );
};

export default About;
