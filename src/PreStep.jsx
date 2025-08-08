import { useEffect } from "react";
import { useGameHook } from "./context/Game";
import { motion } from "motion/react";

function PreStep() {
  const { UserOption, dispatch } = useGameHook();

  const { image, color } = UserOption[0];

  function computerPicks() {
    const ComputersTurn = Math.floor(Math.random() * 3);
    dispatch({ type: "computer", payload: ComputersTurn });
  }
  useEffect(() => {
    setTimeout(() => {
      computerPicks();
    }, 1220);
  });
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 600,
      }}
      animate={{
        opacity: 1,
        x: 10,
      }}
      exit={{
        opacity: 0,
        x: 600,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-full h-[282px] md:h-[430px]"
    >
      <main className="flex justify-evenly gap-[2rem] md:justify-between md:w-full ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold md:text-[22px] md:leading-[32px] md:tracking-[3px] text-[15px] leading-[32px] tracking-[1.88px] text-[#FFFFFF] order-last md:order-first">
            YOU PICKED
          </h3>
          <button className="md:w-[292px] md:h-[300px] w-[130px] h-[133px]   flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div
              className={`w-[129px] h-[126px] md:w-[224px] md:h-[224px] rounded-full  px-6 flex items-center justify-center ${color.bgColor} ${color.shadow}`}
            >
              <div className="bg-gray-300 w-[110px] h-[80px] md:w-[224px] md:h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                <img
                  src={image}
                  className="w-[41px] h-[41px] md:w-[60px] md:h-[60px]"
                />
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[15px] leading-[32px] tracking-[1.88px] md:text-[22px] md:leading-[32px] md:tracking-[3px] text-[#FFFFFF] order-last md:order-first">
            THE HOUSE PICKED
          </h3>
          <button className="md:w-[292px] md:h-[300px] w-[130px] h-[133px]  flex items-center justify-center ">
            <div className="bg-black/10 w-[129px] h-[126px] md:w-[224px] md:h-[224px] rounded-full "></div>
          </button>
        </div>
      </main>
    </motion.div>
  );
}

export default PreStep;
