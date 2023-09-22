import { useRef } from "react";
import { FaCalendar } from "react-icons/fa";
import { checkValue } from "../helpers";

const InputDateComponent = ({ selectedDate, setSelectedDate }) => {
  const inputElementRef = useRef();

  const handleDateChange = (e) => {
    const re = /^[\d -]+$/; // only accepts 0-9 and  -
    if (e.target.value === "" || re.test(e.target.value)) {
      const arrDate = e.target.value
        .split("-")
        .map((v) => v.replace(/\D/g, ""));
      let newDate = arrDate;

      if (arrDate[0]) {
        //year
        const check = checkValue(arrDate[0].slice(0, 4), 9999);
        if (arrDate[0].length === 4 && newDate[1]) {
          newDate[0] = `${check}-`;
        } else if (arrDate[0].length > 4 && !arrDate[1]) {
          newDate[1] = arrDate[0][arrDate[0].length - 1];
          newDate[0] = `${check}-`;
        } else {
          newDate[0] = check;
        }
      }
      if (arrDate[1]) {
        //month
        const check = checkValue(arrDate[1].slice(0, 2), 12);
        if (arrDate[1].length === 2 && newDate[2]) {
          newDate[1] = `${check}-`;
        } else if (arrDate[1].length > 2 && !arrDate[2]) {
          newDate[2] = arrDate[1][arrDate[1].length - 1];
          newDate[1] = `${check}-`;
        } else {
          newDate[1] = check;
        }
      }
      if (arrDate[2]) newDate[2] = checkValue(arrDate[2], 31); //day

      const parsedDate = newDate.join("").substr(0, 10);

      setSelectedDate(parsedDate);
    }
  };

  const handleBlur = (e) => {};

  return (
    <>
      <FaCalendar />
      <input
        type="text"
        ref={inputElementRef}
        placeholder="YYYY-MM-DD"
        onChange={handleDateChange}
        onBlur={handleBlur}
        value={selectedDate}
      />
      <p>{selectedDate}</p>
    </>
  );
};

export default InputDateComponent;
