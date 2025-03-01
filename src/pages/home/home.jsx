import React, { useState } from "react";
import { Link } from "react-router-dom";
import Panelpizza from "../../assets/panelpizza.png";
import Olib from "../../assets/homeolib.png";
import Zal from "../../assets/homezal.png";
import Uzb from "../../assets/uz.png";
import RU from "../../assets/ru.png";
import Eng from "../../assets/eng.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Home = () => {
  const language = (e) => {
   
  };
  const [til, settil] = useState(1,"uz");
  const tilfunc = (btnid,leng) => {
    settil(btnid);
   
    i18next.changeLanguage(leng);
  };
   const { t } = useTranslation();
  return (
    <div className="container flex items-center justify-center flex-col h-screen pt-5">
      <div>
        <h1 className="text-[50px] font-semibold">{t("home.buyurtma")}</h1>
      </div>
      <div className="flex items-center  gap-12">
        <Link to={"/zal"} className="mt-8">
          <div className="flex items-center justify-between flex-col  bg-neutral-200/50 py-2 rounded-lg px-10">
            <img src={Zal} alt="" className="w-[240px] h-[240px]" />
            <h1 className="text-[25px] font-medium">{t('home.zal')}</h1>
          </div>
        </Link>
        <Link to={"/saboy"} className="mt-8">
          <div className="flex items-center justify-between flex-col bg-neutral-200/50 py-2 rounded-lg px-10">
            <img src={Olib} alt="" className="w-[240px] h-[240px]" />
            <h1 className="text-[25px] font-medium">{t('home.ketish')}</h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center mt-[55px]">
        <div className=" relative  flex items-center justify-between  gap-5 rounded-xl text-[20px]">
          <button
            className="text-[25px] bg-slate-200 px-[100px] py-3 flex items-center gap-3 font-medium "
            style={{ border:til==1 ? "2px solid black" : "none" }}
            value="uz"
            onClick={() => tilfunc(1,"uz")}
          >
            <img className="w-[35px] h-[35px]" src={Uzb} alt="" /> UZB
          </button>

          <button
            className="text-[25px] bg-slate-200 px-[100px] py-3 flex items-center gap-3 font-medium "
            style={{ border: til === 2 ? "2px solid black" : "none" }}
            value="ru"
            onClick={() => tilfunc(2,"ru")}
          >
            <img className="w-[35px] h-[35px]" src={RU} alt="" /> Pyc
          </button>
          <button
            className="text-[25px] bg-slate-200 px-[100px] py-3 flex items-center gap-3 font-medium "
            value="eng"
            style={{ border: til === 3 ? "2px solid black" : "none" }}
            onClick={() => tilfunc(3,"eng")}
          >
            <img className="w-[35px] h-[35px]" src={Eng} alt="" /> ENG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
