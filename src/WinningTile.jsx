import { useEffect } from "react";
import { useGameHook } from "./context/Game";

function WinningTile() {
  const { UserOption, Outcome, dispatch, ComputerOption, score } =
    useGameHook();

  const { name: UserChoice, image, color } = UserOption[0];
  const {
    name: ComputerChoice,
    image: ComputerImage,
    color: ComputerColor,
  } = ComputerOption;

  console.log(score);

  function checkWinner(user, computer) {
    if (user === "scissors" && computer === "paper") {
      return dispatch({ type: "score", payload: "YOU WIN" });
    }
    if (user === "paper" && computer === "rock") {
      return dispatch({ type: "score", payload: "YOU WIN" });
    }
    if (user === "rock" && computer === "scissors") {
      return dispatch({ type: "score", payload: "YOU WIN" });
    }
    if (computer === "paper" && user === "rock") {
      return dispatch({ type: "score", payload: "YOU LOSE" });
    }
    if (computer === "scissors" && user === "paper") {
      return dispatch({ type: "score", payload: "YOU LOSE" });
    }
    if (computer === "rock" && user === "scissors") {
      return dispatch({ type: "score", payload: "YOU LOSE" });
    }
    return dispatch({ type: "score", payload: "DRAW" });
  }
  useEffect(() => {
    checkWinner(UserChoice, ComputerChoice);
  }, []);
  //checkWinner(UserOption[0].name, ComputerOption?.name);

  // console.log(Outcome);
  return (
    <div className="w-full h-[430px]  ">
      <main className="flex justify-between w-full ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h3 className="font-bold text-[22px] leading-[32px] tracking-[3px] text-[#FFFFFF]">
            YOU PICKED
          </h3>
          <button className="w-[292px] h-[300px]  flex items-center justify-center cursor-pointer hover:shadow-2xl hover:transition-all hover:duration-100 hover:ease-linear rounded-full">
            <div
              className={`w-[224px] h-[224px] rounded-full  px-6 flex items-center justify-center ${color.bgColor} ${color.shadow}`}
            >
              <div className="bg-gray-300 w-[224px] h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                <img src={image} />
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-center gap-5 items-center px-7">
          <h3 className="font-bold text-[56px] font-Barlow-Semi-Condensed  text-[#FFFFFF]">
            {Outcome}
          </h3>
          <button
            className={`${
              Outcome === "YOU LOSE"
                ? "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#DB2E4D] tracking-[2.5px] cursor-pointer"
                : "w-[220px] h-[48px] bg-white rounded-md text-[16px] font-semibold text-[#3B4262] tracking-[2.5px]  cursor-pointer"
            }`}
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
            <div
              className={` w-[224px] h-[224px] rounded-full  px-6 flex items-center justify-center  ${ComputerColor.bgColor} ${ComputerColor.shadow}`}
            >
              <div className="bg-gray-300 w-[224px] h-[178px] rounded-full flex items-center justify-center shadow-[inset_0_8px_0_0_#BABFD4]">
                <img src={ComputerImage} />
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}

export default WinningTile;
