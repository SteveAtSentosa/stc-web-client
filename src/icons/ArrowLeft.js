import React from 'react'
import PT from 'prop-types'
import IconBase from './IconBase'


//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  size: PT.number, // tailwind width/height parameter
  viewBox: PT.string,
  color: PT.string, // tailwind color
  className: PT.string
}

const defaultProps = {
  size: 5,
  viewBox: '0 0 20 20',
  color: 'gray-400'

}




//*****************************************************************************
// Component
//*****************************************************************************

const ArrowNarrowLeft = ({ size, color, viewBox, className }) =>
  <IconBase {...{ size, color, viewBox, className }} fill='currentColor'>
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
  </IconBase>

ArrowNarrowLeft.propTypes = propTypes
ArrowNarrowLeft.defaultProps = defaultProps
export default ArrowNarrowLeft



