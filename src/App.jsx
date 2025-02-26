import React from "react";
import Panel from "./Components/Panel";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";

const App = () => {
  return (
    <div>
      <div className="flex items-center">
        <Panel />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
