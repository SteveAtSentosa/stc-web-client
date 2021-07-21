import React from 'react'
import PT from 'prop-types'
import headShot from '../assets/head-shot.jpg'

const propTypes = {
  className: PT.string // to override root container styles
}

const HeadShot = ({ className }) => {
  return (
    <img
      className={`inline-block rounded-full w-14 ${className}`}
      src={headShot}
    />
  )
}

HeadShot.propTypes = propTypes
export default HeadShot
