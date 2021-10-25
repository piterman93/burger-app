import React, { useEffect } from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";

import "../../styles/Gallery.scss";

import { galleryImages } from "../../utils/constData";
import { containerVariants } from "../../utils/constData";

const Gallery: React.FC = () => {
  const galleryContent = galleryImages.map((image) => (
    <div className="image__container" key={image.id}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  useEffect(() => {
    window.scrollTo(0, 470);
  }, []);

  return (
    <motion.div
      className="gallery"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>GALERIA:</h1>
      <SRLWrapper>
        <div className="gallery__wrapper">{galleryContent}</div>
      </SRLWrapper>
    </motion.div>
  );
};

export default Gallery;
