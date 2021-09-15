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
    switch (prevCard.suit) {
      case "HEARTS":
        SUITS.HEARTS--
        setSuitProb(`${SUITS.HEARTS} in ${remaningCardsCount - 1}`)
        break
      case "DIAMONDS":
        SUITS.DIAMONDS--
        setSuitProb(`${SUITS.DIAMONDS} in ${remaningCardsCount - 1}`)
        break
      case "CLUBS":
        SUITS.CLUBS--
        setSuitProb(`${SUITS.CLUBS} in ${remaningCardsCount - 1}`)
        break
      case "SPADES":
        SUITS.SPADES--
        setSuitProb(`${SUITS.SPADES} in ${remaningCardsCount - 1}`)
        break
      default:
        break
    }

    switch (prevCard.value) {
      case "KING":
        VALUES.KING--
        setValueProb(`${VALUES.KING} in ${remaningCardsCount - 1}`)
        break
      case "QUEEN":
        VALUES.QUEEN--
        setValueProb(`${VALUES.QUEEN} in ${remaningCardsCount - 1}`)
        break
      case "JACK":
        VALUES.JACK--
        setValueProb(`${VALUES.JACK} in ${remaningCardsCount - 1}`)
        break
      case "10":
        VALUES.TEN--
        setValueProb(`${VALUES.TEN} in ${remaningCardsCount - 1}`)
        break
      case "9":
        VALUES.NINE--
        setValueProb(`${VALUES.NINE} in ${remaningCardsCount - 1}`)
        break
      case "8":
        VALUES.EIGHT--
        setValueProb(`${VALUES.EIGHT} in ${remaningCardsCount - 1}`)
        break
      case "7":
        VALUES.SEVEN--
        setValueProb(`${VALUES.SEVEN} in ${remaningCardsCount - 1}`)
        break
      case "6":
        VALUES.SIX--
        setValueProb(`${VALUES.SIX} in ${remaningCardsCount - 1}`)
        break
      case "5":
        VALUES.FIVE--
        setValueProb(`${VALUES.FIVE} in ${remaningCardsCount - 1}`)
        break
      case "4":
        VALUES.FOUR--
        setValueProb(`${VALUES.FOUR} in ${remaningCardsCount - 1}`)
        break
      case "3":
        VALUES.THREE--
        setValueProb(`${VALUES.THREE} in ${remaningCardsCount - 1}`)
        break
      case "2":
        VALUES.TWO--
        setValueProb(`${VALUES.TWO} in ${remaningCardsCount - 1}`)
        break
      case "ACE":
        VALUES.ACE--
        setValueProb(`${VALUES.ACE} in ${remaningCardsCount - 1}`)
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
      {suitProb && <h6>{suitProb} chance to match suit</h6>}
      {valueProb && <h6>{valueProb} chance to match value</h6>}
    </div>
  )
}

CardArea.propTypes = {

}

export default CardArea