import React from 'react'
import PT from 'prop-types'
import { pick } from 'ramda'
import NumberFormat from 'react-number-format'


// TODO:
// * styling props for number, trailing text, placeholder
// * react-number-format is not the greatest (arrows not working for example) ... write own version

//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  label: PT.string,
  min: PT.number,
  max: PT.number,
  step: PT.number,
  value: PT.number,
  precision: PT.number,
  onChange: PT.func, // sig:: onChange(newFloatString)
  onEnter: PT.func, // TODO: NYI
  placeholder: PT.string,
  trailingText: PT.string,
  className: PT.string, // applies to root container
}

const defaultProps = {
  step: 0.1,
  min: 0.0,
  precision: 2
}

//*****************************************************************************
// Component
//*****************************************************************************

const InputFloat = props => {
  const { trailingText, label, onChange, step, precision, value, placeholder, className } = props

  const onValueChange = input => {
    onChange(input.floatValue)
  }


  const st = {
    root: ` ${className}`,
    label: 'block text-sm font-medium text-gray-700 leading-5',
    inputContainer: 'flex-row-start',
    // input: 'block w-full form-input sm:text-sm sm:leading-5 mr-6',
    placeholder: 'w-32 text-base text-gray-400 relative bottom-8',
    input: 'w-32 pb-2 border-b-2 border-primary',
    trailingTextContainer: 'pl-4 pointer-events-none',
    trailingText: 'text-gray-400',
  }

  return (
    <div className={st.root}>
      { label && <label htmlFor="floatInput" className={st.label}>{label}</label> }
      <div className={st.inputContainer}>
        <div className={st.input}>
          <NumberFormat
            value={Number.parseFloat(value).toFixed(precision)}
            onValueChange={onValueChange}
            step={step}
          />
        </div>
        <div className={st.trailingTextContainer}>
          <span className={st.trailingText}>{trailingText}</span>
        </div>
      </div>
      {/* { !value && <div className={st.placeholder}>{placeholder}</div> } */}
    </div>
  )
}

// {/* { label && <label htmlFor="floatInput" className={st.label}>{label}</label> }
// <div className={st.inputContainer}>
//   <input id="floatInput" type="float" className={st.input} {...inputProps} />
//   <div className={st.trailingTextContainer}>
//     <span className={st.trailingText}>{trailingText}</span>
//   </div>
// </div> */}


InputFloat.propTypes = propTypes
InputFloat.defaultProps = defaultProps
export default InputFloat





