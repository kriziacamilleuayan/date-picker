import styled from "styled-components";

const YearComponent = ({ selectedYear, handleChangeYear, years }) => {
  return (
    <YearContainer>
      {years.map((item) => (
        <YearButton
          $active={item === selectedYear}
          onClick={() => {
            handleChangeYear(item);
          }}
          key={item}
        >
          {item}
        </YearButton>
      ))}
    </YearContainer>
  );
};

export default YearComponent;

const YearContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

const YearButton = styled.button`
  background: ${(props) => (props.$active ? "red" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "initial")};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 0;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;
