import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import api from '../../utils/api'
import CardPlaceholder from './CardPlaceholder'

const CardArea = props => {
  const { newCard, prevCard, addValueMatched, AddSuitMatch } = props

  const [matchType, setMatchType] = useState('')

  useEffect(() => {
    api.getNewDeck()
  }, [])

  useEffect(() => {
    if (newCard && Object.keys(newCard).length === 0 && newCard.constructor === Object) { // check if object exists
      setMatchType('')
    } else {
      if (newCard?.suit === prevCard?.suit) {
        setMatchType('SNAP SUIT!')
        AddSuitMatch()
      } else if (newCard?.value === prevCard?.value) {
        setMatchType('SNAP VALUE!')
        addValueMatched()
      } else {
        setMatchType('')
      }
    }
  }, [prevCard, newCard])

  return (
    <div className="container mb-5 mt-3">
      {matchType && <h4>{matchType}</h4>}
      {prevCard?.image && <img className="m-4 m-4" src={prevCard?.image} /> || <CardPlaceholder />}
      {newCard?.image && <img className="m-4 m-4" src={newCard?.image} /> || <CardPlaceholder />}
    </div>
  )
}

CardArea.propTypes = {

}

export default CardArea