import React from 'react'
import Column from '../components/Column'
import Card from '../components/Card'

class ColumnContainer extends React.Component {
  render() {
    const {
      cards,
      start,
      end,
      onShiftLeft,
      onShiftRight,
      columnName,
      onAddClick,
    } = this.props

    return (
      <Column columnName={columnName} onAddClick={onAddClick}>
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              card={card}
              start={start}
              end={end}
              onShiftLeft={() => onShiftLeft(card)}
              onShiftRight={() => onShiftRight(card)}
            />
          );
        })}
      </Column>
    )
  }
}

export default ColumnContainer
