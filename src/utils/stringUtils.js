import { isNotNaN } from 'ramda-adjunct'


export const stringCharCount = (char, str) => str.split(char).length - 1
export const numDots = str => stringCharCount('.', str)

// export const numCharsFollowing = (char, str) =>
//   null

// export const strRepresentsFloat = str =>
//   (/^-?[\d]*(\.[\d]+)?$/g).test(str)


// return NaN if string does not represent valid float
// export strToFloat = str => {

// }


export const strRepresentsFloat = str =>
  isNotNaN(Number.parseFloat(str))


export const strToFloat = str => {



}
