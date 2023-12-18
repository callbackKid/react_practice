import classes from './post.module.css'
import { changeColor } from '../../utils/changeColor'
import { useState } from 'react'

export const Post = ({ title, text, marked, img }) => {
  const [color, setColor] = useState(changeColor) // создали состояние

  const colorChangeHandler = () => {
    const newColor = changeColor()
    setColor(newColor)
  }

  return (
    // добавили инлайн стиль
    <div style={{ background: color }} className={marked ? classes.marked : classes.postContainer}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt="" />
      {/* добавиили событие которое изменяет цвет через setColor */}
      <button onClick={() => setColor(changeColor)}>Change Color</button>
    </div>
  )
}
