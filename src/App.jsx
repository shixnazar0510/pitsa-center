import React from "react";
import Panel from "./Components/Panel";
import Navbar from "./Components/Navbar";
import Panelitem1 from './Panelitem/novinka' 
import { Route, Routes } from "react-router-dom";
import Zal from "./pages/zal/zal.jsx";
import Saboy from "./pages/saboy/saboy.jsx";
import Home from "./pages/home/home.jsx";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route  path="/zal" element={<Zal />} >
        
        </Route><Route  path="/new" element={<Panelitem1 />} />
        <Route  path="/saboy" element={<Saboy />} />
      </Routes>
    </div>
  );
};

export default App;
