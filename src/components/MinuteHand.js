import React from "react";

function MinuteHand(props) {
  return (
    <div
      className="minsLine"
      style={{ transform: `rotate(${props.minute}deg)` }}
    ></div>
  );
}

export default MinuteHand;
