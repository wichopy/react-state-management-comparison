import React from 'react'

const Card = ({ card, start, end, onShiftLeft, onShiftRight }) => {

  return <div>
    <span>
      { !start && <button onClick={onShiftLeft}>{'<'}</button> }

      {card.description}

      { !end && <button onClick={onShiftRight}>{'>'}</button> }
    </span>
  </div>
}

export default Card
