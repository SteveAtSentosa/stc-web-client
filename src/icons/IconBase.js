import React from 'react'
import PT from 'prop-types'

//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  size: PT.number, // tailwind width/height parameter
  color: PT.string, // tailwind color
  viewBox: PT.string,
  fill: PT.string,
  stroke: PT.string,
  className: PT.string,
  children: PT.element,
}

const defaultProps = {
  size: 5,
  viewBox: '0 0 20 20',
  color: 'gray-400',
  fill: 'currentColor',
  stroke: 'none',
}

//*****************************************************************************
// Component
//*****************************************************************************

const IconBase = props => {

  const { size, color, viewBox, className, children, fill, stroke } = props

  const st = {
    root: `inline-flex w-${size} h-${size} text-${color} ${className}`,
  }

  // <svg className={st.root} viewBox={viewBox} fill={fill}>
  return (
    <svg className={st.root} {...{ viewBox, fill, stroke }} >
      {children}
    </svg>
  )


}

IconBase.propTypes = propTypes
IconBase.defaultProps = defaultProps
export default IconBase
