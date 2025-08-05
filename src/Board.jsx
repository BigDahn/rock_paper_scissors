import React from "react";

function Board() {
  return (
    <div className="w-[476px]  bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat h-[430px] ">
      <main className="grid grid-cols-1 justify-center place-items-center h-full w-full ">
        <section className="flex justify-between">
          <div className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[152px] h-[152px] rounded-full bg-[#4664F4] px-6 flex items-center justify-center">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center">
                <img src="/icon-paper.svg" />
              </div>
            </div>
          </div>
          <div className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[152px] h-[152px]  bg-[#EB9F0E] px-6 rounded-full flex items-center justify-center">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center">
                <img src="/icon-scissors.svg" />
              </div>
            </div>
          </div>
        </section>
        <main>
          <button className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[152px] h-[152px]  bg-[#DB2E4D] px-6 rounded-full flex items-center justify-center">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center">
                <img src="/icon-rock.svg" />
              </div>
            </div>
          </button>
        </main>
      </main>
    </div>
  );
}

export default Board;

//
