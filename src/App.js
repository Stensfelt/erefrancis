import React, { useState } from 'react';
import './App.css';

function App() {

  const [textColor, setTextColor] = useState("white");

  function dayOfWeek() {
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[date.getDay()];

    return day;
  }

  const day = dayOfWeek();
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const minutesLeft = 60 - minutes;

  const isZeroMinutes = () => {
    if (minutes === 0) return true;
    else return false;
  }

  const printMinutes = () => {
    if (!isZeroMinutes() && hours !== 15) return " och " + minutesLeft + " min";
    else if (!isZeroMinutes() && hours === 15) return minutesLeft + " min";
    else return "";
  }

  const printHours = () => {
    if (hoursLeft() === 0) return "";
    else return hoursLeft() + " h ";
  }

  const hoursLeft = () => {
    if (isZeroMinutes()) return 16 - hours;
    else return 15 - hours;
  };

  const ereFrancis = () => {
    if (day === "Friday" && hours >= 16) {
      return "JA";
    }
    else if (day === "Friday") {
      return "Nej, men om " + printHours() + printMinutes();
    }
    else {
      return "Nej";
    }
  }

  return (
    <div className="App">
      <h1 className="question">ere francis (aka 'table and friends' och 'friends table')?</h1>
      <div>
        <h2 className={textColor}>{ereFrancis()}</h2>
        <p className="timer"></p>
      </div>

    </div>
  );
}

export default App;
