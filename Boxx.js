import React, { useState } from "react";

import YellowBox from "./YellowBox";
import "./Boxx.css";
import RedBox from "./Redbox";

const Boxx = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };

  const handleBoxHover = (index) => {
    setActiveIndex(index);
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 1; i <= 15; i++) {
      boxes.push(
        <RedBox
          key={i}
          number={i}
          active={i >= activeIndex + 1 && i < activeIndex + 6}
          onClick={() => handleBoxClick(i)}
          onMouseOver={() => handleBoxHover(i)}
        />
      );
    }
    return boxes;
  };

  return (
    <div>
      <div className="box-container">{renderBoxes()}</div>
      {activeIndex > 0 && <YellowBox number={activeIndex} />}
    </div>
  );
};

export default Boxx;
