import React, { useEffect } from 'react'
import propTypes from 'prop-types'

import api from '../../utils/api'

const CardArea = props => {

  useEffect(() => {
    api.getNewDeck()
  }, [])

  return (
    <div>
      CardArea
    </div>
  )
}

CardArea.propTypes = {

}

export default CardArea