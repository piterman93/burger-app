import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../../styles/CompanyInfo.scss";

import { containerVariants } from "../../utils/constData";

const CompanyInfo: React.FC = () => {
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
      className="companyInfo__wrapper"
    >
      <h1>{t("ST83")}</h1>
      <div className="companyInfo__description">
        <h2>BurgerBar Gorlice</h2>
        <h3>{t("ST79")}</h3>
        <p>Henryka Sienkiewicza 2</p>
        <p>38-300 Gorlice</p>
        <p>{t("ST80")}</p>
        <h3>{t("ST81")}</h3>
        <p>Tel: +48735073060</p>
        <p>Email: burgerbar.gorlice@gmail.com</p>
        <h3>{t("ST82")}</h3>
        <p>7381893552</p>
      </div>
    </motion.div>
  );
};

export default CompanyInfo;
