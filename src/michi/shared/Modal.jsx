import React from 'react'

export const Modal = ({ winner, resetState }) => {
  return (
    <div className='fixed bg-black opacity-90 top-0 left-0 w-full h-full flex items-center justify-center'>

      <div className='flex flex-col gap-3 items-center justify-center w-5/12 h-[250px] bg-slate-50 rounded-xl relative'>

        <svg
          xmlns='http://www.w3.org/2000/svg' className='text-black absolute right-2 top-2 stroke-slate-800 stroke-2 hover:cursor-pointer' width={24} height={24} viewBox='0 0 24 24' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'
          onClick={resetState}
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M18 6l-12 12' />
          <path d='M6 6l12 12' />
        </svg>
        <h2 className='text-blue-950 font-semibold'> GANADOR </h2>
        <span className='text-2xl'> {winner} </span>
      </div>
    </div>
  )
}
