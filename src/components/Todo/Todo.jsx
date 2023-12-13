import React, { useState } from 'react'

export const Todo = ({ taskTitle, taskDescription }) => {
  // значение состояние может быть любым типом данных
  // строка число бул объект массив
  // в initState можем передать функцию
  // null
  const [value, setValue] = useState(0)
  const [doneFlag, setDoneFlag] = useState(false)
  // создать кноаку которая будет менять состояние флага на противоположное
  // toggle
  // !
  // если true
  // если !true
  // значение приводится к лог типу
  return (
    <div style={{ textDecoration: doneFlag ? 'line-through' : 'none' }}>
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(0)}>reset</button>
      <button onClick={() => setDoneFlag(!doneFlag)}>toggle</button>
    </div>
  )
}
