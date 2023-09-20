import { months } from "../const";

const MonthComponent = ({ handleChangeMonth, selectedMonth }) => {
  return (
    <>
      <h1>Months</h1>
      {months.map((item, key) => (
        <button
          onClick={() => handleChangeMonth(key)}
          className={key === selectedMonth ? "active" : ""}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default MonthComponent;
