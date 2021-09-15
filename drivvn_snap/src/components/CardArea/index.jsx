import { connect } from 'react-redux'
import CardArea from './CardArea'
import { AddValueMatched, AddSuitMatched } from '../../store/cards/actions'

const mapStateToProps = state => ({
  newCard: state.cards.newCard,
  prevCard: state.cards.prevCard,
  totalValuesMatched: state.cards.matchedValues,
  totalSuitesMatched: state.cards.matchedSuits,
  remaningCardsCount: state.cards.remaining
})

const mapDispatchToProps = dispatch => ({
  addValueMatched: () => {
    dispatch(AddValueMatched())
  },
  AddSuitMatch: () => {
    dispatch(AddSuitMatched())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CardArea)