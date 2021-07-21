import '../styles/build/styles.css'

import React, { useEffect  } from 'react'
import { hot } from 'react-hot-loader'
import { compose } from 'ramda'
import { BrowserRouter as Router } from 'react-router-dom'
import { configGlobalStyles } from './appConfig'
import { ScreenBreakProvider } from '../providers/screenBreakProvider'
import { ThemeProvider } from '../providers/themeProvider'
import AppLayout from './AppLayout'

//*****************************************************************************
// The App
//*****************************************************************************

const InitializedLayout = () => {
  useEffect(configGlobalStyles)
  return <AppLayout/>
}

const initializedLayout = <InitializedLayout />

const router = children => <Router>{children}</Router>

const themeProvider = children =>
  <ThemeProvider>{children}</ThemeProvider>

const screenBreakProvider = children =>
  <ScreenBreakProvider>{children}</ScreenBreakProvider>

const App = () => compose(
  router,
  screenBreakProvider,
  themeProvider,
)(initializedLayout)

export default hot(module)(App)
