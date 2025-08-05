import React from "react";

function PreStep() {
  return (
    <div className="w-full h-[400px]  ">
      <main className="flex justify-between w-full ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            YOU PICKED
          </h3>
          <button className="w-[292px] h-[300px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[292px] h-[286px] rounded-full bg-[#4664F4] px-6 flex items-center justify-center shadow-[inset_0_-6px_0_#2A45C2]">
              <div className="bg-gray-300 w-[224px] h-[224px] rounded-full flex items-center justify-center shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-paper.svg" />
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            THE HOUSE PICKED
          </h3>
          <button className="w-[292px] h-[300px]  flex items-center justify-center ">
            <div className="bg-black/10 w-[224px] h-[224px] rounded-full "></div>
          </button>
        </div>
      </main>
    </div>
  );
}

export default PreStep;
