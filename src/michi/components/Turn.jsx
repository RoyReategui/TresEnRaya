import { TURNS } from '../helpers'

export const Turn = ({ vsType, currentTurn }) => {
  const players = vsType === 'onetoone' ? ['Player 1', 'Player 2'] : ['Player', 'PC']
  return (
    <div className='space-y-3 shadow-sm shadow-indigo-200 p-3 dark:shadow-indigo-900'>
      <h2 className='uppercase text-center text-xs font-semibold text-indigo-900 dark:text-indigo-50'>Turno Actual</h2>
      <div className='flex gap-5'>
        {
          Object.values(TURNS).map((turn, index) =>
            <div
              key={turn}
              className={`${turn === currentTurn ? 'bg-indigo-200 shadow-sm shadow-red-200 dark:bg-indigo-900 dark:shadow-indigo-800' : ''} w-[80px] h-[80px] rounded`}
            >
              <div className='flex flex-col justify-center items-center h-full gap-2 '>
                <span className='font-semibold text-indigo-900 dark:text-indigo-50 '> {players[index]} </span>
                {turn}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
