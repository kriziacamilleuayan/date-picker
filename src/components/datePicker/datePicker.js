import { useState } from "react";
import styled from "styled-components";
import { daysInMonth, getPrevNextDates, getYearsList } from "../../helpers";
import { currentDate, views } from "../../const";
import HeaderComponent from "./header";
import DaysComponent from "./day";
import MonthComponent from "./month";
import YearComponent from "./year";

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  const [years, setYears] = useState(getYearsList(currentDate.getFullYear()));
  const [pickerView, setPickerView] = useState(views[0]);
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

  return (
    <>
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
    </>
  );
};

export default DatePickerComponent;

const DatePickerContainer = styled.div`
  border: gray 1px solid;
  padding: 1rem;
  width: 300px;
`;
