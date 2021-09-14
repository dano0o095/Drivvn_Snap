import React, { useState } from 'react'

import './App.css'
import CardArea from './components/CardArea'
import api from './utils/api'

function App() {
  const [newCard, setNewCard] = useState({})

  const handleClick = () => {
    api.drawCard()
      .then(res => {
        console.log('res:', res)
        setNewCard(res.cards[0])
      })
  }

  return (
    <div class="App container">
      <h1>SNAP!</h1>
      <CardArea newCard={newCard} />
      <button type="button" className="btn btn-primary" onClick={() => handleClick()}>Primary</button>
    </div>
  )
}

export default App;
