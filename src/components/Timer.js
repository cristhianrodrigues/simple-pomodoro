import React, { useState, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle} from "react-icons/ai"
import { LuTimerReset } from "react-icons/lu"
import pomodoroAlarmSound from "../songs/pomodoro-alarm.mp3";

function Timer() {

  const focusTime = 25 * 60;
  const breakTime = 5 * 60;

  const [ totalTimeInSeconds, setTotalTimeInSeconds ] = useState(focusTime);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ isBreak, setIsBreak ] = useState(false);

  let timeoutId = null;

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    clearTimeout(timeoutId);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTotalTimeInSeconds(focusTime);
    setIsRunning(false);
    setIsBreak(false);
  };

  const alarm = new Audio(pomodoroAlarmSound);

  const playAlarm = () => {
    alarm.play();
  };


  useEffect(() => {
    if(isRunning && totalTimeInSeconds > 0) {
      timeoutId = setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    } else if (totalTimeInSeconds === 0) {
        if(!isBreak) {
          setTotalTimeInSeconds(breakTime);
          setIsBreak(!isBreak);
        } else {
          setTotalTimeInSeconds(focusTime);
          setIsBreak(!isBreak);
        }
      
        playAlarm();
    }
    return () => clearTimeout(timeoutId);
  }, [isRunning, totalTimeInSeconds, isBreak]);



  return (
    
    <div className="main-container">
        <div className="timer-status">
          <h1>{isBreak ? "Break Time" : "Focus Time"}</h1>
        </div>
        <div className="timer-container">
          <div className="timer">
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
          </div>
        </div>
        <div className="controller-buttons">
              { isRunning ? (
                  <button onClick={pauseTimer}>
                    <AiOutlinePauseCircle size={40} />
                  </button>
                ) : (
                  <button onClick={startTimer}>
                    <AiOutlinePlayCircle size={40} />
                  </button>
                )
              }
              <button onClick={resetTimer}>
                <LuTimerReset size={40} />
              </button>
          </div>
    </div>
  );
}

export default Timer;