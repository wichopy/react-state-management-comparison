import React from 'react'

const Card = ({ card, start, end, onShiftLeft, onShiftRight }) => {

  return <div>
    <span>
      { !start && <button onClick={() => onShiftLeft(card.id)}>{'<'}</button> }

      {card.description}

      { !end && <button onClick={() => onShiftRight(card.id)}>{'>'}</button> }
    </span>
  </div>
}

export default Card
