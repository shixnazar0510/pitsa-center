import React from "react";
import Panel from "./Components/Panel";
import Navbar from "./Components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";

const App = () => {
  return (
    <div className="scroll-m-0 snap-none">
      <div className="flex items-start justify-between">
        <Panel />
        <div className="container bg-[#F9F8F6]/50">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
