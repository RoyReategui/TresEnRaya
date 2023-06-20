import { OPTION_WINNER } from './models'

// Extraemos los pares
function extractPairs (gameIndexPlayer) {
  if (gameIndexPlayer.length < 2) return []
  const pares = []
  const size = gameIndexPlayer.length
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      pares.push([gameIndexPlayer[i], gameIndexPlayer[j]])
    }
  }
  return pares
}

// Comparar un array sin importar el orden de sus elementos
const isEqualArray = (a, b) => {
  a = a.sort((x, y) => x - y)
  b = b.sort((x, y) => x - y)
  return a.length === b.length && a.every((ele, index) => ele === b[index])
}

function SearchIndexWinnerPlayer (boardEmpty, paresPlayer) {
  let indexForWinner = -1
  for (let i = 0; i < boardEmpty.length; i++) {
    const threeArr = paresPlayer.map(ele => [...ele, boardEmpty[i]])
    const flag = threeArr.some(eleThree => {
      return OPTION_WINNER.some(ele => isEqualArray(eleThree, ele))
    })

    if (flag) {
      indexForWinner = boardEmpty[i]
      break
    }
  }
  return indexForWinner
}

export function IndexWinnerPlayer (boardEmpty, gameIndexPlayer) {
  const paresPlayer = extractPairs(gameIndexPlayer)
  return SearchIndexWinnerPlayer(boardEmpty, paresPlayer)
}

export function anticiplePay (gameIndexPC, gameIndexPlayer) {
  let indexPreviu = -1
  const unionIndexPlay = gameIndexPC.concat(gameIndexPlayer).join('')
  const patrones = {
    '048': 6,
    405: 8,
    407: 5,
    408: 3,
    413: 6,
    415: 0,
    416: 0,
    418: 3,
    423: 7,
    426: 1,
    427: 3,
    431: 2,
    432: 7,
    437: 0,
    438: 6,
    450: 2,
    451: 8,
    456: 1,
    457: 6

  }
  indexPreviu = patrones[unionIndexPlay] ?? -1
  return indexPreviu
}
