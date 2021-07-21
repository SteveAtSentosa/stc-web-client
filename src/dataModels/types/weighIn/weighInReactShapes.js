import PT from 'prop-types'
import { keys } from 'ramda'
import { emotionEnum, reactionEnum } from '@fituprising/interface/weigh-in-enums'

export const weighInReactShape = {
  dateTime: PT.string,
  unit: PT.string,
  weight: PT.number,
  interpolated: PT.bool,
  targetWeight: PT.number,
  emotions: PT.arrayOf(PT.oneOf(keys(emotionEnum))),
  reaction: PT.oneOf(keys(reactionEnum)),
}
