import React from 'react'
import { TURNS } from '../helpers'

export const Turn = ({ titlle, currentTurn }) => {
  return (
    <div className='space-y-3'>
      <h2 className='text-white uppercase text-xs font-semibold'>Turno Actual</h2>
      <div className='flex justify-between'>
        {
          Object.values(TURNS).map(ele =>
            <div
              key={ele}
              className={`${ele === currentTurn ? 'bg-indigo-400' : ''} w-[50px] h-[50px] flex justify-center items-center rounded`}
            >
              {ele}
            </div>
          )
        }
      </div>
    </div>
  )
}
