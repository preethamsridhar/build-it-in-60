import { useState } from "react";

export const Bar = ({ height, color, name }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div>
      {showDesc ? `${name}, tickets: ${height}` : null}
      <div
        onClick={() => setShowDesc(!showDesc)}
        style={{
          width: "40px",
          height: `${height}px`,
          background: `${color}`,
        }}
      />
    </div>
  );
};
