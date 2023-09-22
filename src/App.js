import { useState } from "react";
import { parseDate } from "./helpers";
import { currentDate } from "./const";
import InputDateComponent from "./components/inputDate";
import DatePickerComponent from "./components/datePicker/datePicker";

function App() {
  const [selectedDate, setSelectedDate] = useState(parseDate(currentDate));

  return (
    <div style={{ fontFamily: "Arial" }}>
      <DatePickerComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <InputDateComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}

export default App;
