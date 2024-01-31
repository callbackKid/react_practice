import { useSelector } from 'react-redux'

export const User = ({
  firstName,
  age,
  gender,
  username,
  image,
  handleDeleteUser,
  handleAddUser,
}) => {
  const color = useSelector((state) => state.color.color)
  return (
    <div style={{ background: color }}>
      <h1>{firstName}</h1>
      <h2>{age}</h2>
      <span>{gender} / </span>
      <span>{username}</span>
      <img src={image} alt={username} />
      <button onClick={handleAddUser}>Add to Friends</button>
      <button onClick={handleDeleteUser}>Delete from friends</button>
    </div>
  )
}
