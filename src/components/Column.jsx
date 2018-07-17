import React from "react";
import styled from "styled-components";

const columnColors = {
  Winnie: "#8E6E95",
  Bob: "#39A59C",
  Thomas: "#344759",
  George: "#E8741E"
};

const StyledColumn = styled.div`
  flex-grow: 1;
`;

const StyledH2 = styled.h2`
  color: white;
  background-color: ${props => columnColors[props.columnName]};
`;

const Column = ({
  onAddClick,
  columnName,
  children,
}) => {
  return (
    <StyledColumn>
      <StyledH2 columnName={columnName}>{columnName}</StyledH2>
        {children}
      <button onClick={() => onAddClick(columnName)}>Add a card</button>
    </StyledColumn>
  );
};

export default Column;
