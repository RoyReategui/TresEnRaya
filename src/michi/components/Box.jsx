import React from 'react'

export const Box = ({ index, element, updateBoard }) => {
  return (
    <div
      className='h-[60px] w-[60px] bg-indigo-500 rounded flex justify-center items-center text-xl hover:cursor-pointer'
      onClick={() => updateBoard(index)}
    >
      {element}
    </div>
  )
}
