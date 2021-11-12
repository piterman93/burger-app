import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "../../../styles/Contact.scss";
import "../../../styles/FooterContact.scss";

import { containerVariants } from "../../../utils/constData";
import ContactCard from "./ContactCard";

import Map from "../../../images/mapa.jpg";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const width = document.body.clientWidth;
    if (width < 1200) {
      window.scrollTo(0, 0);
    } else window.scrollTo(0, 490);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="contact__wrapper"
    >
      <div className="description">
        <h1>{t("ST10")}</h1>
        <h2>{t("ST11")}</h2>
        <p>{t("ST12")}</p>
      </div>
      <div className="info">
        <ContactCard />
      </div>
      <div className="map">
        <h2>{t("ST69")}</h2>
        <div className="map__wrapper">
          <img src={Map} alt="map" />
        </div>
        <button className="button button__menu">
          <a
            href="https://www.google.com/maps/place/BurgerBar+Gorlice/@49.6546212,21.1578137,17z/data=!3m1!4b1!4m5!3m4!1s0x473dc78dfee29261:0x9f5964adc401a251!8m2!3d49.6546212!4d21.1600024"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t("ST119")}</span>
            <div className="arrow">
              Let's go!
              <ArrowRightAltIcon />
            </div>
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;
