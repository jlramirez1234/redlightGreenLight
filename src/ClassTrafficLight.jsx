import React from "react";

const colorPatterns = [
  ["red", "black", "black"],
  ["black", "black", "green"],
  ["black", "yellow", "black"]
];

export class ClassTrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightIndex: 0
    };
  }

  handleNextState = () => {
    this.setState((prevState) => ({
      lightIndex: (prevState.lightIndex + 1) % colorPatterns.length
    }));
  };

  render() {
    const currentLights = colorPatterns[this.state.lightIndex];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${currentLights[0]}`}></div>
          <div className={`circle ${currentLights[1]}`}></div>
          <div className={`circle ${currentLights[2]}`}></div>
        </div>
        <button className="next-state-button" onClick={this.handleNextState}>
          Next State
        </button>
      </div>
    );
  }
}


