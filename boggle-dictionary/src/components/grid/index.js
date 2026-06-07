import { Cell } from "../cell";
import "./styles.css";

export const Grid = ({ gridArray }) => {
  return (
    <div className="grid__container" onClick={(e) => console.log(e)}>
      {gridArray.map((row, index) => {
        return (
          <div key={index} className="grid__row">
            {row.map((col, index) => {
              return <Cell key={col.id} cellObj={col} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
