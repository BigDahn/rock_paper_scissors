import { createContext, useContext, useReducer } from "react";
const GameContext = createContext();

const Options = [
  {
    name: "paper",
    image: "/icon-paper.svg",
    color: {
      bgColor: "bg-[#4664F4] ",
      shadow: "shadow-[inset_0_-8px_0_#2A45C2]",
    },
  },
  {
    name: "scissors",
    image: "/icon-scissors.svg",
    color: {
      bgColor: "bg-[#EB9F0E]",
      shadow: "shadow-[inset_0_-8px_0_#C76C1B]",
    },
  },
  {
    name: "rock",
    image: "/icon-rock.svg",
    color: {
      bgColor: "bg-[#DB2E4D]",
      shadow: "shadow-[inset_0_-8px_0_#9D1634] ",
    },
  },
];

const initialState = {
  score: 1,
  step: 1,
  UserOption: [],
  ComputerOption: [],
  Outcome: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "user": {
      return {
        ...state,
        step: state.step + 1,
        UserOption: Options.filter((s) => s.name === action.payload),
      };
    }
    case "computer": {
      console.log(action.payload);
      return {
        ...state,
        step: state.step + 1,
        ComputerOption: Options[action.payload],
      };
    }
    case "score": {
      console.log(action.payload);
      return {
        ...state,

        Outcome: action.payload,
        score:
          action.payload === "YOU WIN"
            ? state.score + 1
            : action.payload === "YOU LOSE" && state.score === 0
            ? state.score
            : action.payload === "YOU LOSE" && state.score != 0
            ? state.score - 1
            : state.score,
      };
    }
    case "replay": {
      return {
        ...state,
        Outcome: "",
        step: 1,
        UserOption: [],
        ComputerOption: [],
      };
    }
  }
}

function Game({ children }) {
  const [{ score, step, UserOption, ComputerOption, Outcome }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <GameContext.Provider
      value={{
        score,
        Outcome,
        step,
        ComputerOption,
        UserOption,
        dispatch,
        Options,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGameHook() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("context was used outside main context");

  return context;
}

export { useGameHook, Game };
