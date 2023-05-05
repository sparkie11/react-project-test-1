import React from "react";
import "./RedBox.css";

const RedBox = ({ number, active, onClick, onMouseOver }) => {
  const className = active ? "red-box active" : "red-box";

  return (
    <div className={className} onClick={onClick} onMouseOver={onMouseOver}>
      {number}
    </div>
  );
};

export default RedBox;
