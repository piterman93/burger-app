import React from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/HomeContact.scss";

import ButtonLink from "../../UI/ButtonLink";

const HomeContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home__contact">
      <div className="home__contact_wrapper">
        <h1>{t("ST18")}</h1>
        <ButtonLink title={t("ST10")} route="/contact" />
      </div>
    </div>
  );
};

export default HomeContact;
