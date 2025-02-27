import i18next from "i18next";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import Uzb from "../../assets/uz.png";
import Panelnew from "../../assets/panelnew.png";
import Panelfire from "../../assets/panelfire.png";
import Panelpizza from "../../assets/panelpizza.png";
import { useTranslation } from "react-i18next";
const Index = () => {
  const language = (e) => {
    i18next.changeLanguage(e);
  };
  const panel = [
    {
      id: 1,
      name: "new",
      img: Panelnew,
    },
    {
      id: 2,
      name: "mashhur",
      img: Panelfire,
    },
    {
      id: 3,
      name: "pizza",
      img: Panelpizza,
    },
    {
      id: 4,
      name: "pizza",
      img: Panelpizza,
    },
    {
      id: 5,
      name: "pizza",
      img: Panelpizza,
    },
    {
      id: 6,
      name: "pizza",
      img: Panelpizza,
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="w-[350px] bg-[#F9F8F1] flex items-center justify-center pt-12 h-full px-5">
      <div>
        <div>
          <div className="flex items-center justify-center">
            <select
              className="outline-none relative bg-slate-500 px-2 py-1 rounded-xl text-white text-[20px]"
              onChange={(e) => language(e.target.value)}
            >
              <option className="text-[20px]" value="uz">
                UZB
              </option>

              <option className="text-[20px]" value="ru">
                RU
              </option>
              <option className="text-[20px]" value="eng">
                ENG
              </option>
            </select>
          </div>
          <div>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <div className="   ">
                  {panel.map((panels) => (
                    <div
                      className="flex items-center mt-5 gap-2 snap-center"
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
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
