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
  insideColor: PT.string, // tailwind color
  className: PT.string
}

const defaultProps = {
  size: 5,
  viewBox: '0 0 20 20',
  color: 'gray-500',
  insideColor: 'primary'
}

//*****************************************************************************
// Component
//*****************************************************************************


const RadioSet = ({ size, color, insideColor, viewBox, className }) =>
  <IconBase {...{ size, color, viewBox, className }}>
    <>
      <g className={`text-${color} stroke-current`} strokeWidth="1" fill="none" fillRule="evenodd">
        <circle fill="none" cx={size*2} cy={size*2} r={size*2-0.5}></circle>
      </g>
      <g className={`text-${insideColor} fill-current`} stroke="none" fillRule="evenodd">
        <circle stroke="none" cx={size*2} cy={size*2} r={size}></circle>
      </g>
    </>
  </IconBase>

RadioSet.propTypes = propTypes
RadioSet.defaultProps = defaultProps
export default RadioSet

