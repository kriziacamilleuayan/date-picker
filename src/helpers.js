export const parseDate = (date) => date.toISOString().split("T")[0];

export const range = (start, end, step = 1) =>
  Array.from(
    Array.from(Array(Math.ceil((end - start) / step)).keys()),
    (x) => start + x * step
  );

export const getYearsList = (year) => range(year - 11, year + 1);

export const daysInMonth = (month, year) => {
  const days = getMonthDays(year, month + 1);
  return range(1, days + 1);
};

export const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

export const mapDays = (arr, month, year, disabled) =>
  arr.map((item) => {
    return {
      value: item,
      disabled,
      date: new Date(year, month, item + 1).toISOString().split("T")[0],
    };
  });

export const getPrevNextDates = (selectedMonth, selectedYear) => {
  const prevMonth = selectedMonth < 1 ? 11 : selectedMonth - 1;
  const prevYear = selectedMonth < 1 ? selectedYear - 1 : selectedYear;
  const nextMonth = selectedMonth > 10 ? 0 : selectedMonth + 1;
  const nextYear = selectedMonth > 10 ? selectedYear + 1 : selectedYear;

  return { prevMonth, prevYear, nextMonth, nextYear };
};

export const getCalendarDays = (selectedMonth, selectedYear, days) => {
  const prevMonthDays = getMonthDays(selectedYear, selectedMonth);
  const getDay = new Date(selectedYear, selectedMonth, 1).getDay();
  const prevDays = range(prevMonthDays - (getDay - 1), prevMonthDays + 1);
  const nextDays = range(1, 42 - (getDay + days.length - 1));
  const { prevMonth, prevYear, nextMonth, nextYear } = getPrevNextDates(
    selectedMonth,
    selectedYear
  );

  const prev = mapDays(prevDays, prevMonth, prevYear, true);
  const current = mapDays(days, selectedMonth, selectedYear, false);
  const next = mapDays(nextDays, nextMonth, nextYear, true);

  return [...prev, ...current, ...next];
};

export const checkValue = (str, max) => {
  if (str.charAt(0) !== "0" || str === "00" || str === "0000") {
    let num = Number(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str =
      num > Number(String(max).charAt(0)) && String(num).length === 1
        ? "0" + num
        : String(num);
  }
  return str;
};
