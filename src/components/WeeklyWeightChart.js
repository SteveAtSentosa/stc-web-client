import React, { useContext } from 'react'
import PT from 'prop-types'
import moment from 'moment'
import { propOr, min, head, last, max } from 'ramda'
import { floor, ceil, isOdd } from 'ramda-adjunct'
import { ComposedChart, Area, Line, XAxis, YAxis } from 'recharts'
import { ScreenBreakContext } from '../providers/screenBreakProvider'
import { weighInWeightList, weighInTargetList } from '../utils/weightDataUtils'
import {
  weeklyTrackedWeightReactShape
} from '../dataModels/types/weeklyTrackedWeight/weeklyTrackedWeekReactShapes'


//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {
  weeklyTrackedWeight: PT.shape(weeklyTrackedWeightReactShape),
  className: PT.string // applied to root container
}

const defaultProps = {
  className: ''
}

//*****************************************************************************
// WeeklyWeightChart Component
//*****************************************************************************

const WeeklyWeightChart = props => {

  const { weeklyTrackedWeight, className } = props
  const screenBreak = useContext(ScreenBreakContext)
  const data = propOr([], 'weighIns', weeklyTrackedWeight)
  const weights = weighInWeightList(data)
  const targets = weighInTargetList(data)
  const dataMin = floor(min(head(weights), head(targets)))
  let dataMax = ceil(max(last(weights), last(targets)))

  console.log('screenBreak: ', screenBreak)

  // make sure we have an odd number of values
  // works well with axis display
  if (isOdd(dataMax - dataMin)) dataMax++

  const screenWidths = {
    sm: 400,
    md: 400,
    lg: 475,
    xl: 525,
  }

  const aspectRatio = 0.5
  const width = screenWidths[screenBreak]
  const height = width * aspectRatio
  return (
    <div className={className}>
      <ComposedChart {...{ width, height, data }}>
        <XAxis
          dataKey="dateTime"
          // padding={{ left: 0, right: 0 }}
          interval={0}
          tick={XLabel}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="number"
          width={10}
          tick={YLabel}
          axisLine={false}
          tickLine={false}
          tickCount={3}
          padding={{ top: 30, bottom: 30 }}
          domain={[dataMin, dataMax]}
        />
        <Area type='monotone' dataKey='targetWeight' stroke='' fill='#E0E0E0' />
        <Line type='monotone' dataKey='weight' stroke='#5DCEF9' strokeWidth={2} dot={Dot}/>
      </ComposedChart>
    </div>
  )
}

WeeklyWeightChart.propTypes = propTypes
WeeklyWeightChart.defaultProps = defaultProps
export default WeeklyWeightChart

//*****************************************************************************
// XLabel Component
//*****************************************************************************

const XLabel = props => {
  const { x, y, payload } = props
  const dateTime = payload && payload.value
  const month = moment(dateTime).format('MMM')
  const dayName = moment(dateTime).format('ddd')
  const dayNum =  moment(dateTime).format('Do')
  const baseX = x-10
  return (
    <>
      <g transform={`translate(${baseX}, ${y-12}) scale(.6)`}>
        <text x={0} y={0} fill="#666">{dayName}</text>
      </g>
      <g transform={`translate(${baseX-6}, ${y-3}) scale(.5)`}>
        <text x={0} y={0} fill="#AAA">{`${month} ${dayNum}`}</text>
      </g>
    </>
  )
}

//*****************************************************************************
// YLabel Component
//*****************************************************************************

const YLabel = props => {
  const { x, y, payload } = props
  const value = payload && payload.value
  const baseX = x + 10

  return (
    <>
      <g transform={`translate(${baseX},${y}) scale(.7)`}>
        <text x={0} y={0} fill="#666">{value}</text>
      </g>
      <g transform={`translate(${baseX},${y+10}) scale(.5)`}>
        <text x={0} y={0} fill="#AAA">LBS</text>
      </g>
    </>
  )
}

//*****************************************************************************
// Dot Component
//*****************************************************************************

const Dot = props =>  {
  const { cx, cy, payload = {} } = props
  const { weight, dateTime } = payload

  return weight ?
    <svg key={dateTime}>
      <circle cx={cx+2} cy={cy+2} r={4} fill="#BBB" />
      <circle cx={cx} cy={cy} r={4} fill="#FFE57F" />
    </svg> : null
}




