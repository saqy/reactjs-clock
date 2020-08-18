import React, { useEffect, useState } from "react";
import HourHand from "./HourHand.js";
import MinuteHand from "./MinuteHand.js";
import SecondHand from "./SecondHand.js";

import "./clock.css";

function Clock() {
  const [value, setValue] = useState({ seconds: "", minutes: "", hours: "" });

  useEffect(() => {
    let timeId = setInterval(() => {
      const timeParts = new Date();

      const seconds = 6 * timeParts.getSeconds();
      const minutes = 6 * timeParts.getMinutes();
      const hours =
        30 * (timeParts.getHours() % 12) + timeParts.getMinutes() * 0.5;

      let value = { seconds, minutes, hours };

      setValue(value);

      return () => {
        clearInterval(timeId);
      };
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div id="custom-timer">
        <div className="timer-inner">
          <div id="analog">
            <div className="centerDot"></div>

            <HourHand hour={value.hours} />
            <MinuteHand minute={value.minutes} />
            <SecondHand second={value.seconds} />

            <span className="logoText"></span>
            <span className="logoText_bottom"></span>

            <div className="minutes">
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
              <div className="fiveMins"></div>
            </div>
            <div className="seconds">
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
              <div className="sec"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
