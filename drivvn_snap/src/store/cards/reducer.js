import actions from './actions'

const cards = (state = { newCard: {}, prevCard: {}, matchedValues: 0, matchedSuites: 0 }, action) => {
  switch (action.type) {
    case actions.setNewCard:
      return { ...state, prevCard: state.newCard, newCard: action.newCard }
    case actions.AddValueMatched:
      return { ...state, matchedValues: state.matchedValues + 1 }
    case actions.AddSuitMatched:
      return { ...state, matchedSuites: state.matchedSuites + 1 }
    default:
      return state
  }
}

export default cards
