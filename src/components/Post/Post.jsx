import classes from './post.module.css'
console.log(classes) // объект

export const Post = ({ title, description, marked }) => {
  return (
    <div className={marked ? classes.marked : classes.postContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export const Post1 = (props) => {
  const { title, description } = props
  return (
    <div style={{ width: '400px', backgroundColor: 'green' }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const Post2 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
// default может быть только один в файле
// могу переименовать при импорте
