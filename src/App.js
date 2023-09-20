import { useState } from "react";
import "./App.css";
import { daysInMonth, getYearsList, months, week } from "./helpers";

function App() {
  const currentDate = new Date();
  const [years, setYears] = useState(getYearsList(currentDate.getFullYear()));
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentDate.getMonth()]
  );
  const [days, setDays] = useState(
    daysInMonth(months.indexOf(selectedMonth) + 1, selectedYear)
  );
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const controlYear = (name) => {
    const startYear = name === "prev" ? years[0] - 1 : years[11] + 12;
    setYears(getYearsList(startYear));
  };

  const handleChangeMonth = (mon) => {
    setSelectedMonth(mon);
    setDays(daysInMonth(months.indexOf(mon) + 1, selectedYear));
  };

  return (
    <div>
      <h1>Years</h1>
      <button onClick={() => controlYear("prev")}>prev</button>
      {years.map((item) => (
        <button
          className={item === selectedYear ? "active" : ""}
          onClick={() => {
            setSelectedYear(item);
          }}
        >
          {item}
        </button>
      ))}
      <button onClick={() => controlYear("nect")}>next</button>

      <h1>Months</h1>
      {months.map((item) => (
        <button
          onClick={() => handleChangeMonth(item)}
          className={item === selectedMonth ? "active" : ""}
        >
          {item}
        </button>
      ))}

      <h1>Days</h1>
      <div className="headerDays">
        {Object.keys(week).map((item) => (
          <div className="headerDay">{week[item]}</div>
        ))}
      </div>
      <div>
        {days.map((item) => (
          <button className={item === selectedDay ? "active" : ""}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
