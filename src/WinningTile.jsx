import { useEffect } from "react";
import { useGameHook } from "./context/Game";

function WinningTile() {
  const { UserOption, Outcome, dispatch, ComputerOption, score } =
    useGameHook();

  console.log(score);
  const user = UserOption[0].name;
  const computer = ComputerOption?.name;

  function checkWinner(user, computer) {
    if (user === "scissors" && computer === "paper") {
      return dispatch({ type: "score", payload: "You Win" });
    }
    if (user === "paper" && computer === "rock") {
      return dispatch({ type: "score", payload: "You Win" });
    }
    if (user === "rock" && computer === "scissors") {
      return dispatch({ type: "score", payload: "You Win" });
    }
    if (computer === "paper" && user === "rock") {
      return dispatch({ type: "score", payload: "You Lose" });
    }
    if (computer === "scissors" && user === "paper") {
      return dispatch({ type: "score", payload: "You Lose" });
    }
    if (computer === "rock" && user === "scissors") {
      return dispatch({ type: "score", payload: "You Lose" });
    }
    return dispatch({ type: "score", payload: "Draw" });
  }

  useEffect(() => {
    checkWinner(user, computer);
  }, []);

  //checkWinner(UserOption[0].name, ComputerOption?.name);

  // console.log(Outcome);
  return (
    <div className="w-full h-[400px]  ">
      <main className="flex justify-between w-full ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            YOU PICKED
          </h3>
          <button className="w-[292px] h-[300px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[292px] h-[286px] rounded-full bg-[#4664F4] px-6 flex items-center justify-center shadow-[inset_0_-6px_0_#2A45C2]">
              <div className="bg-gray-300 w-[224px] h-[224px] rounded-full flex items-center justify-center shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-paper.svg" />
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center px-7">
          <h3 className="font-bold text-[56px]  text-[#FFFFFF]">{Outcome}</h3>
          <button
            className="w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#3B4262] cursor-pointer"
            onClick={() => dispatch({ type: "replay" })}
          >
            PLAY AGAIN
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            THE HOUSE PICKED
          </h3>
          <button className="w-[292px] h-[300px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div className="w-[292px] h-[286px] rounded-full bg-[#4664F4] px-6 flex items-center justify-center shadow-[inset_0_-6px_0_#2A45C2]">
              <div className="bg-gray-300 w-[224px] h-[224px] rounded-full flex items-center justify-center shadow-[inset_0_6px_0_0_#BABFD4]">
                <img src="/icon-paper.svg" />
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}

export default WinningTile;
