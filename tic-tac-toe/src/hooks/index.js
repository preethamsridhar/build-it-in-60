import { useCallback, useEffect, useMemo, useState } from "react";
import { initializeBoard, generateWinPatterns } from "../engine";

export const useGame = (size) => {
  const WIN_PATTERNS = useMemo(() => generateWinPatterns(size), [size]);
  const [boardState, setBoardState] = useState(initializeBoard(size));
  const [currentTurn, setTurn] = useState("x");
  const [winner, setWinner] = useState(null);

  const detectEndOfGame = () => {
    return boardState.arr.every((ele) => {
      return Boolean(ele);
    });
  };

  const detectWinner = () => {
    let xFlag = false;
    let oFlag = false;
    console.log("WIN_PATTERNS", WIN_PATTERNS);
    if (boardState.xPos.length >= size) {
      xFlag = WIN_PATTERNS.some((pattern) =>
        pattern.every((ele) => boardState.xPos.includes(ele))
      );
    }

    if (boardState.oPos.length >= size) {
      oFlag = WIN_PATTERNS.some((pattern) =>
        pattern.every((ele) => boardState.oPos.includes(ele))
      );
    }
    if (xFlag) {
      setWinner("x");
    } else if (oFlag) {
      setWinner("o");
    }
    return xFlag | oFlag;
  };

  useEffect(() => {
    detectWinner();
  }, [boardState]);

  const playMyTurn = useCallback(
    (index) => {
      if (!detectEndOfGame() && boardState.arr[index] === null) {
        setBoardState((boardState) => {
          const temp = {
            ...boardState,
            arr: [
              ...boardState.arr.slice(0, index),
              currentTurn,
              ...boardState.arr.slice(index + 1, size * size),
            ],
          };
          if (currentTurn === "x") {
            temp.xPos = [...temp.xPos, index];
          } else {
            temp.oPos = [...temp.oPos, index];
          }
          return temp;
        });
        if (currentTurn === "x") {
          setTurn("o");
        } else {
          setTurn("x");
        }
      }
    },
    [currentTurn, boardState]
  );

  return {
    boardState: boardState.arr,
    currentTurn,
    playMyTurn,
    winner,
  };
};
