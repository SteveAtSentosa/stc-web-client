import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AppHeader from './AppHeader'
import Home from '../pages/Home'
import SomePage from '../pages/SomePage'
import SomeOtherPage from '../pages/SomeOtherPage'



export const AppLayout = () => {

  const navTargets = [
    { text: 'Home', to: '/home' },
    { text: 'Some Page', to: '/some-page' },
    { text: 'Some Other Page', to: '/some-other-page' },
  ]

  const st = {
    pages: ''
  }

  return (
    <>
      <AppHeader {...{ navTargets }}/>
      <div className={st.pages}>
        <Switch className={st.pages}>
          <Route exact path="/"><Redirect to="/home" /></Route>
          <Route path="/home" component={Home} />
          <Route path="/some-page" component={SomePage} />
          <Route path="/some-other-page" component={SomeOtherPage} />
        </Switch>
      </div>
    </>
  )
}

export default AppLayout
