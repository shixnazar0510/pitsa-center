import React from "react";
import "../../App.css";

// import Panelnew from "../../assets/panelnew.png";
// import Panelfire from "../../assets/panelfire.png";
// import Panelpizza from "../../assets/panelpizza.png";
import PanelNovinka from "../../Panelitem/novinka";
import Panelburger from "../../assets/panelburger.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Index = () => {
  const panel = [
    {
      id: 1,
      name: "new",
      img: Panelburger,
      itempath: "news",
    },
    {
      id: 2,
      name: "mashhur",
      img: Panelburger,
      itempath: "pitsa",
    },
    {
      id: 3,
      name: "pizza",
      img: Panelburger,
      itempath: "burger",
    },
    {
      id: 4,
      name: "pizza",
      img: Panelburger,
      itempath: "ichimlik",
    },
    {
      id: 5,
      name: "pizza",
      img: Panelburger,
      itempath: "news",
    },
    {
      id: 6,
      name: "pizza",
      img: Panelburger,
      itempath: "news",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="">
      <div>
        <div className="flex items-center">
          <div>
            <div className="w-[350px]  flex items-start justify-center pt-12 h-screen flex-col px-5  overflow-y-auto scrolling-touch  panel_scrool">
              {panel.map((panels) => (
                <a href={`/${panels.itempath}`}>
                  <div
                    className=" flex items-center mt-5 gap-2"
                    key={panels.id}
                  >
                    <img
                      src={panels.img}
                      alt=""
                      className="w-[100px] h-[100px]"
                    />
                    <h2 className="font-bold text-[25px] text-black">
                      {t(`panel.${panels.name}`)}
                    </h2>
                  </div>{" "}
                </a>
              ))}
            </div>
          </div>
          <div className="scroll-smooth">
            <PanelNovinka id="news" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
