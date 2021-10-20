import React from "react";
import LazyLoad from "react-lazyload";
import { SRLWrapper } from "simple-react-lightbox";

import "../../styles/Gallery.scss";

import { galleryImages } from "../../utils/constData";

const Gallery: React.FC = () => {
  const galleryContent = galleryImages.map((image) => (
    <LazyLoad>
      <div className="image__container" key={image.id}>
        <img src={image.src} alt={image.alt} />
      </div>
    </LazyLoad>
  ));

  return (
    <div className="gallery">
      <h1>GALERIA:</h1>
      <SRLWrapper>
        <div className="gallery__wrapper">{galleryContent}</div>
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
