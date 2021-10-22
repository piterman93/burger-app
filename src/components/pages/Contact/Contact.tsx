import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from "react-google-maps";

import "../../../styles/Contact.scss";
import "../../../styles/FooterContact.scss";

import { containerVariants } from "../../../utils/constData";
import ContactCard from "./ContactCard";
import { WrappedMap } from "./Map";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 520);
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
        <h1>Zapraszamy do kontaktu!</h1>
        <h2>Masz pytania?</h2>
        <p>Napisz do nas lub zadźwoń - chętnie odpowiemy!</p>
      </div>
      <div className="info">
        <ContactCard />
      </div>
      <div className="map">
        <h2>Mapa dojazdu</h2>
        <div className="map__wrapper">
          <WrappedMap
            googleMapURL={URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `50vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></WrappedMap>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
