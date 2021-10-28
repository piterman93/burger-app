import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Start from "./components/layout/Start";

const App: React.FC = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowStartPage(false);
    }, 2500);
  }, []);

  return (
    <Router>
      {showStartPage && <Start />}
      <Layout />
    </Router>
  );
};

export default App;
