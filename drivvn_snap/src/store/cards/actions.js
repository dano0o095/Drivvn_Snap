export const actions = {
  setNewCard: 'SET::NEW_CARD',
  setPrevCard: 'SET::PREV_CARD'
}

export const setNewCard = (card) => ({ type: actions.setNewCard, newCard: card })
export const setPrevCard = (card) => ({ type: actions.setPrevCard, prevCard: card })

export default actions
