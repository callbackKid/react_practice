import classes from './post.module.css'

export const Post = ({ title, text, marked, img }) => {
  return (
    <div className={marked ? classes.marked : classes.postContainer}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt="" />
    </div>
  )
}
