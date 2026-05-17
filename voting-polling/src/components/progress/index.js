import { useMemo } from "react";
import "./styles.css";

export const Progress = ({ total, progress }) => {
  const style = useMemo(() => {
    return {
        width: `${parseFloat(progress / total).toFixed(2) * 100}%`,
    }
  }, [total, progress]);
  return (
    <div className="progress__container">
      <div className="progress__liquid" style={style} />
      <div>{progress}</div>
    </div>
  );
};
