import React from 'react'
import PT from 'prop-types'
import { prop } from 'ramda'

// TODO: make this a generalized nav links component (which can be vert or horiz)


//*****************************************************************************
// Interface
//*****************************************************************************

const pageLinkShape = PT.shape({
  text: PT.string.isRequired,
  to: PT.string.isRequired,
})

const propTypes = {
  pageLinks: PT.arrayOf(pageLinkShape).isRequired,
  currentPage: PT.string.isRequired,
  onLinkClick: PT.func.isRequired, // sig:: onLinkClick(pageLink.to)
}

//*****************************************************************************
// Component
//*****************************************************************************

const AppNavLinks = ({ pageLinks, currentPage, onLinkClick }) => {
  const st = {
    root: 'p-3 text-center bg-gray-200',
  }
  return (
    <div className={st.root}>
      {pageLinks.map((pageLink, key) => {
        const isActive = currentPage === prop('to', pageLink)
        return <NavLink {...{ key, pageLink, isActive, onLinkClick }} />
      })}
    </div>
  )
}

AppNavLinks.propTypes = propTypes
export default AppNavLinks

//*****************************************************************************
// Helpers
//*****************************************************************************

const pageLinkPropTypes = {
  pageLink: pageLinkShape,
  isActive: PT.bool,
  onLinkClick: PT.func,
}

const NavLink = ({ pageLink, isActive, onLinkClick }) => {
  const { text, to } = pageLink
  const commonStyles = 'text-sm inline cursor-pointer px-8'
  const st = {
    active: `${commonStyles} font-bold text-fu-purple`,
    inactive: `${commonStyles} font-normal text-gray-500 `,
  }
  return (
    <div
      className={isActive ? st.active : st.inactive }
      onClick={() => onLinkClick(to)}
    > {text}
    </div>
  )
}

NavLink.propTypes = pageLinkPropTypes
