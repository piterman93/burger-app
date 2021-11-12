import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../../styles/PrivacyPolicy.scss";

import { containerVariants } from "../../utils/constData";

const PrivacyPolicy: React.FC = () => {
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
      className="privacyPolicy__wrapper"
    >
      <h1>{t("ST88")}</h1>
      <div className="privacyPolicy__description">
        <h2>{t("ST89")}</h2>
        <h3>{t("ST90")}</h3>
        <p>{t("ST91")}</p>

        <h3>{t("ST92")}</h3>
        <p>{t("ST93")}</p>
        <p>{t("ST94")}</p>
        <h3>{t("ST95")}</h3>
        <p>{t("ST96")}</p>
        <ul>
          <li>✔ {t("ST97")},</li>
          <li>✔ {t("ST98")}</li>
          <li>✔ {t("ST99")}</li>
          <li>✔ {t("ST100")}</li>
          <li>✔ {t("ST101")}</li>
          <li>✔ {t("ST102")}</li>
          <li>✔ {t("ST103")}</li>
        </ul>
        <p>{t("ST104")}</p>
        <h3>{t("ST105")}</h3>
        <p>{t("ST106")}</p>
        <h3>{t("ST107")}</h3>
        <ul>
          <li>✔ {t("ST108")}</li>
          <li>✔ {t("ST109")}</li>
          <li>✔ {t("ST110")}</li>
        </ul>
        <h4>{t("ST111")}</h4>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
