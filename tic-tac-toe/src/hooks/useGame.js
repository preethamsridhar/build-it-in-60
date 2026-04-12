import { useCallback, useEffect, useMemo, useReducer } from "react";
import { generateWinPatterns } from "../engine";

const gameReducer = (state, action) => {
  const actionType = action.type;
  switch (actionType) {
    case "PLAYMYTURN":
      console.log("here");
      let tempState = { ...state };
      const actionPayload = action.payload;
      const index = actionPayload.index;
      const size = actionPayload.size;
      const winPatterns = action.payload.winPatterns;
      const isGameEnded = state.arr.every((ele) => {
        return Boolean(ele);
      });
      if (!isGameEnded && state.arr[index] === null && state.winner === null) {
        tempState = {
          ...tempState,
          arr: [
            ...tempState.arr.slice(0, index),
            state.currentTurn,
            ...tempState.arr.slice(index + 1, size * size),
          ],
        };
        // add positions
        if (tempState.currentTurn === "x") {
          tempState.xPos = [...tempState.xPos, index];
        } else {
          tempState.oPos = [...tempState.oPos, index];
        }

        // switch next turn
        if (tempState.currentTurn === "x") {
          tempState.currentTurn = "o";
        } else {
          tempState.currentTurn = "x";
        }
        const detectWinner = (positions) => {
          return winPatterns.some((pattern) =>
            pattern.every((ele) => positions.includes(ele))
          );
        };

        const xFlag = detectWinner(tempState.xPos);
        const oFlag = detectWinner(tempState.oPos);

        tempState.winner = xFlag ? "x" : oFlag ? "o" : null;
        console.log("tempState", tempState);
        return tempState;
      } else {
        return state;
      }
    case "RESET":
      console.log("Resetting");
      return action.payload.initState;
    default:
      return state;
  }
};

export const useGame = (size) => {
  const initializeBoard = (size) => {
    const arr = Array(size * size).fill(null);
    return {
      arr,
      xPos: [],
      oPos: [],
      winner: null,
      currentTurn: "x",
    };
  };
  const winPatterns = useMemo(() => {
    return generateWinPatterns(size);
  }, [size]);

  const initState = initializeBoard(size);
  const [state, dispatch] = useReducer(gameReducer, initState);

  const playMyTurn = (index) => {
    console.log("playingMy turn", index);
    dispatch({
      type: "PLAYMYTURN",
      payload: { index, size, winPatterns },
    });
  };

  const resetBoard = () => {
    dispatch({
      type: "RESET",
      payload: { initState },
    });
  };

  return {
    boardState: state.arr,
    currentTurn: state.currentTurn,
    playMyTurn,
    winner: state.winner,
    resetBoard,
  };
};
