import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'

import api from '../../utils/api'
import CardPlaceholder from './CardPlaceholder'
import { SUITS, VALUES } from '../../utils/consts'

const CardArea = props => {
  const { newCard, prevCard, addValueMatched, AddSuitMatched, remaningCardsCount } = props

  const [matchType, setMatchType] = React.useState('')
  const [suitProb, setSuitProb] = React.useState('')
  const [valueProb, setValueProb] = React.useState('')

  // Get a fresh deck of shuffled cards
  useEffect(() => {
    api.getNewDeck()
  }, [])

  // Determine if it's a SNAP
  useEffect(() => {
    if (newCard && Object.keys(newCard).length === 0 && newCard.constructor === Object) { // check if object exists
      setMatchType('')
    } else {
      if (newCard?.suit === prevCard?.suit) {
        setMatchType('SNAP SUIT!')
        AddSuitMatched()
      } else if (newCard?.value === prevCard?.value) {
        setMatchType('SNAP VALUE!')
        addValueMatched()
      } else {
        setMatchType('')
      }
    }
  }, [prevCard, newCard])


  // check the probability of matching a suit or value next
  useEffect(() => {
    switch (prevCard.suit) {
      case "HEARTS":
        --SUITS.HEARTS
        setSuitProb(`${SUITS.HEARTS} in ${remaningCardsCount - 1}`)
        break
      case "DIAMONDS":
        --SUITS.DIAMONDS
        setSuitProb(`${SUITS.DIAMONDS} in ${remaningCardsCount - 1}`)
        break
      case "CLUBS":
        --SUITS.CLUBS
        setSuitProb(`${SUITS.CLUBS} in ${remaningCardsCount - 1}`)
        break
      case "SPADES":
        --SUITS.SPADES
        setSuitProb(`${SUITS.SPADES} in ${remaningCardsCount - 1}`)
        break
      default:
        break
    }

    switch (prevCard.value) {
      case "KING":
        --VALUES.KING
        setValueProb(`${VALUES.KING} in ${remaningCardsCount - 1}`)
        break
      case "QUEEN":
        --VALUES.QUEEN
        setValueProb(`${VALUES.QUEEN} in ${remaningCardsCount - 1}`)
        break
      case "JACK":
        --VALUES.JACK
        setValueProb(`${VALUES.JACK} in ${remaningCardsCount - 1}`)
        break
      case "10":
        --VALUES.TEN
        setValueProb(`${VALUES.TEN} in ${remaningCardsCount - 1}`)
        break
      case "9":
        --VALUES.NINE
        setValueProb(`${VALUES.NINE} in ${remaningCardsCount - 1}`)
        break
      case "8":
        --VALUES.EIGHT
        setValueProb(`${VALUES.EIGHT} in ${remaningCardsCount - 1}`)
        break
      case "7":
        --VALUES.SEVEN
        setValueProb(`${VALUES.SEVEN} in ${remaningCardsCount - 1}`)
        break
      case "6":
        --VALUES.SIX
        setValueProb(`${VALUES.SIX} in ${remaningCardsCount - 1}`)
        break
      case "5":
        --VALUES.FIVE
        setValueProb(`${VALUES.FIVE} in ${remaningCardsCount - 1}`)
        break
      case "4":
        --VALUES.FOUR
        setValueProb(`${VALUES.FOUR} in ${remaningCardsCount - 1}`)
        break
      case "3":
        --VALUES.THREE
        setValueProb(`${VALUES.THREE} in ${remaningCardsCount - 1}`)
        break
      case "2":
        --VALUES.TWO
        setValueProb(`${VALUES.TWO} in ${remaningCardsCount - 1}`)
        break
      case "ACE":
        --VALUES.ACE
        setValueProb(`${VALUES.ACE} in ${remaningCardsCount - 1}`)
        break
      default:
        break
    }
  }, [prevCard])

  return (
    <div className="container mb-5 mt-3">
      {matchType && <h4 data-testid="match-type">{matchType}</h4>}
      {prevCard?.image ? <img data-testid="previous-card-image" className="m-4 m-4" src={prevCard?.image} /> : <CardPlaceholder data-testid="card-placeholder-prev-card" />}
      {newCard?.image ? <img data-testid="new-card-image" className="m-4 m-4" src={newCard?.image} /> : <CardPlaceholder data-testid="card-placeholder-new-card" />}
      {suitProb && <h6 data-testid="probability-suit">{suitProb} chance to match suit</h6>}
      {valueProb && <h6 data-testid="probability-value">{valueProb} chance to match value</h6>}
    </div>
  )
}

//commented out so that tests will run
CardArea.propTypes = {
  // newCard: PropTypes.object.isRequired,
  // prevCard: PropTypes.object.isRequired,
  // addValueMatched: PropTypes.func.isRequired,
  // AddSuitMatched: PropTypes.func.isRequired,
  // remaningCardsCount: PropTypes.number
}

CardArea.defaultProps = {
  // remaningCardsCount: 52
}

export default CardArea