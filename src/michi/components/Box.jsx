import React from 'react'

export const Box = ({ index, element, updateBoard, shadow }) => {
  return (
    <div
      className={`shadow-sm shadow-blue-400 h-[60px] w-[60px] bg-indigo-200 rounded flex justify-center items-center text-xl hover:cursor-pointer dark:bg-indigo-900 ${shadow && 'animate-bounce shadow-md shadow-indigo-500 border-2 border-indigo-500'}`}
      onClick={() => updateBoard(index)}
    >
      {element}
    </div>
  )
}
