import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import api from '../../utils/api'
import CardPlaceholder from './CardPlaceholder'
import { SUITS, VALUES } from '../../utils/consts'

const CardArea = props => {
  const { newCard, prevCard, addValueMatched, AddSuitMatch, remaningCardsCount } = props

  const [matchType, setMatchType] = useState('')
  const [suitProb, setSuitProb] = useState('')
  const [valueProb, setValueProb] = useState('')

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

  useEffect(() => {
    console.log('prev:', prevCard)
    switch (prevCard.suit) {
      case "HEARTS":
        SUITS.HEARTS--
        console.log('HEARTS COUNT LEFT:', SUITS.HEARTS)
        setSuitProb(`${SUITS.HEARTS} in ${remaningCardsCount - 1}`)
        break
      case "DIAMONDS":
        SUITS.DIAMONDS--
        console.log('DIAMONDS COUNT LEFT:', SUITS.DIAMONDS)
        setSuitProb(`${SUITS.DIAMONDS} in ${remaningCardsCount - 1}`)
        break
      case "CLUBS":
        SUITS.CLUBS--
        console.log('CLUBS COUNT LEFT:', SUITS.CLUBS)
        setSuitProb(`${SUITS.CLUBS} in ${remaningCardsCount - 1}`)
        break
      case "SPADES":
        SUITS.SPADES--
        console.log('SPADE COUNT LEFT:', SUITS.SPADES)
        setSuitProb(`${SUITS.SPADES} in ${remaningCardsCount - 1}`)
        break
      default:
        break
    }
  }, [prevCard])

  return (
    <div className="container mb-5 mt-3">
      {matchType && <h4>{matchType}</h4>}
      {prevCard?.image && <img className="m-4 m-4" src={prevCard?.image} /> || <CardPlaceholder />}
      {newCard?.image && <img className="m-4 m-4" src={newCard?.image} /> || <CardPlaceholder />}
      {suitProb && <h6>Probability of suit match: {suitProb}</h6>}
      {valueProb && <h6>Probability of value match: {valueProb}</h6>}
    </div>
  )
}

CardArea.propTypes = {

}

export default CardArea