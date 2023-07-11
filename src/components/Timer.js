import React, { useState, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle} from "react-icons/ai"
import { BsGear } from "react-icons/bs"
import { LuTimerReset } from "react-icons/lu"
import pomodoroAlarmSound from "../songs/pomodoro-alarm.mp3";

function Timer() {

  const [focusTime, setFocusTime] = useState(25 * 60);
  const [breakTime, setBreakTimer] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime ] = useState(15 * 60);
  const [breaksCountThreshold , setBreaksCountThreshold] = useState(3);

  const focusTimeInMinutes = focusTime / 60;
  const breakTimeInMinutes = breakTime / 60;
  const longBreakTimeInMinutes = longBreakTime / 60;

  const [ totalTimeInSeconds, setTotalTimeInSeconds ] = useState(focusTime);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ isBreak, setIsBreak ] = useState(false);
  const [ longBreak, setLongBreak ] = useState(false);
  const [ breaksCount, setBreaksCount ] = useState(0);

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

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
    setBreaksCount(0);
  };

  const alarm = new Audio(pomodoroAlarmSound);

  const playAlarm = () => {
    alarm.play();
  };


  const handleChangeFocus = (e) => {
    setFocusTime(Number(e.target.value) * 60);
  }

  const handleChageBreak = (e) => {
    setBreakTimer(Number(e.target.value) * 60)
  }

  const handleChangeLongBreak = (e) => {
    setLongBreakTime(Number(e.target.value) * 60)
  }

  const handleChangeBreaksCountThreshold = (e) => {
    setBreaksCountThreshold(Number(e.target.value))
    setBreaksCount(0)
    setLongBreak(false)
  }

  const handleModalApply = () => {
    setModalIsOpen(false);
    resetTimer()
  }

  const handleModalIsClose = () => {
    setModalIsOpen(false);
  }



  useEffect(() => {
    if(isRunning && totalTimeInSeconds > 0) {
      timeoutId = setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    } else if (totalTimeInSeconds === 0) {
        if(!isBreak) {
            if (breaksCount < breaksCountThreshold) {
              setTotalTimeInSeconds(breakTime);
              setIsBreak(true);
              setBreaksCount(breaksCount + 1);
            } else {
              setTotalTimeInSeconds(longBreakTime);
              setIsBreak(true);
              setBreaksCount(0);
              setLongBreak(true)
            }
        } else {
          setTotalTimeInSeconds(focusTime);
          setIsBreak(false);
          setLongBreak(false)
        }
      
        playAlarm();
    }
    return () => clearTimeout(timeoutId);
  }, [isRunning, totalTimeInSeconds, isBreak, breaksCountThreshold, focusTime, breakTime, longBreakTime]);

  useEffect (() => {
    if(modalIsOpen) {
      document.querySelector(".modal-options").style.display = "flex";
    } else {
      document.querySelector(".modal-options").style.display = "none";
    }
  }, [modalIsOpen])

  return (
    
    <div className="main-container">
        <div className="timer-status">
          <h1>{isBreak ? (longBreak ? "Long Break Time" : "Break Time") : "Focus Time"}</h1>
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
          <button onClick={() => setModalIsOpen(true)}>
            <BsGear size={35} />
          </button>
        </div>
        <div className="modal-options">
          <h1 className="modal-tittle">Settings</h1>
          <div className="options-input">
              <div className="input-focus-time">
                <label>Focus</label>
                <input type="number" min="1" max={90} value={focusTimeInMinutes} defaultValue={focusTimeInMinutes} onChange={handleChangeFocus}/>
                <p>Minutes</p>
              </div>
              <div className="input-break-time">
                <label>Break</label>
                <input type="number" min="1" max={90} defaultValue={breakTimeInMinutes} onChange={handleChageBreak}/>
                <p>Minutes</p>
              </div>
              <div className="input-long-break-time">
                <label>Long Break</label>
                <input type="number" min="1" max={90} defaultValue={longBreakTimeInMinutes} onChange={handleChangeLongBreak}/>
                <p>Minutes</p>
              </div>
          </div>
          <div className="input-long-breaks">
            <label>Number of breaks before the long break:</label>
            <input type="number" min="1" max={90} defaultValue={breaksCountThreshold} onChange={handleChangeBreaksCountThreshold}/>
          </div>
          <div className="close-modal-options">
             <button className="modal-button-cancel" onClick={handleModalIsClose}>Cancel</button>
             <button className="modal-button-apply" onClick={handleModalApply}>Apply</button>
          </div>
        </div>
    </div>
  );
}

export default Timer;