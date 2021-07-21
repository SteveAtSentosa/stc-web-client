import React from 'react'
import PT from 'prop-types'
import { toLower, join } from 'ramda'
import { noop } from 'ramda-adjunct'
import {
  getWeighInProps, getWeighInDate
} from '@fituprising/interface/weigh-in-access'
import { weighInReactShape } from '../../dataModels/types/weighIn/weighInReactShapes'
import { emotionStr, reactionStr, weightStr, weighInDeltaInfo } from '../../utils/weightDataUtils'
import { smartHumanDay } from '@fituprising/common/time-utils'
import Button from '../../components/Button'

console.log('getWeighInProps: ', getWeighInProps)

//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  weighIn: PT.shape(weighInReactShape).isRequired,
  buttonText: PT.string, // if supplied button w this text is displayed
  onButtonClick: PT.func,
  className: PT.string // applied to root container
}

const defaultProps = {
  onButtonClick: noop,
  className: ''
}

//*****************************************************************************
// Component
//*****************************************************************************


const ViewWeighIn = props => {

  const { weighIn, buttonText, onButtonClick, className } = props
  const { weight, unit, prevWeighIn } = getWeighInProps(
    ['weight', 'unit', 'prevWeighIn'], weighIn
  )

  const st = {
    root: ` ${className}`,
    weighInContainer: 'flex-row-end pb-2 border-b-2 border-gray-200',
    weighInLabel: 'text-base text-gray-600',
    weight: 'text-2xl md:text-3xl text-gray-800',
  }

  return (
    <div className={st.root}>
      <div className={st.weighInContainer}>
        <div className='w-32 md:w-40'>
          <div className={st.weighInLabel}>Weigh In</div>
          <div className={st.weight}>{weightStr(weight, unit)}</div>
        </div>
        <Button
          className='pb-1 ml-4'
          text={buttonText}
          onClick={onButtonClick}
        />
      </div>
      { weight && prevWeighIn ?
          <Reaction className='mt-2' {...{ weighIn, prevWeighIn }}/> :
        prevWeighIn ?
          <PrevWeighIn className='mt-2' {...{ prevWeighIn }}/> :
          null }
    </div>
  )
}

ViewWeighIn.propTypes = propTypes
ViewWeighIn.defaultProps = defaultProps
export default ViewWeighIn

//*****************************************************************************
// Reaction Sub Component
//*****************************************************************************

const reactionPropTypes = {
  weighIn: PT.object,
  prevWeighIn: PT.object,
  className: PT.string
}

const reactionDefaultProps = {
  weighIn: {},
  prevWeighIn: {},
  className: ''
}

const Reaction = props => {

  const { weighIn, prevWeighIn, className } = props
  const { emotions, reaction } = getWeighInProps(
    ['emotions', 'reaction'], weighIn
  )

  const { sinceStr, deltaStr } = weighInDeltaInfo(weighIn, prevWeighIn)
  const emotionsStr =
    join(', ', (emotions||[]).map(emotion => toLower(emotionStr(emotion))))

  const st = {
    root: `text-sm text-gray-500 italic ${className}`,
  }

  return (
    <div className={st.root}>
      <div>{deltaStr} {sinceStr}</div>
      {reaction && <div>{reactionStr(reaction)}</div>}
      {emotions && <div>I am feeling {emotionsStr}</div>}
    </div>
  )
}

Reaction.propTypes = reactionPropTypes
Reaction.defaultProps = reactionDefaultProps

//*****************************************************************************
// PrevWeighIn  Sub Component
//*****************************************************************************

const prevWeighInPropTypes = {
  prevWeighIn: PT.object,
  className: PT.string
}

const prevWeighInDefaultProps = {
  className: ''
}

const PrevWeighIn = props => {

  const { prevWeighIn, className } = props
  if (!prevWeighIn) return null

  const { weight, unit, dateTime } = getWeighInProps(
    ['weight', 'unit', 'dateTime'], prevWeighIn
  )
  const weighInDay = smartHumanDay(getWeighInDate(dateTime))

  const st = {
    root: `flex-row-start text-sm text-gray-500 ${className}`,
  }

  return (
    <div className={st.root}>
      <div>
        <div>Last Weigh In</div>
        <div>Weight</div>
      </div>
      <div className='ml-3 font-semibold'>
        <div>{weighInDay}</div>
        <div>{weightStr(weight, unit)}</div>
      </div>
    </div>
  )
}

PrevWeighIn.propTypes = prevWeighInPropTypes
PrevWeighIn.defaultProps = prevWeighInDefaultProps

