import { TURNS } from '../helpers'

export const Turn = ({ vsType, currentTurn }) => {
  const players = vsType === 'onetoone' ? ['Player 1', 'Player 2'] : ['Player', 'PC']
  return (
    <div className='space-y-3'>
      <h2 className='text-white uppercase text-xs font-semibold'>Turno Actual</h2>
      <div className='flex gap-5'>
        {
          Object.values(TURNS).map((ele, index) =>
            <div
              key={ele}
              className={`${ele === currentTurn ? 'bg-indigo-300 shadow-md shadow-red-200' : ''} w-[80px] h-[80px] rounded`}
            >
              <div className='flex flex-col justify-center items-center h-full gap-2 '>
                <span className='font-semibold text-indigo-800'> {players[index]} </span>
                {ele}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
