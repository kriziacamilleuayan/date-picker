const YearComponent = ({ selectedYear, setSelectedYear, years }) => {
  return (
    <>
      <h1>Years</h1>
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
    </>
  );
};

export default YearComponent;
