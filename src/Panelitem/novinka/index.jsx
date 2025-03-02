import React from "react";
import Novinka from "../../assets/panelpizza.png";
const Index = () => {
  return (
    <div>
      <section className=" ">
        <div className="p-5">
          <div className="" >
            <h1 className="text-[50px] font-bold">Yangilik</h1>
            <div className="flex items-center justify-between gap-12 px-5 py-10 bg-[#E5002B]">
              <img src={Novinka} alt="" />
              <div >
                <p className="text-[25px] text-white font-medium">Pitsa goshtli sabzavotli</p>
                <button className="px-5 py-3 bg-rose-800 hover:bg-rose-900/50 rounded-xl text-[18px] text-white font-medium mt-5">
                        Korzina
                      </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
