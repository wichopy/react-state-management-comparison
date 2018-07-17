import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'

import Columns from "../components/Columns";
import Column from "./Column";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Columns>
          {
            this.props.assignees.map((assignee, i) => {
              return (
                <Column
                  key={assignee + i}
                  columnName={assignee}
                  start={i === 0}
                  end={i === this.props.assignees.length - 1}
                  cards={this.props.cards.filter(
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

export default connect(
  // mapStateToProps
  state => ({
    assignees: state.assignees,
    cards: state.cards,
  })
)(App);
