import PT from 'prop-types'
import React, { useState, useContext } from 'react'
import SelectIcon from '../icons/SelectIcon'
import CheckIcon from '../icons/Check'



// TODO:
// * get purple/white check icon working


//*****************************************************************************
// Interface
//*****************************************************************************

const entryShape = {
  text: PT.string, // Text to show in the menu entry
  value: PT.any    // value associated with the entry
}

const propTypes = {
  label: PT.string,
  entries: PT.arrayOf(PT.shape(entryShape)).isRequired,
  activeEntry: PT.shape(entryShape), // (entryShape.text for active entry)
  onSelect: PT.func, // sig:: onSelect(entry)
  className: PT.string,
}

//*****************************************************************************
// Component
//*****************************************************************************

const SelectMenu = props => {

  const { label, entries, activeEntry, onSelect, className } = props
  const [menuOpen, setMenuOpen] = useState(false)

  const onEntrySelect = entry => {
    setMenuOpen(false)
    onSelect(entry)
  }

  const st = {
    root: `z-50 ${className}`,
    selection: 'inline-block w-full rounded-md shadow-sm',
    selectButton: `relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300
                   cursor-default rounded-md focus:outline-none focus:shadow-outline-blue
                   focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
    selectButtonText: 'block truncate',
    selectIcon: 'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    menuContainer: 'absolute w-full mt-1 bg-white shadow-lg rounded-md',
    menu: `py-1 overflow-auto text-base max-h-60 rounded-md leading-6 shadow-xs
           focus:outline-none sm:text-sm sm:leading-5`,
  }

  return (
    <div className={st.root}>
      { label && <label className={st.label}>
        {label}
      </label> }

      <div className='relative'>
        <span className={st.selection}>
          <button type='button'
            onClick={() => setMenuOpen(!menuOpen)}
            className={st.selectButton}
          >
            <span className={st.selectButtonText}>
              {activeEntry.text}
            </span>
            <span className={st.selectIcon}>
              <SelectIcon />
            </span>
          </button>
        </span>

        { menuOpen && <div className={st.menuContainer}>
          <ul className={st.menu}>
            {entries.map((entry, key) =>
              <MenuEntry
                {...{ entry, onEntrySelect, key }}
                isActive={entry.text===activeEntry.text}
              />
            )}
          </ul>
        </div> }
      </div>
    </div>
  )

}

SelectMenu.propTypes = propTypes
export default SelectMenu

//*****************************************************************************
// Sub Components
//*****************************************************************************

const menuEntryPropTypes = {
  entry: PT.shape(entryShape),
  isActive: PT.bool,
  onEntrySelect: PT.func,
  className: PT.string
}

const MenuEntry = props => {

  const { entry, isActive, onEntrySelect, className } = props

  const st = {
    root: `relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none
           hover:text-white hover:bg-primary ${className}`,
    text: 'block font-normal truncate',
    iconContainer: 'absolute inset-y-0 left-0 flex items-center pl-2',
  }

  const onClick = () => onEntrySelect(entry)

  return (
    <div className={st.root} {...{ onClick }} >
      <span className={st.text}>
        {entry.text}
      </span>
      { isActive && <span className={st.iconContainer}>
        <CheckIcon />
      </span> }
    </div>
  )
}

MenuEntry.propTypes = menuEntryPropTypes
