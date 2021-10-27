import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../../styles/FooterHours.scss";

import { weekDays } from "../../../utils/constData";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FooterHours: React.FC = () => {
  const { t } = useTranslation();
  const [showWeek, setShowWeek] = useState(false);

  const weekDay = new Date().getDay();
  const todayDay = weekDays.find((day) => day.id === weekDay);

  const showWeekHandler = () => {
    setShowWeek(!showWeek);
  };

  const wholeWeek = weekDays.map((day) => {
    let activeDay = "";
    if (day.id === weekDay) {
      activeDay = "color";
    }
    return (
      <div
        className={`day ${activeDay} ${!showWeek ? "inactive" : ""}`}
        key={day.id}
      >
        <span className="left">{t(day.title)}</span>
        <span>{day.hours}</span>
      </div>
    );
  });

  return (
    <div className="footer__hours">
      <h3>{t("ST2")}</h3>
      <span id="underline" />
      <div className="accordion">
        <div className="today">
          <span className={`left ${showWeek ? "inactive" : ""}`}>
            {t("ST3")}
          </span>
          <span className={`${showWeek ? "inactive" : ""}`}>
            {todayDay?.hours}
          </span>
          <button onClick={showWeekHandler} aria-label="toggle accordion">
            <KeyboardArrowDownIcon
              className={`icon ${showWeek ? "active" : ""}`}
            />
          </button>
        </div>
        <div className="week">{wholeWeek}</div>
      </div>
    </div>
  );
};
export default FooterHours;
