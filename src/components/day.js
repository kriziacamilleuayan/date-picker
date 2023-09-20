import styled from "styled-components";
import { getCalendarDays } from "../helpers";
import { week } from "../const";

const DaysComponent = ({
  days,
  selectedMonth,
  selectedYear,
  selectedDate,
  handleSelectDate,
}) => {
  const newDays = getCalendarDays(selectedMonth, selectedYear, days);

  return (
    <>
      <DaysStyle>
        {Object.keys(week).map((item) => (
          <DaysName key={item}>{week[item]}</DaysName>
        ))}
      </DaysStyle>
      <DaysStyle>
        {newDays.map((item) => (
          <DaysButton
            onClick={() => handleSelectDate(item.date)}
            $active={item.date === selectedDate}
            disabled={item.disabled}
            key={item.date}
          >
            {item.value}
          </DaysButton>
        ))}
      </DaysStyle>
    </>
  );
};

export default DaysComponent;

const DaysStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

const DaysName = styled.div`
  font-weight: bold;
  text-align: center;
  width: 30px;
  height: 30px;
`;

const DaysButton = styled.button`
  background: ${(props) =>
    props.disabled && props.$active
      ? "lightgray"
      : props.$active
      ? "red"
      : "transparent"};
  color: ${(props) =>
    props.$active ? "white" : props.disabled ? "lightgray" : "initial"};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;
