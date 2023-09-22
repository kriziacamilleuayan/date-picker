import { months, views } from "../../const";

const HeaderComponent = ({
  selectedMonth,
  selectedYear,
  handlePickerView,
  pickerView,
  years,
  controls,
}) => {
  const currentViewedDate = () => {
    switch (pickerView) {
      case views[0]:
        return `${months[selectedMonth]} ${selectedYear}`;
      case views[1]:
        return `${selectedYear}`;
      case views[2]:
        return `${years[0]} - ${years[11]}`;
      default:
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "8px 0",
        justifyContent: "space-between",
      }}
    >
      <button onClick={() => controls("prev")}>{"<"}</button>
      <button onClick={handlePickerView}>{currentViewedDate()}</button>
      <button onClick={() => controls("next")}>{">"}</button>
    </div>
  );
};

export default HeaderComponent;
