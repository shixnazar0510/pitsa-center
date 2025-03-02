import React, { useState } from "react";
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
  const [data, setdata] = useState(false);
  const [count, setcount] = useState(1);
  return (
    <div>
      <div>
        <section>
          <div className=" flex  flex-col  px-5 pt-5">
            <div className="flex items-center justify-between gap-3">
              {" "}
              <hr className="bg-[#E5002B] h-1 w-full" />
              <h1 className="text-[50px] font-bold text-[#E5002B] text-center  ">
                Ichimlik
              </h1>{" "}
              <hr className="bg-[#E5002B] h-1 w-full" />
            </div>
            <div className="grid grid-cols-3 gap-5">
              {ichimliks.map((waters) => (
                <button onClick={() => setdata(waters)}>
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
                </button>
              ))}
            </div>
          </div>
          <div>
            {data && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-[60] ">
                <div
                  className=" bg-white/90 flex flex-col items-center p-1 w-[500px] pb-2 rounded-2xl relative"
                  key={data.id}
                >
                  <button
                    onClick={() => setdata((data) => !data)}
                    className="text-[22px] font-medium bg-red-600 px-3 py-2 text-white rounded-3xl absolute top-2 right-2"
                  >
                    X
                  </button>
                  <img src={data.img} alt="" />
                  <div className="flex flex-col items-center gap-5">
                    <p className="text-[30px]  font-semibold text-center">
                      {data.name}
                    </p>
                    <button className="text-[#E5002B] text-[32px] flex items-start gap-2 font-bold">
                      40 000 <span>sum</span>
                    </button>
                    <div className="flex items-center justify-between rounded-lg border-2 border-gray-900">
                        <button onClick={()=>setcount(count+1)} disabled={count==10} className="bg-gray-900 text-white text-[35px] font-semibold px-5 py-3">+</button>
                        <span  className=" text-[30px] font-semibold px-5 py-3">{count}</span>
                        <button onClick={()=>setcount(count-1)} disabled={count==1} className="bg-gray-900 text-white text-[35px] font-semibold px-5 py-3">-</button>
                    </div>
                    <button className="bg-[#E5002B] text-[30px] text-white px-2 py-1 flex items-start gap-2 font-medium rounded-lg">
                      Korzinaga
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
