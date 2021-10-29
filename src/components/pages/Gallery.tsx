import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";

import "../../styles/Gallery.scss";

import { galleryImages } from "../../utils/constData";
import { containerVariants } from "../../utils/constData";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const galleryContent = galleryImages.map((image) => (
    <div className="image__container" key={image.id}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  useEffect(() => {
    const width = document.body.clientWidth;
    if (width < 1200) {
      window.scrollTo(0, 0);
    } else window.scrollTo(0, 490);
  }, []);

  return (
    <motion.div
      className="gallery"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>{t("ST19")}</h1>
      <SRLWrapper>
        <div className="gallery__wrapper">{galleryContent}</div>
      </SRLWrapper>
    </motion.div>
  );
};

export default Gallery;
