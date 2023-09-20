import styled from "styled-components";
import { months } from "../const";

const MonthComponent = ({ handleChangeMonth, selectedMonth }) => {
  return (
    <MonthContainer>
      {months.map((item, key) => (
        <MonthsButton
          onClick={() => handleChangeMonth(key)}
          $active={key === selectedMonth}
          key={key}
        >
          {item}
        </MonthsButton>
      ))}
    </MonthContainer>
  );
};

export default MonthComponent;

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

const MonthsButton = styled.button`
  background: ${(props) => (props.$active ? "red" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "initial")};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 0;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;
