import React, { useState } from 'react'

import './App.css'
import CardArea from '../components/CardArea'
import api from '../utils/api'

function App(props) {

  const handleClick = () => {
    api.drawCard()
      .then(res => {
        props.setNewCard(res.cards[0])
      })
  }

  return (
    <div class="App container">
      <h1>SNAP!</h1>
      <CardArea />
      <button type="button" className="btn btn-primary btn-lg" onClick={() => handleClick()}>Draw card</button>
    </div>
  )
}

export default App;
