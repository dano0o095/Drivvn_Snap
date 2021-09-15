import { connect } from 'react-redux'
import Results from './Results'

const mapStateToProps = state => ({
  totalValuesMatched: state.cards.matchedValues,
  totalSuitesMatched: state.cards.matchedSuites
})

export default connect(mapStateToProps, null)(Results)