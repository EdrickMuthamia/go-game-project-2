import React from "react";

function Intersection({ row, col, onClick, value }) {
      // Star points for a 9x9 Go board (0-indexed: (2,2), (2,6), (4,4), (6,2), (6,6))
  const hasStar =
    (row === 2 && col === 2) ||
    (row === 2 && col === 7) ||
    (row === 7 && col === 2) ||
    (row === 7 && col === 7);

  return (
    <div className="intersection" onClick={onClick}>
      {hasStar && <span className="star">⋅</span>} {/* Fixed star point */}
      {value === "black" && <span className="stone">●</span>} {/* Black stone */}
      {value === "white" && <span className="stone" style={{ color: "white" }}>○</span>} {/* White stone */}
    </div>
  );
}

export default Intersection;
