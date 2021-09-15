export const actions = {
  setNewCard: 'SET::NEW_CARD',
  AddValueMatched: 'ADD::VALUE_MATCHED',
  AddSuitMatched: 'ADD::SUIT_MATCHED',
}

export const setNewCard = (card) => ({ type: actions.setNewCard, newCard: card })
export const AddValueMatched = () => ({ type: actions.AddValueMatched })
export const AddSuitMatched = () => ({ type: actions.AddSuitMatched })


export default actions
