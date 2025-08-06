import { useGameHook } from "./context/Game";

function Board() {
  const { UserOption, dispatch } = useGameHook();

  function userClick(name) {
    dispatch({ type: "user", payload: name });
  }

  return (
    <div className="w-[476px]  bg-[url(/bg-triangle.svg)] bg-center bg-no-repeat h-[430px] ">
      <main className="grid grid-cols-1 justify-center place-items-center h-full w-full ">
        <section className="flex justify-between">
          <button
            className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full"
            onClick={() => userClick("paper")}
            disabled={UserOption.length >= 1}
          >
            <div className="w-[152px] h-[152px] rounded-full bg-[#4664F4] px-6 flex items-center justify-center shadow-[inset_0_-6px_0_#2A45C2]">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-paper.svg" />
              </div>
            </div>
          </button>
          <button
            className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full"
            onClick={() => userClick("scissors")}
            disabled={UserOption.length >= 1}
          >
            <div className="w-[152px] h-[152px]  bg-[#EB9F0E] px-6 rounded-full flex items-center justify-center shadow-[inset_0_-6px_0_#C76C1B]">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-scissors.svg" />
              </div>
            </div>
          </button>
        </section>
        <div>
          <button
            className="w-[198px] h-[203px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full"
            onClick={() => userClick("rock")}
            disabled={UserOption.length >= 1}
          >
            <div className="w-[152px] h-[152px]  bg-[#DB2E4D] px-6 rounded-full flex  items-center justify-center shadow-[inset_0_-6px_0_#9D1634]  ">
              <div className="bg-gray-300 w-[152px] h-[105px] rounded-full flex items-center justify-center  shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-rock.svg" />
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Board;

//
