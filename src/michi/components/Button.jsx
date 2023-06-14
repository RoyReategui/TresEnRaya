export const Button = ({ resetState, children }) => {
  return (
    <button
      className='border-2 border-indigo-400 p-2 rounded-md text-indigo-500 hover:cursor-pointer font-semibold transition-all duration-150 hover:bg-indigo-400 hover:text-indigo-50 '
      onClick={resetState}
    > {children}
    </button>
  )
}
