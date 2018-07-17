import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Column from './components/Column'
import styled from 'styled-components'
import uuid from 'uuid';
const AssigneeColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

class App extends Component {
  state = {
    cards: undefined,
    assignees: [
      'Winnie',
      'Bob',
      'Thomas',
      'George',
    ]
  }

  onAdd = (Assignee) => {
    const description = window.prompt()

    this.setState({
      cards: this.state.cards.concat(
        { id: uuid(), Assignee, description }
      )
    })
  }

  onShiftLeft = (id) => {
    const card = this.state.cards.find(card => card.id === id)
    const assigneeIndex = this.state.assignees.findIndex(assignee => assignee === card.Assignee)
    const nextAssignee = this.state.assignees[assigneeIndex - 1]
    console.log(nextAssignee)
    // this.setState({
    //   cards:
    // })
  }

  onShiftRight = (id) => {
    console.log(id)
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({
          cards: [
            {
              id: uuid(),
              Assignee: 'Winnie',
              description: 'Buy eggs',
            },
            {
              id: uuid(),
              Assignee: 'Winnie',
              description: 'Return books',
            },
            {
              id: uuid(),
              Assignee: 'Bob',
              description: 'Clean basement',
            },
            {
              id: uuid(),
              Assignee: 'Bob',
              description: 'Bring dog to the vet',
            },
            {
              id: uuid(),
              Assignee: 'Thomas',
              description: 'Pack for Hawaii',
            },
            {
              id: uuid(),
              Assignee: 'Thomas',
              description: 'Study for exam',
            },
            {
              id: uuid(),
              Assignee: 'George',
              description: 'Pay electricity bill',
            },
            {
              id: uuid(),
              Assignee: 'George',
              description: 'Walk the dog.',
            }
          ]
        })
      },
      1000
    )
  }

  render() {
    return (
      <div className="App">
        <AssigneeColumns>
          {
            this.state.assignees && this.state.cards && this.state.assignees
              .map((assignee, i) => {
                return (
                  <div key={assignee + i}>
                    <Column
                      style={{ flexGrow: 1 }}
                      onShiftLeft={this.onShiftLeft}
                      onShiftRight={this.onShiftRight}
                      columnName={assignee}
                      start={i === 0}
                      end={i === this.state.assignees.length - 1}
                      cards={this.state.cards.filter(card => card.Assignee === assignee)} />
                    <button onClick={() => this.onAdd(assignee)}>Add a card</button>
                  </div>
                )
              })
          }
        </AssigneeColumns>
      </div>
    );
  }
}

export default App;
