import { OPTION_WINNER } from './models'

export const checkWinner = (newBoard = [], currentTurn) => {
  const arrIndex = []
  newBoard.forEach((ele, index) => {
    if (ele === currentTurn) { arrIndex.push(index) }
  })
  if (arrIndex.length < 3) return false

  return OPTION_WINNER.find(arr => {
    return arr.every(pos => arrIndex.includes(pos))
  })

  // return OPTION_WINNER.some(arr => {
  //   return arr.every(pos => arrIndex.includes(pos))
  // })
}

export const checkDraw = (newBoard = []) => {
  return newBoard.every(ele => ele !== null)
}

export const randomInterval = (min, max) => {
  min = Math.max(min)
  max = Math.floor(max)

  return Math.floor((Math.random() * (max - min + 1)) + min)
}

export const subLista = (board, itemSelectList) => {
  return board.map((_, index) => ({ value: _, index }))
    .filter((ele) => ele.value === itemSelectList).map(ele => ele.index)
}
