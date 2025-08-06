import React from "react";
import Header from "./Header";
import Board from "./Board";
import WinningTile from "./WinningTile";
import { useGameHook } from "./context/Game";
import PreStep from "./PreStep";
import { AnimatePresence, motion } from "motion/react";

function HomeScreen() {
  const { step } = useGameHook();

  console.log(step);

  return (
    <div className=" flex flex-col items-center gap-[2rem] w-fit justify-center m-auto   h-full overflow-hidden">
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
