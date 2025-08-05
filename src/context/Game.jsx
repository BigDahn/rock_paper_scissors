import { createContext, useContext, useReducer } from "react";
const GameContext = createContext();

const Options = [
  { name: "paper", image: "/icon-paper.svg" },
  { name: "scissors", image: "/icon-scissors.svg" },
  { name: "rock", image: "/icon-rock.svg" },
];

const initialState = {
  score: 16,
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
          action.payload === "You Win"
            ? state.score++
            : action.payload === "You Lose"
            ? state.score--
            : state.score,
      };
    }
    case "replay": {
      console.log(action.payload);
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
