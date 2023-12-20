// создать карточку юзера
// чтобы отображала - firstName, age, gender, username, image
// передать User  в UserList и отобразить данные
export const User = ({ firstName, age, gender, username, image }) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h2>{age}</h2>
      <span>{gender} / </span>
      <span>{username}</span>
      <img src={image} alt={username} />
    </div>
  )
}
