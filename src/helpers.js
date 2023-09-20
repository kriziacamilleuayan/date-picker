export const months = [...Array(12).keys()].map((key) =>
  new Date(0, key).toLocaleString("en", { month: "long" })
);

export const week = {
  Sunday: "Su",
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
};

export const range = (start, end, step = 1) => {
  return Array.from(
    Array.from(Array(Math.ceil((end - start) / step)).keys()),
    (x) => start + x * step
  );
};

export const getYearsList = (year) => {
  return range(year - 11, year + 1);
};

export const daysInMonth = (month, year) => {
  const days = new Date(year, month, 0).getDate();
  return range(1, days + 1);
};
