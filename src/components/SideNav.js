import React from 'react'
import PT from 'prop-types'


//*****************************************************************************
// Interface
//*****************************************************************************

const navEntryShape = {
  name: PT.string.isRequired,
  to: PT.string.isRequired,
}

const navSectionShape = {
  headerIcon: PT.node,
  headerText: PT.string.isRequired,
  navEntries: PT.arrayOf(PT.shape(navEntryShape))
}

const propTypes = {
  navSections: PT.arrayOf(navSectionShape)
}

//*****************************************************************************
// Component
//*****************************************************************************

const SideNav = props => {

  const st = {
    root: ''
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Off-canvas menu for mobile */}
      <div className="dbg-border-orange md:hidden">
        <div className="fixed inset-0 z-40 flex">
          {/*
            Off-canvas menu overlay, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
              From: "opacity-100"
              To: "opacity-0"
          */}
          <div className="fixed inset-0 dbg-border">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          {/*
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      */}
          <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
            <div className="absolute top-0 right-0 p-1 -mr-14">
              <button className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="w-auto h-8" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow" />
            </div>
            <div className="flex-1 h-0 mt-5 overflow-y-auto">
              <nav className="px-2">
                <a href="#" className="flex items-center px-2 py-2 text-base font-medium text-gray-900 bg-gray-100 group leading-6 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
              Dashboard
                </a>
                <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium text-gray-600 group leading-6 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
              Team
                </a>
                <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium text-gray-600 group leading-6 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                  </svg>
              Projects
                </a>
                <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium text-gray-600 group leading-6 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
              Calendar
                </a>
                <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium text-gray-600 group leading-6 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                  </svg>
              Documents
                </a>
                <a href="#" className="flex items-center px-2 py-2 mt-1 text-base font-medium text-gray-600 group leading-6 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg className="w-6 h-6 mr-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
              Reports
                </a>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="dbg-border hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 pt-5 pb-4 bg-white border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto h-8" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow" />
          </div>
          <div className="flex flex-col flex-1 h-0 mt-5 overflow-y-auto">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 bg-white">
              <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-gray-100 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
            Dashboard
              </a>
              <a href="#" className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
            Team
              </a>
              <a href="#" className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                </svg>
            Projects
              </a>
              <a href="#" className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
            Calendar
              </a>
              <a href="#" className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>
            Documents
              </a>
              <a href="#" className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 group leading-5 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                <svg className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
            Reports
              </a>
            </nav>
          </div>
        </div>
      </div>




      <div className="dbg-border-blue flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative z-0 flex-1 py-6 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard
            </h1>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="border-4 border-gray-200 border-dashed rounded-lg h-96">dude</div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>




    </div>
  )

}

SideNav.propTypes = propTypes
export default SideNav
