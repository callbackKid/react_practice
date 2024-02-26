import { useRef } from 'react'
import Input from '../Input /Input'

const ComponentWithRef = () => {
  const ref = useRef(null)
  console.log(ref)
  return (
    <div>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>focus</button>
    </div>
  )
}

export default ComponentWithRef
