import { path } from 'ramda'

export const getWeighInFromQuery = data => path(['weighInForDate'], data)

