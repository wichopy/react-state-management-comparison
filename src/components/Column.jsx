import React from 'react'
import Card from './Card'
import styled from 'styled-components'
const columnColors = {
  Winnie: '#8E6E95',
  Bob: '#39A59C',
  Thomas: '#344759',
  George: '#E8741E',
}

const StyledColumn = styled.div`
  flex-grow: 1;
`
const Column = ({ onAddClick, cards, columnName, start, end, onShiftLeft, onShiftRight }) => {
  return (
    <StyledColumn>
      <h2 style={{ color: 'white', backgroundColor: columnColors[columnName]}}>{columnName}</h2>
      {cards.map((card, i) => {
        return <Card key={i} card={card} start={start} end={end} onShiftLeft={onShiftLeft} onShiftRight={onShiftRight}/>
      })}
      <button onClick={() => onAddClick(columnName)}>Add a card</button>
    </StyledColumn>
  )
}

export default Column
