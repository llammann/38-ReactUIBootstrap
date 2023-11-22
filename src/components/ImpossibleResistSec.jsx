import React from "react";
import "../assets/styles/ImpossibleResistSec.scss";

function ImpossibleResistSec() {
  return (
    <div className="Resist">
      <div className="container">
        <p>The buttons below are impossible to resist...</p>
        <div className="buttons">
          <button className="click">Click Me!</button>
          <button className="look">Look at me!</button>
        </div>
      </div>
    </div>
  );
}

export default ImpossibleResistSec;
