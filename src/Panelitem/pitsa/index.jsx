import React from "react";
import Novinka from "../../assets/panelpizza.png";

const Index = () => {
  const ichimliks = [
    {
      id: 1,
      name: "new",
      img: Novinka,
    },
    {
      id: 2,
      name: "new",
      img: Novinka,
    },
    {
      id: 3,
      name: "new",
      img: Novinka,
    },
    {
      id: 4,
      name: "new",
      img: Novinka,
    },
    {
      id: 5,
      name: "new",
      img: Novinka,
    },
  ];
  return (
    <div>
      <div>
        <section>
          <div className=" flex  flex-col  px-5 pt-5">
            <div className="flex items-center justify-between gap-3">
              {" "}
              <hr className="bg-[#E5002B] h-1 w-full" />
              <h1 className="text-[50px] font-bold text-[#E5002B] text-center  ">
                Pitsa
              </h1>{" "}
              <hr className="bg-[#E5002B] h-1 w-full" />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {ichimliks.map((waters) => (
                <div
                  className=" bg-white flex flex-col items-center p-1 pb-2 rounded-2xl"
                  key={waters.id}
                >
                  <img src={waters.img} alt="" />
                  <div className="flex flex-col items-center">
                    <p className="text-[30px]  font-semibold text-center">
                      {waters.name}
                    </p>
                    <button className="text-[#E5002B] text-[32px] flex items-start gap-2 font-bold">
                      40 000 <span>sum</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
