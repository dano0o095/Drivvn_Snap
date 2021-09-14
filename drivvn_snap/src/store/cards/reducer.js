import actions from './actions'

const cards = (state = { newCard: {} }, action) => {
  switch (action.type) {
    case actions.setNewCard:
      return { ...state, newCard: action.newCard }
    default:
      return state
  }
}

export default cards
