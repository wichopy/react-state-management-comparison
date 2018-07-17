export const onShiftLeft = (card, cards, assignees) => {
  const nextCards = [...cards]
  let currentAssigneeIndex = assignees.indexOf(card.Assignee)
  let nextAssignee = assignees[currentAssigneeIndex - 1]
  let cardIndex = cards.findIndex(item => item.Assignee == card.Assignee && item.description === card.description)
  const removedCard = nextCards.splice(cardIndex, 1)[0] //immute
  removedCard.Assignee = nextAssignee
  return nextCards.concat(removedCard)
}


export const onShiftRight = (card, cards, assignees) => {
  const nextCards = [...cards]
  let currentAssigneeIndex = assignees.indexOf(card.Assignee)
  let nextAssignee = assignees[currentAssigneeIndex + 1]
  let cardIndex = cards.findIndex(item => item.Assignee == card.Assignee && item.description === card.description)
  const removedCard = nextCards.splice(cardIndex, 1)[0] //immute
  removedCard.Assignee = nextAssignee
  return nextCards.concat(removedCard)
}
