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

const SelectIcon = ({ size, color, viewBox, className }) =>
  <IconBase {...{ size, color, viewBox, className }} fill='none' stroke='currentColor'>
    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconBase>

SelectIcon.propTypes = propTypes
SelectIcon.defaultProps = defaultProps
export default SelectIcon
