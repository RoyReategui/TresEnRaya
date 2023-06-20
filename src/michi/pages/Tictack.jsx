import { useState } from 'react'
import { Modal } from '../shared/Modal'
import { TURNS } from '../helpers'
import { useTikTack } from '../hooks/useTikTack'
import { Tiltle, Button, Options, Board, Turn } from '../components'

export const Tictack = () => {
  const [vsType, setvsType] = useState('onetoone')
  const { board, updateBoard, currentTurn, isWinneer, isdraw, resetState } = useTikTack({ typeState: vsType })

  const handleCheckChange = (e) => {
    setvsType(e.target.value)
  }

  return (
    <div className='w-full flex flex-col gap-4 items-center bg-indigo-50 min-h-screen '>
      <Tiltle> Tres en Raya / Michi </Tiltle>
      <section>
        <h2 className='text-center text-indigo-600 font-semibold'>Opciones</h2>
        <Options vsType={vsType} handleCheckChange={handleCheckChange} />
      </section>
      <Board board={board} updateBoard={updateBoard} />

      <Button resetState={resetState}> Reiniciar </Button>
      <Turn vsType={vsType} currentTurn={currentTurn} />

      {
        isWinneer &&
          <Modal
            resetState={resetState}
            winner={currentTurn}
            board={board}
            arrWinner={isWinneer}
          />
      }
      {isdraw &&
        <Modal
          resetState={resetState}
          winner={`EMPATE: ${TURNS.O} ${TURNS.X}`}
          board={board}
        />}
    </div>
  )
}
