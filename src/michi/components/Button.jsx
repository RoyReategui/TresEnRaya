export const Button = ({ resetState, children }) => {
  return (
    <button
      className='border-2 border-indigo-500 p-2 rounded-md text-indigo-500 hover:cursor-pointer font-semibold transition-all duration-150 hover:bg-indigo-500 hover:text-indigo-50 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-200 dark:hover:text-indigo-900'
      onClick={resetState}
    > {children}
    </button>
  )
}
