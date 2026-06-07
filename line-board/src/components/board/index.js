import { memo } from "react";
import "./styles.css";

export const Board = memo(({ boardConfig, size, playMyTurn }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: Array(size).fill("40px").join(" "),
      }}
    >
      {boardConfig.map((ele, index) => {
        return (
          <div className="cell" key={index} onClick={() => playMyTurn(index)}>
            {ele}
          </div>
        );
      })}
    </div>
  );
});
