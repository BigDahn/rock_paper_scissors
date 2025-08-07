import React from "react";
import { useGameHook } from "./context/Game";

function Header() {
  const { score } = useGameHook();
  return (
    <div className="w-[311px] h-[96px] lg:w-[700px] lg:h-[150px] border rounded-md lg:rounded-2xl border-gray-400 flex items-center justify-between px-4 lg:px-6 ">
      <img src="/logo.svg" className="w-[83px] h-[48px]" />
      <div className="lg:w-[150px] lg:h-[114px] w-[80px] h-[72px] bg-linear-to-r from-[#F3F3F3] to-[#FFFFFF] rounded-lg flex flex-col items-center justify-center">
        <h3 className="text-[#2A45C2] font-bold text-[10px] tracking-[1.56px] ">
          SCORE
        </h3>
        <h4 className="font-bold  text-[40px] lg:text-[64px] lg:leading-[64px] leading-[40px] text-[#565468]">
          {score}
        </h4>
      </div>
    </div>
  );
}

export default Header;
