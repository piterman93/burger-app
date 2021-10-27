import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import "../../../styles/Map.scss";

const Map: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);

  const { t, i18n } = useTranslation();

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };
  return (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: 49.65463, lng: 21.16 }}>
      <Marker
        position={{ lat: 49.65463, lng: 21.16 }}
        onClick={showInfoHandler}
      ></Marker>
      {showInfo && (
        <InfoWindow
          position={{ lat: 49.65463, lng: 21.16 }}
          onCloseClick={showInfoHandler}
        >
          <div className="window__info">
            <h3>BurgerBar Gorlice</h3>
            <p>Henryka Sienkiewicza 2</p>
            <p>38-300 Gorlice</p>
            <p>{t("ST13")}</p>
            <a
              href="https://www.google.com/maps?ll=49.65463,21.16&z=17&t=m&hl=pl-PL&gl=US&mapclient=apiv3&cid=11482319422438351441"
              target="_blank"
              rel="noreferrer"
            >
              {t("ST14")}
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));
