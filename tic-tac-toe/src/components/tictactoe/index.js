import { useGame } from "../../hooks/useGame.js";
import { Board } from "../board";
import "./styles.css";

export const Tictactoe = ({ size }) => {
  const { boardState, currentTurn, playMyTurn, winner } = useGame(size);
  return (
    <div className="game">
      {winner ? (
        <div> Winner is {winner} </div>
      ) : (
        <div> Current Turn: {currentTurn}</div>
      )}
      <Board boardConfig={boardState} size={size} playMyTurn={playMyTurn} />
    </div>
  );
};
