import React from "react";

function Header() {
  return (
    <div className="w-[700px] h-[150px] border rounded-2xl border-gray-400 flex items-center justify-between px-6 ">
      <img src="/logo.svg" />
      <div className="w-[150px] h-[114px] bg-linear-to-r from-[#F3F3F3] to-[#FFFFFF] rounded-lg flex flex-col items-center justify-center">
        <h3>SCORE</h3>
        <h4 className="font-bold text-[64px] leading-[64px] text-[#565468]">
          12
        </h4>
      </div>
    </div>
  );
}

export default Header;
