import { useGameHook } from "./context/Game";
import { AnimatePresence } from "motion/react";

import Header from "./Header";
import Board from "./Board";
import WinningTile from "./WinningTile";
import PreStep from "./PreStep";
import Step from "./Step";

function HomeScreen() {
  const { step } = useGameHook();

  return (
    <div className=" flex flex-col items-center gap-[2rem] md:gap-[6rem] lg:gap-[3rem] w-screen md:w-full lg:w-fit lg:justify-center m-auto font-Barlow-Semi-Condensed  justify-start h-full pt-6  overflow-hidden">
      <Header />
      <AnimatePresence>
        {step === 1 && <Board />}
        {step === 2 && <PreStep />}

        {step === 3 && <Step />}
        {step === 4 && <WinningTile />}
      </AnimatePresence>
    </div>
  );
}

export default HomeScreen;
