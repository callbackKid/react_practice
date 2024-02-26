import { useRef, useState } from 'react'
import cat from '../../images/cat.jpeg'

const AugmentedImage = () => {
  const [x, setX] = useState()
  const [y, setY] = useState()

  const ref = useRef(null)

  const mouseEnterHandler = () => {
    ref.current.style.display = 'block'
  }
  const mouseLeaveHandler = () => (ref.current.style.display = 'none')

  const mouseMoveHandler = (event) => {
    setX(event.clientX)
    setY(event.clientY)
  }

  return (
    <div>
      <img
        src={cat}
        alt="cat"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
      />
      <div
        ref={ref}
        style={{
          width: '543px',
          height: '360px',
          backgroundSize: '1086px 720px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `-${x}px -${y}px`,
          backgroundImage: `url(${cat})`,
        }}
      ></div>
    </div>
  )
}

export default AugmentedImage
