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

const ArrowNarrowRight = ({ size, color, viewBox, className }) =>
  <IconBase {...{ size, color, viewBox, className }} fill='currentColor'>
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
  </IconBase>

ArrowNarrowRight.propTypes = propTypes
ArrowNarrowRight.defaultProps = defaultProps
export default ArrowNarrowRight
