export const Options = ({ vsType, handleCheckChange }) => {
  return (
    <div className='flex gap-10'>
      <label>
        <input
          type='checkbox'
          value='onetoone'
          checked={vsType === 'onetoone'}
          onChange={handleCheckChange}
        /> &nbsp;
        1 vs 1
      </label>
      <label>
        <input
          type='checkbox'
          value='onetopc'
          checked={vsType === 'onetopc'}
          onChange={handleCheckChange}
        /> &nbsp;
        vs PC
      </label>
    </div>
  )
}
