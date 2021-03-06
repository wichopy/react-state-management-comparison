import React, { Component } from "react";
import "./App.css";

import Columns from "../components/Columns";
import Column from "./Column";
import * as logic from "../logic";

class App extends Component {
  state = {
    cards: [
      {
        Assignee: "Winnie",
        description: "Buy eggs"
      },
      {
        Assignee: "Winnie",
        description: "Return books"
      },
      {
        Assignee: "Bob",
        description: "Clean basement"
      },
      {
        Assignee: "Bob",
        description: "Bring dog to the vet"
      },
      {
        Assignee: "Thomas",
        description: "Pack for Hawaii"
      },
      {
        Assignee: "Thomas",
        description: "Study for exam"
      },
      {
        Assignee: "George",
        description: "Pay electricity bill"
      },
      {
        Assignee: "George",
        description: "Walk the dog."
      }
    ],
    assignees: ["Winnie", "Bob", "Thomas", "George"]
  };

  onAdd = Assignee => {
    const description = window.prompt();

    this.setState({
      cards: this.state.cards.concat({ Assignee, description })
    });
  };

  onShiftLeft = card => {
    this.setState({
      cards: logic.onShiftLeft(card, this.state.cards, this.state.assignees)
    });
  };

  onShiftRight = card => {
    this.setState({
      cards: logic.onShiftRight(card, this.state.cards, this.state.assignees)
    });
  };

  render() {
    return (
      <div className="App">
        <Columns>
          {this.state.assignees &&
            this.state.cards &&
            this.state.assignees.map((assignee, i) => {
              return (
                <Column
                  key={assignee + i}
                  onShiftLeft={this.onShiftLeft}
                  onShiftRight={this.onShiftRight}
                  columnName={assignee}
                  start={i === 0}
                  end={i === this.state.assignees.length - 1}
                  cards={this.state.cards.filter(
                    card => card.Assignee === assignee
                  )}
                  onAddClick={this.onAdd}
                />
              );
            })}
        </Columns>
      </div>
    );
  }
}

export default App;
