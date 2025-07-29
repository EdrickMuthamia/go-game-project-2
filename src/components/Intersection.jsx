import React from "react";

function Intersection({ row, col, value, onClick }) {

  const getEdgeClasses = () => {
    const classes = [];
    if (row === 0) classes.push('top');
    if (row === 8) classes.push('bottom');
    if (col === 0) classes.push('left');
    if (col === 8) classes.push('right');
    return classes.join(' ');
  };


  return (
    <div className={`intersection ${getEdgeClasses()}`} onClick={onClick}>
      {value === "black" && <div className="stone black"></div>}
      {value === "white" && <div className="stone white"></div>}
    </div>
  );
}

export default Intersection; 
