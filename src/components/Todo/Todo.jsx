import React, { useState } from 'react'

export const Todo = ({ taskTitle, taskDescription, doneFlag, changeDoneFlagHandler }) => {
  // переписать таким образом копмоненты Todo, TodoList
  // чтобы состояние у Todo менялось внутри TodoList
  // по принципу с Post
  // передать функцию в качестве пропса
  // реалитзовать функционал внутри TodoList
  //  в браузере
  return (
    <div style={{ textDecoration: doneFlag ? 'line-through' : 'none' }}>
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <button onClick={changeDoneFlagHandler}>toggle</button>
    </div>
  )
}
