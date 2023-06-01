import React, { useState, useEffect } from "react";
import ringTone from "../songs/ringtone.mp3";

function Timer() {

  const [ totalTimeInSeconds, setTotalTimeInSeconds ] = useState(25 * 60);

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  const alarm = new Audio(ringTone);

  const playAlarm = () => {
    alarm.play();
  };

  const stopAlarm = () => {
    alarm.pause();
  };

  function resetTimer() {
    setTotalTimeInSeconds(5 * 60);

    // Ativar alarme
    return playAlarm();
  };

  useEffect(() => {
    if(totalTimeInSeconds === 0) {
      return resetTimer();
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1)
      }, 1000)
    }
  }, [totalTimeInSeconds]);

  return (
    <div>
        <div className="timer" onClick={stopAlarm}>
          <span>{minutes.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
    </div>
  );
}

export default Timer;