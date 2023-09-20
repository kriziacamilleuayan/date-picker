import { useState } from "react";
import {
  daysInMonth,
  getPrevNextDates,
  getYearsList,
  parseDate,
} from "./helpers";
import YearComponent from "./components/year";
import MonthComponent from "./components/month";
import DaysComponent from "./components/day";
import styled from "styled-components";
import HeaderComponent from "./components/header";
import { currentDate, views } from "./const";

function App() {
  const [years, setYears] = useState(getYearsList(currentDate.getFullYear()));
  const [pickerView, setPickerView] = useState(views[0]);
  const [selectedDate, setSelectedDate] = useState(parseDate(currentDate));
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [days, setDays] = useState(daysInMonth(selectedMonth, selectedYear));

  const handleChangeMonth = (mo) => {
    setSelectedMonth(mo);
    setDays(daysInMonth(mo, selectedYear));
    setPickerView(views[0]);
  };

  const handleChangeYear = (yr) => {
    setSelectedYear(yr);
    setPickerView(views[1]);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handlePickerView = () => {
    switch (pickerView) {
      case views[0]:
        setPickerView(views[1]);
        break;
      case views[1]:
        setPickerView(views[2]);
        break;
      default:
    }
  };

  const controls = (name) => {
    const isPrev = name === "prev";

    switch (pickerView) {
      case views[0]:
        const { prevMonth, prevYear, nextMonth, nextYear } = getPrevNextDates(
          selectedMonth,
          selectedYear
        );

        handleChangeMonth(isPrev ? prevMonth : nextMonth);
        setSelectedYear(isPrev ? prevYear : nextYear);
        break;
      case views[1]:
        const year = isPrev ? selectedYear - 1 : selectedYear + 1;
        setSelectedYear(year);
        break;
      case views[2]:
        const startYear = isPrev ? years[0] - 1 : years[11] + 12;
        setYears(getYearsList(startYear));
        break;
      default:
    }
  };

  const handleDateChange = (e) => {
    const re = /^[\d -]+$/; // only accepts 0-9 and  -
    if (e.target.value === "" || re.test(e.target.value)) {
      const latestChange = e.target.value.split("-");
      const last = latestChange.at(-1);
      console.log("wow", latestChange.length, last);
      setSelectedDate(e.target.value);
    }
    // var reg =
    //   /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
    console.log(e.target.value.split("-"));
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      <DatePickerContainer>
        <HeaderComponent
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          pickerView={pickerView}
          handlePickerView={handlePickerView}
          years={years}
          controls={controls}
        />
        {pickerView === views[0] && (
          <DaysComponent
            selectedDate={selectedDate}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            days={days}
            handleSelectDate={handleSelectDate}
          />
        )}

        {pickerView === views[1] && (
          <MonthComponent
            handleChangeMonth={handleChangeMonth}
            selectedMonth={selectedMonth}
          />
        )}

        {pickerView === views[2] && (
          <YearComponent
            selectedYear={selectedYear}
            handleChangeYear={handleChangeYear}
            years={years}
          />
        )}
      </DatePickerContainer>

      <input
        type="text"
        placeholder="YYYY-MM-DD"
        onChange={handleDateChange}
        defaultValue={selectedDate}
      />
      <p>{selectedDate}</p>
    </div>
  );
}

export default App;

const DatePickerContainer = styled.div`
  border: gray 1px solid;
  padding: 1rem;
  width: 300px;
`;
