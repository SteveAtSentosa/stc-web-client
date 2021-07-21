import React, { useState } from 'react'
import PT from 'prop-types'
import { find, propEq, prop } from 'ramda'
import { noop } from 'ramda-adjunct'
import { reactionEnum, emotionEnum } from '@fituprising/interface/weigh-in-enums'
import { weighInReactShape } from '../../dataModels/types/weighIn/weighInReactShapes'
import {
  getWeighInWeight,
  getWeighInEmotions,
  getWeighInProps
} from '@fituprising/interface/weigh-in-access'
import SelectRadio from '../SelectRadio'
import SelectList from '../SelectList'
import { weighInDeltaInfo } from '../../utils/weightDataUtils'
import InputFloat from '../InputFloat'
import Button from '../../components/Button'

//* ****************************************************************************
// Interface
//* ****************************************************************************

const propTypes = {
  weighIn: PT.shape(weighInReactShape).isRequired, // weighIn to be edited, or undefined if new
  onSave: PT.func, // will be called when save button hit, sig: onSave(updatedWeighInProps |
  className: PT.string // applied to root container
}

const defaultProps = {
  onSave: noop,
  isNew: false,
  className: ''
}

//* ****************************************************************************
// Component
//* ****************************************************************************

const EditWeighIn = props => {
  const { weighIn, onSave, className } = props

  const getValue = prop('value')

  const { unit, reaction, prevWeighIn } = getWeighInProps(
    ['unit', 'reaction', 'prevWeighIn'], weighIn
  )

  const { sinceStr, deltaStr, reactionChoices } = weighInDeltaInfo(weighIn, prevWeighIn)

  const reactionRadioEntries = reactionChoices.map(reaction => ({
    value: reaction,
    text: reactionEnum[reaction]
  }))

  const emotionListEntries = Object.keys(emotionEnum).map(emotion => ({
    value: emotion,
    text: emotionEnum[emotion]
  }))

  const [weight, setWeight] = useState(getWeighInWeight(weighIn))
  const [emotions, setEmotions] = useState(getWeighInEmotions(weighIn))

  const [activeReactionRadio, setActiveReactionRadio] = useState(
    find(propEq('value', reaction), reactionRadioEntries)
  )

  const emotionOnClick = emotion => {
    const emotionValue = getValue(emotion)

    if (emotions.includes(emotionValue)) {
      const newEmotions = [...emotions]
      newEmotions.splice(emotions.indexOf(emotionValue), 1)
      setEmotions(newEmotions)
    } else {
      setEmotions([...emotions, emotionValue])
    }
  }

  const onSaveClick = () => {
    const updatedWeighInProps = {
      weight,
      reaction: activeReactionRadio.value,
      emotions: emotions
    }
    onSave(updatedWeighInProps)
  }

  const st = {
    root: ` ${className}`,
    deltaInfoContainer: 'mt-6 text-base font-semibold flex-row-start',
    weighInLabel: 'text-base text-gray-600',
    weighInInput: 'text-black text-2xl md:text-3xl w-12',
    selectRadio: 'mt-2',
    selectList: 'mt-2'
  }

  return (
    <div className={st.root}>
      <div className={st.weighInLabel}>Weigh In</div>
      <InputFloat
        value={weight}
        onChange={setWeight}
        placeholder='Enter weight'
        trailingText={unit}
        precision={1}
        className={st.weighInInput}
      />
      <div className={st.deltaInfoContainer}>
        <div className='text-primary-muted'>{sinceStr}</div>
        <div className='ml-4 text-gray-700'>{deltaStr}</div>
      </div>
      <SelectRadio
        className={st.selectRadio}
        entries={reactionRadioEntries}
        activeEntry={activeReactionRadio}
        onSelect={setActiveReactionRadio}
      />
      <div className={st.deltaInfoContainer}>
        <div className='text-primary-muted'>I Am Feeling</div>
      </div>
      <SelectList
        className={st.selectList}
        entries={emotionListEntries}
        activeEntries={emotions}
        onSelect={emotionOnClick}
      />
      <Button
        className='pt-4'
        text='Save'
        onClick={onSaveClick}
      />
    </div>
  )
}

EditWeighIn.propTypes = propTypes
EditWeighIn.defaultProps = defaultProps
export default EditWeighIn
