let deck_id = ''

const catchErrors = (error) => console.log('Error:', error)

const api = {
  getNewDeck() {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(data => {
        deck_id = data.deck_id
      })
      .catch(error => catchErrors(error))
  },

  drawCard() {
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
      .then(response => response.json())
      .catch(error => catchErrors(error))
  }
}

export default api
