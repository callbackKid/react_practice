import { useState } from 'react'

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState)

  const handleChange = (event) => setValue(event.target.value)

  const reset = () => setValue('')

  return {
    value,
    onChange: handleChange,
    reset,
  }
}
