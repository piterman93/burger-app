import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../../../styles/About.scss";

import AboutDescription from "./AboutDescription";
import AboutFooterItem from "./AboutFooterItem";

import { containerVariants } from "../../../utils/constData";
import { AboutFooterItemsData } from "../../../utils/constData";

const About: React.FC = () => {
  const { t } = useTranslation();

  const footerItems = AboutFooterItemsData.map((item) => (
    <AboutFooterItem
      key={item.id}
      title={t(item.title)}
      href={item.href}
      className={item.className}
    />
  ));

  useEffect(() => {
    window.scrollTo(0, 490);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about__wrapper"
    >
      <h1>{t("ST6")}</h1>
      <AboutDescription />
      <div className="about__footer">
        <div className="about__footer_wrapper">{footerItems}</div>
      </div>
    </motion.div>
  );
};

export default About;
