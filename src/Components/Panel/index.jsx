import React from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PanelNovinka from "../../Panelitem/novinka";
import Ichimlik from "../../Panelitem/icimlik";
import Pitsa from "../../Panelitem/pitsa";
import Burger from "../../Panelitem/burger";
import Navbar from "../Navbar";

import Panelburger from "../../assets/panelburger.png";
import Panelwater from "../../assets/panelwater.png";
import Pizza from "../../assets/panelpizza.png";

const Index = () => {
  const panel = [
    {
      id: 1,
      name: "pizza",
      img: Pizza,
    },
    {
      id: 2,
      name: "burger",
      img: Panelburger,
    },
    {
      id: 3,
      name: "new",
      img: Panelburger,
    },
    {
      id: 4,
      name: "water",
      img: Panelwater,
    },
    {
      id: 5,
      name: "pizza",
      img: Panelburger,
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="scroll-smooth">
      <div className="flex items-start gap-5 z-40">
        <div className="sticky left-0 z-30 top-[11%] max-w-[350px] w-full flex items-start justify-center  max-h-screen  flex-col px-5 overflow-y-auto scrolling-touch panel_scrool">
          {panel.map((panels) => (
            <a href={`#${panels.name}`} key={panels.id}>
              <div className="flex items-center mt-5 gap-2 hover:scale-x-105 ">
                <img
                  src={panels.img}
                  alt={panels.name}
                  className="w-[100px] h-[100px]"
                />
                <h2 className="font-bold text-[25px] text-black">
                  {t(`panel.${panels.name}`)}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <div className="w-[80%] bg-gray-300 container  panel_scrool overflow-y-auto h-screen">
          <Navbar />

          {/* <PanelNovinka id="news" /> */}

          <div id="pizza">
            <Pitsa />
          </div>
          <div id="burger">
            {" "}
            <Burger />
          </div>
          <div id="water">
            <Ichimlik />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
