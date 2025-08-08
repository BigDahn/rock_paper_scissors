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
    <div className=" flex flex-col items-center gap-[3rem] lg:gap-[2rem] w-screen lg:w-fit lg:justify-center m-auto font-Barlow-Semi-Condensed  justify-start h-full pt-6   overflow-hidden">
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
