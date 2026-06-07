import "./styles.css";

export const Cell = ({ cellObj, playTurn }) => {
  return (
    <div
      className="cell__container"
      onClick={() => playTurn(cellObj.id)}
      style={{ background: cellObj.value }}
    >  </div>
  );
};
