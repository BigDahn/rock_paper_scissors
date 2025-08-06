import React, { useEffect } from "react";
import { useGameHook } from "./context/Game";

function PreStep() {
  const { UserOption, dispatch, Options, ComputerOption } = useGameHook();
  //console.log(step);
  const { image, color } = UserOption[0];

  function ses() {
    const ComputersTurn = Math.floor(Math.random() * 3);
    // dispatch({ type: "computer", payload: ComputersTurn });
  }
  useEffect(() => {
    setTimeout(() => {
      ses();
    }, 1000);
  });
  return (
    <div className="w-full h-[430px]">
      <main className="flex justify-between w-full ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            YOU PICKED
          </h3>
          <button className="w-[292px] h-[300px]   flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div
              className={`w-[224px] h-[224px] rounded-full  px-6 flex items-center justify-center ${color.bgColor} ${color.shadow}`}
            >
              <div className="bg-gray-300 w-[224px] h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                <img src={image} />
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
