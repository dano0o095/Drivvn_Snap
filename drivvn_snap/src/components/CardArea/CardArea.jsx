import React, { useEffect } from 'react'
import propTypes from 'prop-types'

import api from '../../utils/api'

const CardArea = props => {
  const { newCard, prevCard } = props

  useEffect(() => {
    api.getNewDeck()
  }, [])

  return (
    <div className="container">
      <img src={newCard?.image} />
      <img src={newCard?.image} />
    </div>
  )
}

CardArea.propTypes = {

}

export default CardArea