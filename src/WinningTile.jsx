import { useEffect } from "react";
import { useGameHook } from "./context/Game";
import { motion } from "motion/react";

function WinningTile() {
  const { UserOption, Outcome, dispatch, ComputerOption, score } =
    useGameHook();

  const { image, color } = UserOption[0];
  const { image: ComputerImage, color: ComputerColor } = ComputerOption;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 900,
      }}
      animate={{
        opacity: 1,
        y: 10,
      }}
      exit={{
        opacity: 0,
        y: 900,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-fit  h-[430px]  "
    >
      <main className="flex  gap-[3rem] flex-col lg:flex-row  justify-center ">
        <div className=" order-last lg:hidden flex flex-col lg:justify-center gap-5 items-center px-7">
          <h3 className="font-bold text-[56px] font-Barlow-Semi-Condensed  text-[#FFFFFF]">
            {Outcome}
          </h3>
          <button
            className={`${
              Outcome === "YOU LOSE"
                ? "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#DB2E4D] tracking-[2.5px] cursor-pointer"
                : "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#3B4262] tracking-[2.5px]  cursor-pointer"
            }`}
            onClick={() => dispatch({ type: "replay" })}
          >
            PLAY AGAIN
          </button>
        </div>
        <div className="flex justify-between gap-[2rem] md:gap-[1rem] lg:gap-[2rem]  ">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold text-[15px] leading-[32px] tracking-[1.88px] md:text-[22px] lg:leading-[32px] md:tracking-[3px] text-[#FFFFFF] md:order-first order-last">
              YOU PICKED
            </h3>
            <button className="md:w-[292px] md:h-[300px] w-[130px] h-[133px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
              <div
                className={`w-[129px] h-[126px] md:w-[224px] md:h-[224px] rounded-full  px-6 flex items-center justify-center ${color.bgColor} ${color.shadow}`}
              >
                <div className="bg-gray-300  w-[110px] h-[80px] md:w-[224px] md:h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                  <img
                    src={image}
                    className="w-[41px] h-[41px] md:w-[60px] md:h-[60px]"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className=" hidden lg:flex md:flex-col lg:justify-center gap-5 items-center px-7">
            <h3 className="font-bold text-[56px] font-Barlow-Semi-Condensed  text-[#FFFFFF]">
              {Outcome}
            </h3>
            <button
              className={`${
                Outcome === "YOU LOSE"
                  ? "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#DB2E4D] tracking-[2.5px] cursor-pointer"
                  : "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#3B4262] tracking-[2.5px]  cursor-pointer"
              }`}
              onClick={() => dispatch({ type: "replay" })}
            >
              PLAY AGAIN
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold text-[15px] leading-[32px] tracking-[1.88px] md:text-[22px] md:leading-[32px] md:tracking-[3px] text-[#FFFFFF] order-last md:order-first">
              THE HOUSE PICKED
            </h3>
            <button className="w-[130px] h-[133px] md:w-[292px] md:h-[300px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
              <div
                className={` w-[129px] h-[126px]  md:w-[224px] md:h-[224px] rounded-full  px-6 flex items-center justify-center  ${ComputerColor.bgColor} ${ComputerColor.shadow}`}
              >
                <div className="bg-gray-300 w-[110px] h-[80px] md:w-[224px] md:h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                  <img
                    src={ComputerImage}
                    className="w-[41px] h-[41px] md:w-[60px] md:h-[60px]"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default WinningTile;
