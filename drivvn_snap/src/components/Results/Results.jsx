import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

const Results = props => {
  const { totalValuesMatched, totalSuitesMatched } = props

  return (
    <div className="container mb-5 mt-3">
      <div>
        {<h4>VALUE MATCHES {totalValuesMatched}</h4>}
      </div>
      <div>
        {<h4>SUIT MATCHES {totalSuitesMatched}</h4>}
      </div>
    </div>
  )
}

Results.propTypes = {

}

export default Results