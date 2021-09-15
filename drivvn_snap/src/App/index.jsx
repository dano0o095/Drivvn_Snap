import { connect } from 'react-redux'
import App from './App'
import { setNewCard } from '../store/cards/actions'

const mapStateToProps = state => ({
  newCard: state.cards.newCard,
})

const mapDispatchToProps = dispatch => ({
  setNewCard: (state) => {
    dispatch(setNewCard(state))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)