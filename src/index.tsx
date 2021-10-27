import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";

import "./i18next";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
    ,
  </Suspense>,
  document.getElementById("root")
);
