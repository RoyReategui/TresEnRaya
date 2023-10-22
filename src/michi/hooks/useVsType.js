import { useState } from 'react'

export const useVsType = () => {
  const [vsType, setvsType] = useState('onetoone')
  const handleCheckChange = (e) => {
    setvsType(e.target.value)
  }

  return { vsType, handleCheckChange }
}
