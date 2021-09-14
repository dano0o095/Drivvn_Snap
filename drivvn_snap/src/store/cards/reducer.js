import actions from './actions'

const cards = (state = { newCard: {} }, action) => {
  switch (action.type) {
    case actions.setNewCard:
      return { ...state, newCard: action.newCard }
    case actions.setPrevCard:
      return { ...state, prevCard: action.prevCard }
    default:
      return state
  }
}

export default cards
