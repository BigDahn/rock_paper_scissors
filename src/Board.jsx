import React from "react";

function Board() {
  return (
    <div className="w-[476px]  bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat h-[430px] ">
      <main className="grid grid-cols-1 justify-center place-items-center h-full w-full ">
        <section className="flex justify-between">
          <div className="w-[198px] h-[203px]  flex items-center justify-center">
            <div className="w-[152px] h-[152px] rounded-full bg-[#4664F4] px-6"></div>
          </div>
          <div className="w-[198px] h-[203px]  flex items-center justify-center">
            <div className="w-[152px] h-[152px] rounded-full bg-[#EB9F0E] px-6"></div>
          </div>
        </section>
        <main>
          <div className="w-[198px] h-[203px]  flex items-center justify-center">
            <div className="w-[152px] h-[152px] rounded-full bg-[#DB2E4D] px-6"></div>
          </div>
        </main>
      </main>
    </div>
  );
}

export default Board;

//
