export const actions = {
  setNewCard: 'SET::NEW_CARD'
}

export const setNewCard = (card) => ({ type: actions.setNewCard, newCard: card })

export default actions
