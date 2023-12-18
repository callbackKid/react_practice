import classes from './post.module.css'
import { changeColor } from '../../utils/changeColor'
import { useState } from 'react'

export const Post = ({ title, text, marked, img, changeMarkedHandler }) => {
  return (
    <div className={marked ? classes.marked : classes.postContainer}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt="" />
      <button onClick={changeMarkedHandler}>Marked</button>
    </div>
  )
}
