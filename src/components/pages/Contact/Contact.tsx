import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../../../styles/Contact.scss";
import "../../../styles/FooterContact.scss";

import { containerVariants } from "../../../utils/constData";
import ContactCard from "./ContactCard";
import { WrappedMap } from "./Map";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 490);
  }, []);

  const URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`;

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
          <WrappedMap
            googleMapURL={URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `60vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></WrappedMap>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
