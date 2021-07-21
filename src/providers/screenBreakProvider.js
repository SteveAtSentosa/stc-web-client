import React, { createContext, useState, useEffect } from 'react'
import PT from 'prop-types'
import { screenBreaks } from '../styles/styleConfigs'

let _screenBreakListenerRegistered = false
let _curScreenBreak = 'n/a'

export const ScreenBreakContext = createContext('breakpoint context not found')

export const ScreenBreakProvider = ({ children }) => {

  _curScreenBreak = screenWidthToScreenBreak(window.innerWidth)
  const [screenBreak, setScreenBreak] = useState(_curScreenBreak)

  startScreenBreakListner(setScreenBreak)
  useEffect(() => {
    _curScreenBreak = screenBreak
  })

  return (
    <ScreenBreakContext.Provider value={screenBreak}>
      {children}
    </ScreenBreakContext.Provider>
  )
}

ScreenBreakProvider.propTypes = { children: PT.element }

const screenWidthToScreenBreak = screenWidth => {
  return screenWidth <= screenBreaks.sm ? 'sm' :
         screenWidth <= screenBreaks.md ? 'md' :
         screenWidth <= screenBreaks.lg ? 'lg' : 'xl'
}

const screenBreakListener = setScreenBreak => () => {
  const newScreenBreak = screenWidthToScreenBreak(window.innerWidth)
  if (newScreenBreak !== _curScreenBreak) {
    setScreenBreak(newScreenBreak)
  }
}

const startScreenBreakListner = setScreenBreak => {
  if (!_screenBreakListenerRegistered) {
    window.addEventListener('resize', screenBreakListener(setScreenBreak))
    _screenBreakListenerRegistered = true
  }
}


