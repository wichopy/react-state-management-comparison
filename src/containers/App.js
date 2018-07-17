import React, { Component } from "react";
import "./App.css";
import { inject, observer } from "mobx-react";

import Columns from "../components/Columns";
import Column from "./Column";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Columns>
          {this.props.CardStore.assignees.map((assignee, i) => {
            return (
              <Column
                key={assignee + i}
                columnName={assignee}
                start={i === 0}
                end={i === this.props.CardStore.assignees.length - 1}
                cards={this.props.CardStore.cards.filter(
                  card => card.Assignee === assignee
                )}
              />
            );
          })}
        </Columns>
      </div>
    );
  }
}

export default inject("CardStore")(observer(App));
