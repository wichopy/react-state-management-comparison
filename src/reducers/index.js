import {
  ADD_TASK,
  SHIFT_LEFT,
  SHIFT_RIGHT,
} from '../actions'
import * as logic from '../logic'

const taskApp = (state = {
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
  assignees: ["Winnie", "Bob", "Thomas", "George"],
}, action) => {
  switch (action.type) {
    case SHIFT_LEFT:
      return {...state, cards: logic.onShiftLeft(action.task, state.cards, state.assignees)}
    case SHIFT_RIGHT:
      return {...state, cards: logic.onShiftRight(action.task, state.cards, state.assignees)}
    case ADD_TASK:
      return {...state, cards: state.cards.concat(action.task)}
    default:
      return state
  }
}

export default taskApp
