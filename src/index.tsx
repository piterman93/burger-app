import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";

import "./styles/index.scss";

import LoadingPage from "./components/UI/LoadingPage";

import "./i18next";

ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Suspense>,
  document.getElementById("root")
);
