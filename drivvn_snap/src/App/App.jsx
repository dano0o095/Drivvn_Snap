import React from 'react'

import './App.css'
import CardArea from '../components/CardArea'
import api from '../utils/api'
import Results from '../components/Results'

const App = (props) => {
  const { setNewCard, setRemainingCardCount, remaningCardsCount } = props

  const handleClick = () => {
    api.drawCard()
      .then(res => {
        setNewCard(res.cards[0])
        setRemainingCardCount(res.remaining)
      })
  }

  return (
    <div class="App container">
      <h1 data-testid="title">SNAP!</h1>
      <CardArea data-testid="card-area" />
      <h6 data-testid="cards-remaining-count">{`${remaningCardsCount} cards remaining`}</h6>
      {remaningCardsCount !== 0
        ? <button data-testid="draw-button" type="button" className="btn btn-primary btn-lg" onClick={() => handleClick()}>Draw card</button>
        : <Results data-testid="results" />
      }
    </div>
  )
}

export default App;
