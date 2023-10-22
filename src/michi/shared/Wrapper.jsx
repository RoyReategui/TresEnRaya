import { Icon } from '../components/Icon'

export const Wrapper = ({ children }) => {
  return (
    <div className='
      shadow-md p-5 rounded-md bg-white w-[600px] mx-auto relative dark:bg-indigo-950'
    >
      <Icon />
      {children}
    </div>
  )
}
