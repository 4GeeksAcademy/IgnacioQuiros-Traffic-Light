import React, { useState, useEffect } from "react";
import Digit from "./Digit";

// Button component
const MyButton = ({ onClick, label }) => {
  return (
    <button
      className="m-2 p-2 col-3 text-light"
      style={{ background: "#353535" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Exporting component "Digits"
const Digits = ({ description, inputTimer, startOnLoad, maxDigits }) => {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(!startOnLoad);
  const [inputValue, setInputValue] = useState("");
  const [alarmTime, setAlarmTime] = useState(0);
  const maxSeconds = 10 **(maxDigits - 1); // Maximum seconds based on max digits - clock digit

  //Just using useEffect for making the intervals instead of rendering each time everything
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setSeconds((prevSeconds) => {
          const nextSeconds = prevSeconds + 1;
          //Pause when reaching max seconds 
          if (nextSeconds >= maxSeconds) {
            setIsPaused(true);
            return maxSeconds;
          }
          //If alarm reached then alarm popup and pause
          if (nextSeconds === alarmTime && inputTimer) {
            alert("¡Alarm Ringing!");
            setIsPaused(true);
          }
          return nextSeconds;
        });
      }
    }, 1000);
    //Clear Interval and call again the interval function
    return () => clearInterval(interval);
    //The states & props I made for my useEffect function
  }, [isPaused, alarmTime, inputTimer]);


  //Resume,Pause & Reset are button Functions 
  const resume = () => {
    if (inputTimer && inputValue.trim() === "") {
      alert("Please enter a timer value before resuming.");
      return;
    }
    setIsPaused(false);
  };
  const pause = () => setIsPaused(true);
  //Reset based on startOnLoad, so if it started in resume already the reset will start as it too
  const reset = () => {
    setSeconds(0);
    setIsPaused(!startOnLoad); 
  };

  //These two functions below are for input and alarm
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputBlur = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setAlarmTime(value);
    }
  };

  //For making an array of every second position in diferent elements "digit"
  const secondsString = seconds.toString().padStart(maxDigits, "0");
  const secondsArray = secondsString.split("").slice(-maxDigits);

  return (
    <div className="mx-1 mx-sm-5 my-5 pt-4 pb-3 bg-dark border-bottom border-5 border-dark">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2 className="text-light pe-sm-3 pe-1">{description}</h2>
        {inputTimer && (
          <input type="number" style={{ width: "20%", height: "30%" }} value={inputValue}
            onChange={handleInputChange} onBlur={handleInputBlur} className="form-control" placeholder="Enter timer value" />
        )}
        {inputTimer && (
          <h2 className="text-light ps-1 ps-sm-3">Seconds</h2>
        )}
      </div>
      <div className="row d-flex justify-content-center mx-2">
        {secondsArray.map((value, index) => (
          <Digit key={index} Number={value} index={index} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <MyButton onClick={pause} label="Pause" />
        <MyButton onClick={resume} label="Resume" />
        <MyButton onClick={reset} label="Reset" />
      </div>
    </div>
  );
};

export default Digits;