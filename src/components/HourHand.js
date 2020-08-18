import React from "react";

function HourHand(props) {
  return (
    <div
      className="hourLine"
      style={{ transform: `rotate(${props.hour}deg)` }}
    ></div>
  );
}

export default HourHand;
