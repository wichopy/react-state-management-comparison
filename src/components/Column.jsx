import React from 'react'
import Card from './Card'

const columnColors = {
  Winnie: '#8E6E95',
  Bob: '#39A59C',
  Thomas: '#344759',
  George: '#E8741E',
}
const Column = ({ cards, columnName, start, end, onShiftLeft, onShiftRight }) => {
  return (
    <div>
      <h2 style={{ color: 'white', backgroundColor: columnColors[columnName]}}>{columnName}</h2>
      {cards.map((card, i) => {
        return <Card key={i} card={card} start={start} end={end} onShiftLeft={onShiftLeft} onShiftRight={onShiftRight}/>
      })}
    </div>
  )
}

export default Column
