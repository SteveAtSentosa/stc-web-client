import React from 'react'
import PT from 'prop-types'
import { prop, noop } from 'ramda'

// TODO: make this a generalized nav links component (which can be vert or horiz)


//*****************************************************************************
// Interface
//*****************************************************************************

const targetShape = PT.shape({
  text: PT.string.isRequired,
  to: PT.string.isRequired,
})

const propTypes = {
  buttonSize: PT.oneOf(['sm', 'md', 'lg']),
  navTargets: PT.arrayOf(targetShape).isRequired,
  currentTarget: PT.string.isRequired,
  onNavButtonClick: PT.func.isRequired, // sig:: onNavButtonClick(navTarget.to)
}

const defaultProps = {
  buttonSize: 'sm'
}
//*****************************************************************************
// Component
//*****************************************************************************

const NavButtons = ({ buttonSize, navTargets, currentTarget, onNavButtonClick, className }) => {

  const st = {
    root: className,
  }

  return (
    <div className={st.root}>
      {navTargets.map((navTarget, key) => {
        const isActive = currentTarget === prop('to', navTarget)
        return <NavButton {...{
          key, buttonSize, navTarget, isActive, onNavButtonClick
        }} />
      })}
    </div>
  )
}



NavButtons.propTypes = propTypes
NavButtons.defaultProps = defaultProps
export default NavButtons

//*****************************************************************************
// Helpers
//*****************************************************************************

const navButtonPropTypes = {
  buttonSize: PT.oneOf(['sm', 'md', 'lg']),
  navTarget: targetShape,
  isActive: PT.bool,
  onNavButtonClick: PT.func,
}

const NavButton = ({ buttonSize, navTarget, isActive, onNavButtonClick }) => {

  const { text, to } = navTarget
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs leading-4 rounded-sm',
    md: 'px-3 py-1.5 text-sm leading-5 rounded-md',
    lg: 'px-4 py-3 text-base leading-6 rounded-md',
  }

  const stateStyles = {
    active: 'text-white bg-gray-900 focus:outline-none',
    inactive: `text-gray-300 hover:text-white hover:bg-gray-700
               focus:outline-none focus:text-white focus:bg-gray-700 transition`,
  }
  const st = {
    root: `-ml-1 mr-2 md:mr-8 font-medium leading-5 transition duration-150 ease-in-out
           ${sizeStyles[buttonSize]}
           ${isActive ? stateStyles.active : stateStyles.inactive}`,
  }

  return (
    <button type="button" onClick={() =>
      onNavButtonClick(to)} className={st.root}
    >
      {text}
    </button>
  )
}

NavButton.propTypes = navButtonPropTypes


