import React from 'react'
import Column from '../components/Column'
import Card from '../components/Card'
import {connect} from 'react-redux'
import * as actions from '../actions'

class ColumnContainer extends React.Component {

  onAddClick = Assignee => {
    const description = window.prompt();
    const task = { Assignee, description }
    this.props.onAdd(task)
  };

  render() {
    const {
      cards,
      start,
      end,
      onShiftLeft,
      onShiftRight,
      columnName,
    } = this.props

    return (
      <Column columnName={columnName} onAddClick={this.onAddClick}>
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

export default connect(
  undefined,
  // mapDispatchToProps
  dispatch => ({
    onAdd: task => dispatch(actions.addTask(task)),
    onShiftLeft: task => dispatch(actions.shiftTaskLeft(task)),
    onShiftRight: task => dispatch(actions.shiftTaskRight(task)),
  })
)(ColumnContainer)
