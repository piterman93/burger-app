import React from "react";

import "../../../styles/AboutDescription.scss"

import ButtonLink from "../../UI/ButtonLink";

const AboutDescription: React.FC = () => {
  return (
    <div className="about__description">
      <div className="about__description_left">
        <h3>Dowiedz się więcej</h3>
        <h2>o naszej burgerowni</h2>
        <p>
          BurgerBar to restauracja na terenie Gorlic, która powstała z myślą o
          ludziach z zamiłowaniem do pysznego jedzenia. Naszą specjalności są
          burgery, których w obecnej ofercie posiadamy aż 12. Dodatkowo, w
          każdym miesiącu do menu dołączmy nasz autorski "burger miesiąca".
          Stawiamy na ciekawe i nowe połączenia (w szczególności burgery
          miesiąca), oraz jakość i swieżość skłądników, dzięki czemu nasi
          klienci mają okazję próbować smaków, których dotychczas nie znali. W
          naszej restauracji każdy znajdzie coś dla siebie. Oprócz klasycznych
          burgerów wołowych, w ofercie znajdują się również pozycje
          vegetariańskie. BurgerBar to miejsce, jakiego w Gorlicah brakowało.
          Sprawdź naszą ofertę i przekonaj się sam! "
        </p>
        <ButtonLink title="MENU" route="/menu" />
      </div>
      <div className="about__description_right">
        <div className="image__wrapper">
          <img
            src={require("../../../images/gallery/54.jpg").default}
            alt="BurgerBar"
          />
        </div>
        <div className="image__wrapper">
          <img
            src={require("../../../images/gallery/16.jpg").default}
            alt="BurgerBar"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
