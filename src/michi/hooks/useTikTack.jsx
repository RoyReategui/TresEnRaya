import { useState } from 'react'
import { TURNS, checkDraw, checkWinner } from '../helpers'

export const useTikTack = () => {
  const [board, setBoard] = useState(() => {
    return JSON.parse(window.localStorage.getItem('tictac')) || Array(9).fill(null)
  })
  const [currentTurn, setcurrentTurn] = useState(() => {
    return JSON.parse(window.localStorage.getItem('turn')) || TURNS.O
  })
  const [isWinneer, setIsWinner] = useState(false)
  const [isdraw, setdraw] = useState(false)

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
