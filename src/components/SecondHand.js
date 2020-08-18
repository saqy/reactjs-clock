import React from "react";

function SecondHand(props) {
  return (
    <div
      className="secLine"
      style={{ transform: `rotate(${props.second}deg)` }}
    ></div>
  );
}

export default SecondHand;
