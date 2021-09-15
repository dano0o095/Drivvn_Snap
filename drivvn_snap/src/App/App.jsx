import React, { useState } from 'react'

import './App.css'
import CardArea from '../components/CardArea'
import api from '../utils/api'
import Results from '../components/Results'

function App(props) {
  const { setNewCard, setRemainingCardCount, remaningcardsCount } = props

  const handleClick = () => {
    api.drawCard()
      .then(res => {
        setNewCard(res.cards[0])
        setRemainingCardCount(res.remaining)
      })
  }

  return (
    <div class="App container">
      <h1>SNAP!</h1>
      <CardArea />
      {remaningcardsCount > 0
        && <button type="button" className="btn btn-primary btn-lg" onClick={() => handleClick()}>Draw card</button>
        || <Results />
      }
    </div>
  )
}

export default App;
