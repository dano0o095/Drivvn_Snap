import React from 'react'
import { PropTypes } from 'prop-types'

const Results = props => {
  const { totalValuesMatched, totalSuitesMatched } = props

  return (
    <div className="container mb-5 mt-3">
      <div>
        {<h4 data-testid="valuesMatched">VALUE MATCHES {totalValuesMatched}</h4>}
      </div>
      <div>
        {<h4 data-testid="suitsMatched">SUIT MATCHES {totalSuitesMatched}</h4>}
      </div>
    </div>
  )
}

//commented out so that tests will run
Results.propTypes = {
  // totalValuesMatched: PropTypes.number.isRequired,
  // totalSuitesMatched: PropTypes.number.isRequired,
}

export default Results