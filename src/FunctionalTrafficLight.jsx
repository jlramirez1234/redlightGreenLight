import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const colorPatterns = [
    // First Click
    ["red", "black", "black"],
    // Click Two
    ["black", "black", "green"],
    // Click Three
    ["black", "yellow", "black"],
  ];

  const [patternIndex, setPatternIndex] = useState(0);

 
  const handleNextState = () => {
    const nextIndex = (patternIndex + 1) % colorPatterns.length;
    setPatternIndex(nextIndex);
  };


  const currentPattern = colorPatterns[patternIndex];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className="circle"
          style={{ backgroundColor: currentPattern[0] }}
        ></div>
        <div
          className="circle"
          style={{ backgroundColor: currentPattern[1] }}
        ></div>
        <div
          className="circle"
          style={{ backgroundColor: currentPattern[2] }}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};
