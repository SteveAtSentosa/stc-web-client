import React, { useContext } from 'react'
import PT from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import fuLogo from '../svg/fu-logo.svg'
import NavButtons from '../components/NavButtons'

//*****************************************************************************
// Interface
//*****************************************************************************

const targetShape = PT.shape({
  text: PT.string.isRequired,
  to: PT.string.isRequired,
})

const propTypes = {
  navTargets: PT.arrayOf(targetShape),
}

const AppHeader = ({ navTargets })  => {

  const history = useHistory()
  const location = useLocation()

  const onNavButtonClick = to => {
    history.push(to)
  }

  const currentTarget = location.pathname
  const buttonSize = 'sm'
  const st = {
    root: 'px-8 py-3 bg-primary-dark md:flex-row-centered',
    logo: 'w-40',
    navButtons: 'mt-2 md:mt-2 md:ml-16'
  }

  return (
    <div className={st.root}>
      <img src={fuLogo} className={st.logo} alt="FU Logo" />
      <NavButtons {...{
        buttonSize, navTargets, currentTarget,
        onNavButtonClick, className: st.navButtons
      }}/>
    </div>
  )
}

AppHeader.propTypes = propTypes
export default AppHeader
