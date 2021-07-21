import PT from 'prop-types'
import React from 'react'
import { prop } from 'ramda'
import Check from '../icons/Check'

//* ****************************************************************************
// Interface
//* ****************************************************************************

const entryShape = {
  text: PT.string, // Text to show next to the list item
  value: PT.any // value associated with the list item
}

const propTypes = {
  entries: PT.arrayOf(PT.shape(entryShape)).isRequired,
  activeEntries: PT.arrayOf(PT.string),
  onSelect: PT.func, // sig:: onSelect(entry)
  className: PT.string
}

//* ****************************************************************************
// Component
//* ****************************************************************************

const SelectList = ({ entries, activeEntries, onSelect, className }) => {
  const st = {
    root: ` ${className}`,
    textContainer: 'flex-row-start',
    leftEntries: 'w-24 md:w-32',
    rightEntries: 'ml-8 md:ml-10'
  }

  const getValue = prop('value')

  const leftEntries = [...entries]
  const rightEntries = leftEntries.splice(0, (leftEntries.length / 2.0 + 0.5))

  return (
    <div className={st.root}>
      <div className={st.textContainer}>
        <div className={st.leftEntries}>
          {leftEntries.map((entry, key) =>
            <ListEntry
              {...{ entry, onSelect, key }}
              isActive={activeEntries.includes(getValue(entry))}
            />
          )}
        </div>
        <div className={st.rightEntries}>
          {rightEntries.map((entry, key) =>
            <ListEntry
              {...{ entry, onSelect, key }}
              isActive={activeEntries.includes(getValue(entry))}
            />
          )}
        </div>
      </div>
    </div>
  )
}

SelectList.propTypes = propTypes
export default SelectList

//* ****************************************************************************
// Sub Components
//* ****************************************************************************

const listEntryPropTypes = {
  entry: PT.shape(entryShape),
  isActive: PT.bool,
  onSelect: PT.func,
  className: PT.string
}

const ListEntry = ({ entry, isActive, onSelect, className }) => {
  const st = {
    root: `my-1 flex-row-start cursor-default ${className}`,
    text: 'ml-2 text-gray-600',
    checkbox: 'border-b-2'
  }

  const onClick = () => onSelect(entry)

  return (
    <div className={st.root} {...{ onClick }} >
      <div className={st.checkbox}>
        <Check
          color='primary'
          className={isActive ? 'visible' : 'invisible'} />
      </div>
      <div className={st.text}>{entry.text}</div>
    </div>
  )
}

ListEntry.propTypes = listEntryPropTypes
