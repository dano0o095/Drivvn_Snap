import { connect } from 'react-redux'
import App from './App'
import { setNewCard } from '../store/cards/actions'


const mapDispatchToProps = dispatch => ({
  setNewCard: (state) => {
    dispatch(setNewCard(state))
  },
})

export default connect(null, mapDispatchToProps)(App)