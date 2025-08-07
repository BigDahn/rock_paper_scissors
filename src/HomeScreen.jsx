import React from "react";
import Header from "./Header";
import Board from "./Board";
import WinningTile from "./WinningTile";
import { useGameHook } from "./context/Game";
import PreStep from "./PreStep";
import { AnimatePresence, motion } from "motion/react";

function HomeScreen() {
  const { step } = useGameHook();

  return (
    <div className=" flex flex-col items-center gap-[3rem] lg:gap-[2rem] w-screen lg:w-fit lg:justify-center m-auto  justify-start h-full pt-6   overflow-hidden">
      <Header />
      <AnimatePresence>
        {step === 1 && <Board />}
        {step === 2 && <PreStep />}

        {step === 3 && (
          <div>
            <WinningTile />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomeScreen;

{
  /* {UserOption.length < 1 && ComputerOption < 1 && <Board />}
      {UserOption.length >= 1 && ComputerOption && <WinningTile />}
        {step === 3 && <WinningTile />} */
}
