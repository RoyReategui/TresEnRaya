import { Box } from './Box'

export const Board = ({ board = [], updateBoard = () => { }, arrWinner = [] }) => {
  return (
    <div className='grid grid-cols-3 mx-auto gap-2 rounded-md shadow-sm shadow-indigo-500 p-3 dark:bg-indigo-950'>
      {
        board.map((_, index) => (
          <Box
            key={index}
            index={index}
            updateBoard={updateBoard}
            element={_}
            shadow={arrWinner.includes(index)}
          />
        ))
      }
    </div>
  )
}
