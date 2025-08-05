import React from "react";
import Header from "./Header";
import Board from "./Board";
import WinningTile from "./WinningTile";
import { useGameHook } from "./context/Game";
import PreStep from "./PreStep";

function HomeScreen() {
  const { step } = useGameHook();

  return (
    <div className=" flex flex-col items-center gap-[2rem] w-fit justify-center m-auto   h-full ">
      <Header />
      {step === 1 && <Board />}
      {step === 2 && <PreStep />}
      {step === 3 && <WinningTile />}
    </div>
  );
}

export default HomeScreen;

{
  /* {UserOption.length < 1 && ComputerOption < 1 && <Board />}
      {UserOption.length >= 1 && ComputerOption && <WinningTile />} */
}
