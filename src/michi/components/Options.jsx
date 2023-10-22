export const Options = ({ vsType, handleCheckChange }) => {
  return (
    <div className='flex gap-10 shadow-sm shadow-indigo-500 p-3 dark:bg-indigo-900'>
      <label>
        <input
          type='checkbox'
          value='onetoone'
          checked={vsType === 'onetoone'}
          className='accent-indigo-500 dark:accent-indigo-200'
          onChange={handleCheckChange}
        /> &nbsp;
        <span className='dark:text-indigo-50'>1 vs 1</span>
      </label>
      <label>
        <input
          type='checkbox'
          value='onetopc'
          checked={vsType === 'onetopc'}
          className='accent-indigo-500 dark:accent-indigo-200'
          onChange={handleCheckChange}
        /> &nbsp;
        <span className='dark:text-indigo-50'> vs PC </span>
      </label>
    </div>
  )
}
