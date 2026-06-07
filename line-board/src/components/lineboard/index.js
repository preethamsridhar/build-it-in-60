import { useGame } from "../../hooks";
import { Cell } from "../cell";

export const Lineboard = ({ size, sequenceCount }) => {
  const { state, playTurn } = useGame(size);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: Array(size).fill('40px').join(' ')
      }}
    >
      {Object.keys(state.byId).map((ele) => {
        const cell = state.byId[ele];
        return <Cell key={ele} cellObj={cell} playTurn={playTurn} />;
      })}
      <div>
        <div>

        Current Player: {state.turn}
        </div>
        <div>
        Winner: {state.winner}
        </div>
      </div>
    </div>
  );
};
