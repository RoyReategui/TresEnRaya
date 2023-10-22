import { Modal } from '../shared/Modal'
import { TURNS } from '../helpers'
import { Tiltle, Button, Options, Board, Turn } from '../components'
import { useVsType, useTikTack } from '../hooks'

export const Tictack = () => {
  const { vsType, handleCheckChange } = useVsType()
  const { board, updateBoard, currentTurn, isWinneer, isdraw, resetState } = useTikTack({ typeState: vsType })

  return (
    <div className='w-full flex flex-col gap-4 items-center '>
      <Tiltle> Tres en Raya / Michi </Tiltle>
      <section>
        {/* <h2 className='text-center text-indigo-600 font-semibold dark:text-indigo-100'>Opciones</h2> */}
        <Options vsType={vsType} handleCheckChange={handleCheckChange} />
      </section>
      <Board board={board} updateBoard={updateBoard} />

      <Button resetState={resetState}> Reiniciar </Button>
      <Turn vsType={vsType} currentTurn={currentTurn} />

      {
        (isWinneer || isdraw) &&
        (
          <Modal
            resetState={resetState}
            winner={isWinneer ? currentTurn : `EMPATE: ${TURNS.O} ${TURNS.X}`}
            board={board}
            arrWinner={isWinneer || []}
          />
        )
      }
    </div>
  )
}
