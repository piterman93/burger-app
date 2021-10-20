import React, { useState } from "react";

import "../../../styles/FooterHours.scss";

import { weekDays } from "../../../utils/constData";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FooterHours: React.FC = () => {
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
      <div className={`day ${activeDay} ${!showWeek ? "inactive" : ""}`}>
        <span className="left">{day.title}</span>
        <span>{day.hours}</span>
      </div>
    );
  });

  return (
    <div className="footer__hours">
      <h3>Godziny otwarcia:</h3>
      <span id="underline" />
      <div className="accordion">
        <div className="today">
          <span className={`left ${showWeek ? "inactive" : ""}`}>
            Dzisiaj:{" "}
          </span>
          <span className={`${showWeek ? "inactive" : ""}`}>
            {todayDay?.hours}
          </span>
          <button onClick={showWeekHandler}>
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
