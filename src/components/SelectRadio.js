import PT from 'prop-types'
import React from 'react'
import { prop } from 'ramda'
import RadioSetIcon from '../icons/RadioSet'
import RadioUnsetIcon from '../icons/RadioUnset'



//*****************************************************************************
// Interface
//*****************************************************************************

const entryShape = {
  text: PT.string, // Text to show next to the radio button
  value: PT.any    // value associated with the radio button
}

const propTypes = {
  entries: PT.arrayOf(PT.shape(entryShape)).isRequired,
  activeEntry: PT.shape(entryShape),
  onSelect: PT.func, // sig:: onSelect(entry)
  className: PT.string,
}

//*****************************************************************************
// Component
//*****************************************************************************

const SelectRadio = props => {
  const { entries, activeEntry, onSelect, className } = props

  const st = {
    root: ` ${className}`,
  }

  const getText = prop('text')

  return (
    <div className={st.root}>
      {entries.map((entry, key) =>
        <RadioEntry
          {...{ entry, onSelect, key }}
          isActive={getText(entry)===getText(activeEntry)}
        />
      )}
    </div>
  )

}

SelectRadio.propTypes = propTypes
export default SelectRadio

//*****************************************************************************
// Sub Components
//*****************************************************************************

const menuEntryPropTypes = {
  entry: PT.shape(entryShape),
  isActive: PT.bool,
  onSelect: PT.func,
  className: PT.string
}

const RadioEntry = props => {

  const { entry, isActive, onSelect, className } = props

  const st = {
    root: `my-1 flex-row-start cursor-default ${className}`,
    text: 'ml-2 text-gray-600',
  }

  const onClick = () => onSelect(entry)

  return (
    <div className={st.root} {...{ onClick }} >
      { isActive ? <RadioSetIcon /> : <RadioUnsetIcon /> }
      <div className={st.text}>{entry.text}</div>
    </div>
  )
}

RadioEntry.propTypes = menuEntryPropTypes
