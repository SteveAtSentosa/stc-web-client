import React, { createContext } from 'react'
import PT from 'prop-types'
import theme from '../styles/theme'

export const ThemeContext = createContext('no theme')

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = { children: PT.element }

