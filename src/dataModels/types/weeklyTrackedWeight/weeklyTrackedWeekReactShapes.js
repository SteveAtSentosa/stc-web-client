import PT from 'prop-types'
import { weighInReactShape } from '../weighIn/weighInReactShapes'

export const weeklyTrackedWeightReactShape = {
  trackedWeekId: PT.string,
  userId: PT.string,
  startDate: PT.string,
  weighIns: PT.arrayOf(PT.shape(weighInReactShape))
}
