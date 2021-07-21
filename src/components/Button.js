import React from 'react'
import PT from 'prop-types'
import { noop } from 'ramda-adjunct'

//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  text: PT.string,
  type: PT.oneOf(['primary', 'secondaryLight', 'secondaryDark', 'white']),
  size: PT.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  onClick: PT.func,
  className: PT.string, // applied to root container
}

const defaultProps = {
  text: '??',
  type: 'primary',
  size: 'sm',
  onClick: noop

}

//*****************************************************************************
// Componenet
//*****************************************************************************

const Button = ({ text, type, size, onClick, className }) => {

  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs leading-4 rounded',
    sm: 'px-3 py-2 text-sm leading-4 rounded-md',
    md: 'px-4 py-2 text-sm leading-5 rounded-md',
    lg: 'px-4 py-2 text-base leading-6 rounded-md',
    xl: 'px-6 py-3 text-base leading-6 rounded-md',
  }

  const typeStyles = {
    primary: `border border-transparent text-white bg-indigo-600 hover:bg-indigo-500  focus:outline-none
              focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`,
    primaryLight: `border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-50  focus:outline-none
                     focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150`,
    secondary: `border border-transparent text-white bg-teal-600 hover:bg-teal-500  focus:outline-none
                    focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150`,
    secondaryLight: `border border-transparent text-teal-700 bg-teal-100 hover:bg-teal-50  focus:outline-none
                     focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-200 transition ease-in-out duration-150`,
    white: `border border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:outline-none
            focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150`,
  }


  const st = {
    root: `inline-flex rounded-md shadow-sm ${className}`,
    button: `inline-flex items-center font-medium rounded-md
             transition ease-in-out duration-150 ${sizeStyles[size]} ${typeStyles[type]}`,
  }

  return (
    <span className={st.root}>
      <button type="button" onClick={onClick} className={st.button}>
        {text}
      </button>
    </span>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button


