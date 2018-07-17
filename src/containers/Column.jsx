import React from 'react'
import Column from '../components/Column'
import Card from '../components/Card'
import { inject } from 'mobx-react'

class ColumnContainer extends React.Component {

  onAdd = () => {
    const description = window.prompt();

    this.props.CardStore.addCard({ Assignee: this.props.columnName, description })
  };

  onShiftLeft = card => {
    this.props.CardStore.onShiftLeft(card)
  };

  onShiftRight = card => {
    this.props.CardStore.onShiftRight(card)
  };

  render() {
    const {
      cards,
      start,
      end,
      columnName,
    } = this.props

    return (
      <Column columnName={columnName} onAddClick={this.onAdd}>
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              card={card}
              start={start}
              end={end}
              onShiftLeft={() => this.onShiftLeft(card)}
              onShiftRight={() => this.onShiftRight(card)}
            />
          );
        })}
      </Column>
    )
  }
}

export default inject('CardStore')(ColumnContainer)
