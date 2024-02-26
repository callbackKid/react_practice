import { forwardRef } from 'react'

const Input = forwardRef(({ value, onChange }, ref) => {
  return <input type="text" value={value} onChange={onChange} ref={ref} />
})

export default Input
