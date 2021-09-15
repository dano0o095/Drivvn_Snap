import { connect } from 'react-redux'
import App from './App'
import { setNewCard, setRemainingCardCount } from '../store/cards/actions'

const mapStateToProps = state => ({
  newCard: state.cards.newCard,
  remainingCardscount: state.cards.remaining
})

const mapDispatchToProps = dispatch => ({
  setNewCard: (state) => {
    dispatch(setNewCard(state))
  },
  setRemainingCardCount: (count) => {
    dispatch(setRemainingCardCount(count))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)