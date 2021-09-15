import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

const Results = props => {
  const { totalValuesMatched, totalSuitesMatched } = props

  return (
    <div className="container mb-5 mt-3">
      <div>
        {`VALUE MATCHES ${totalValuesMatched}`}
      </div>
      <div>
        {`SUIT MATCHES ${totalSuitesMatched}`}
      </div>
    </div>
  )
}

Results.propTypes = {

}

export default Results