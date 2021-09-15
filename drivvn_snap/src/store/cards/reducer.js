import actions from './actions'

const cards = (state = { newCard: {}, prevCard: {}, matchedValues: 0, matchedSuites: 0, remaining: 52 }, action) => {
  switch (action.type) {
    case actions.setNewCard:
      return { ...state, prevCard: state.newCard, newCard: action.newCard }
    case actions.AddValueMatched:
      return { ...state, matchedValues: state.matchedValues + 1 }
    case actions.AddSuitMatched:
      return { ...state, matchedSuites: state.matchedSuites + 1 }
    case actions.setRemainingCardCount:
      return { ...state, remaining: action.remaining }
    default:
      return state
  }
}

export default cards
