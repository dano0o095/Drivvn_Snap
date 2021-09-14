import { connect } from 'react-redux'
import App from './App'
import { setNewCard, setPrevCard } from '../store/cards/actions'

const mapStateToProps = state => ({
  newCard: state.cards.newCard,
})

const mapDispatchToProps = dispatch => ({
  setNewCard: (state) => {
    dispatch(setNewCard(state))
  },
  setPrevCard: (state) => {
    dispatch(setPrevCard(state))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)