import { useState } from 'react'
import { Box, Turn } from '../components'
import { Modal } from '../shared/Modal'
import { TURNS } from '../helpers'
import { useTikTack } from '../hooks/useTikTack'
import { Tiltle } from '../components/Tiltle'
import { Button } from '../components/Button'

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
        <h2 className='text-center'>Opciones</h2>
        <div className='flex gap-10'>
          <label>
            <input
              type='checkbox'
              value='onetoone'
              checked={vsType === 'onetoone'}
              onChange={handleCheckChange}
            /> &nbsp;
            1 vs 1
          </label>
          <label>
            <input
              type='checkbox'
              value='onetopc'
              checked={vsType === 'onetopc'}
              onChange={handleCheckChange}
            /> &nbsp;
            vs PC
          </label>
        </div>
      </section>

      <div className='grid grid-cols-3 mx-auto gap-2'>
        {
        board.map((_, index) => (
          <Box
            key={index}
            index={index}
            updateBoard={updateBoard}
            element={_}
          />
        ))
      }
      </div>

      <Button resetState={resetState}> Reiniciar </Button>
      <Turn titlle='Turno Actual' currentTurn={currentTurn} />

      {isWinneer && <Modal resetState={resetState} winner={currentTurn} />}
      {isdraw && <Modal resetState={resetState} winner={`EMPATE: ${TURNS.O} ${TURNS.X}`} />}
    </div>
  )
}
