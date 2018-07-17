import { observable, action, decorate } from 'mobx'
import * as logic from '../logic'
class CardStore {
  cards = [
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
  ]
  assignees = ["Winnie", "Bob", "Thomas", "George"]

  addCard = card => this.cards.push(card)

  onShiftLeft = card => {
    this.cards = logic.onShiftLeft(card, this.cards, this.assignees)
  }

  onShiftRight = card => {
    this.cards = logic.onShiftRight(card, this.cards, this.assignees)
  }
}

decorate(CardStore, {
  cards: observable,
  assignees: observable,
  addCard: action,
  onShiftLeft: action,
  onShiftRight: action,
})

export default CardStore
