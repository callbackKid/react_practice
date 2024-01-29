import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTodo, deleteTodo } from '../../store/todoSlice'

export const Todo = ({ id, taskTitle, taskDescription, doneFlag }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ textDecoration: doneFlag ? 'line-through' : 'none' }}>
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <button onClick={() => dispatch(changeTodo(id))}>toggle</button>
      <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
    </div>
  )
}
