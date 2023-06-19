import { useEffect, useState } from 'react'
import { TURNS, checkDraw, checkWinner, randomInterval, subLista } from '../helpers'
import { IndexWinnerPlayer, anticiplePay } from '../helpers/logicMichi'

export const useTikTack = ({ typeState }) => {
  const [board, setBoard] = useState(() => {
    return JSON.parse(window.localStorage.getItem('tictac')) || Array(9).fill(null)
  })
  const [currentTurn, setcurrentTurn] = useState(() => {
    return JSON.parse(window.localStorage.getItem('turn')) || TURNS.X
  })
  const [isWinneer, setIsWinner] = useState(false)
  const [isdraw, setdraw] = useState(false)

  useEffect(() => {
    if (typeState === 'onetoone' || currentTurn === TURNS.X) return undefined

    const listIndexEmpty = subLista(board, null)
    const listPc = subLista(board, TURNS.O)
    const listPlayer = subLista(board, TURNS.X)

    const indexWinnerPC = IndexWinnerPlayer(listIndexEmpty, listPc)
    const indexWinnerPlayer = IndexWinnerPlayer(listIndexEmpty, listPlayer)

    if (indexWinnerPC >= 0) {
      updateBoard(indexWinnerPC)
    } else if (indexWinnerPlayer >= 0) {
      updateBoard(indexWinnerPlayer)
    } else if (listPlayer.length === 1) {
      if (!board[4]) {
        updateBoard(4)
        return
      }
      const indexCorners = [0, 2, 6, 8]
      const indexEmpty = indexCorners.findIndex(ele => !board[ele])
      updateBoard(indexCorners[indexEmpty])
    } else if (listPc.length === 1 && anticiplePay(listPc, listPlayer) !== -1) {
      updateBoard(anticiplePay(listPc, listPlayer))
    } else if (listIndexEmpty.length >= 0) {
      updateBoard(listIndexEmpty[randomInterval(0, listIndexEmpty.length - 1)])
    }
  }, [currentTurn])

  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = currentTurn

    setBoard(newBoard)
    window.localStorage.setItem('tictac', JSON.stringify(newBoard))

    if (checkWinner(newBoard, currentTurn)) {
      setIsWinner(true)
      return
    } else if (checkDraw(newBoard)) {
      setdraw(true)
      return
    }
    const newTurns = currentTurn === TURNS.X ? TURNS.O : TURNS.X
    window.localStorage.setItem('turn', JSON.stringify(newTurns))
    setcurrentTurn(newTurns)
  }

  const resetState = () => {
    window.localStorage.removeItem('tictac')
    window.localStorage.removeItem('turn')
    setBoard(Array(9).fill(null))
    setcurrentTurn('😍')
    setIsWinner(false)
    setdraw(false)
  }

  return { board, updateBoard, currentTurn, isWinneer, isdraw, resetState }
}
