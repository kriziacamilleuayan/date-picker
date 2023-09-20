export const currentDate = new Date();

export const week = {
  Sunday: "Su",
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
};

export const months = [...Array(12).keys()].map((key) =>
  new Date(0, key).toLocaleString("en", { month: "short" })
);

export const views = ["days", "months", "year"];
