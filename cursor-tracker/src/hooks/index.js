import { useEffect, useState } from "react";
import { checkWin, initializeBoard } from "../engine";

export const useGame = (size) => {
  const [state, setState] = useState({
    byId: initializeBoard(size),
    turn: "red",
    playStack: [],
    winner: null,
  });

  const changeTurn = () => {
    setState((prev) => {
      return {
        ...prev,
        turn: prev.turn === "red" ? "green" : "red",
      };
    });
  };

  const playTurn = (id) => {

    if (state.byId[id].value === null && state.winner === null) {
      const result = checkWin(state.byId, Number(id.split("-")[0]), Number(id.split("-")[1]), state.turn, 5, size);
      setState((prev) => {
        return {
          ...prev,
          byId: {
            ...prev.byId,
            [id]: {
              ...prev.byId[id],
              value: prev.turn,
            }
          },
          turn: prev.turn === "red" ? "green" : "red",
          winner: result ? prev.turn : null,
        };
      });
    }
  };

  return {
    state,
    playTurn,
  };
};
