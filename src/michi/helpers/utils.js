import { OPTION_WINNER } from './models'

export const checkWinner = (newBoard = [], currentTurn) => {
  const arrIndex = []
  newBoard.forEach((ele, index) => {
    if (ele === currentTurn) { arrIndex.push(index) }
  })

  if (arrIndex.length < 3) return false
  return OPTION_WINNER.some(arr => {
    return arr.every(pos => arrIndex.includes(pos))
  })
}

export const checkDraw = (newBoard = []) => {
  return newBoard.every(ele => ele !== null)
}
