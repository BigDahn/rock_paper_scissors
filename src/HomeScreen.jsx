import React from "react";
import Header from "./Header";
import Board from "./Board";

function HomeScreen() {
  return (
    <div className=" flex flex-col items-center gap-[2rem] w-fit justify-center m-auto   h-full ">
      <Header />
      <Board />
    </div>
  );
}

export default HomeScreen;
