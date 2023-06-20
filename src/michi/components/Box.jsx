import React from 'react'

export const Box = ({ index, element, updateBoard, shadow }) => {
  return (
    <div
      className={`shadow-md shadow-blue-400 h-[60px] w-[60px] bg-indigo-500 rounded flex justify-center items-center text-xl hover:cursor-pointer ${shadow && 'shadow-md shadow-red-600 border-2 border-red-600'}`}
      onClick={() => updateBoard(index)}
    >
      {element}
    </div>
  )
}
