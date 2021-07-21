import React from 'react'
import PT from 'prop-types'
import ArrowRight from '../icons/ArrowRight'
import ArrowLeft from '../icons/ArrowLeft'

//*****************************************************************************
// Interface
//*****************************************************************************

// UI components are only shown for onClickXXX fxns that are defined

const propTypes = {
  labelText: PT.string,
  labelIcon: PT.node, // NYI
  className: PT.string,
  onClickPrev: PT.func,
  onClickNext: PT.func,
  onClickLabel: PT.func, // NYI
}

const defaultProps = {
  className: ''
}

//*****************************************************************************
// Component
//*****************************************************************************


const Pager = props => {
  const { labelText, onClickPrev, onClickNext, className } = props

  const st = {
    // root: `mt-1 py-4 flex items-center justify-between border-b border-gray-200 ${className}`,
    root: `mt-1 py-4 flex items-center justify-between ${className}`,
    label: 'font-medium text-lg md:text-lg',
    navContainer: 'cursor-pointer inline-flex items-center transition ease-in-out duration-150',
    navText: 'text-sm font-medium text-gray-500 md:hover:text-primary'
  }

  return (
    <div className={st.root}>
      <div className="flex flex-1 w-0">
        <nav className={st.navContainer} onClick={onClickPrev}>
          <ArrowLeft className='mr-2'/>
          <span className={st.navText}>Prev</span>
        </nav>
      </div>
      <div className={st.label}>{labelText}</div>
      <div className="flex justify-end flex-1 w-0">
        <nav className={st.navContainer} onClick={onClickNext}>
          <span className={st.navText}>Next</span>
          <ArrowRight  className='ml-2'/>
        </nav>
      </div>
    </div>
  )
}

Pager.propTypes = propTypes
Pager.defaultProps = defaultProps
export default Pager
