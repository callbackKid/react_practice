export const getPosts = async (setPosts) => {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    if (!response.ok) throw new Error('Посты не найдены')
    const postData = await response.json()
    setPosts(postData.posts)
  } catch (error) {
    console.log('ОШИБКА: ', error)
  }
}

export const addPost = async (post) => {
  try {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    if (!response.ok) throw new Error('Не удалось добавить пост')
    const postData = await response.json()
    console.log(postData)
    return postData
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Не удалось удалить пост')
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

// USERS
// доработать функцию, таким образом чтобы она работа в UserPages
export const fetchUsers = async (callback) => {
  try {
    const response = await fetch('https://dummyjson.com/users')
    if (!response.ok) throw new Error('не удалось получить список юзеров')
    const data = await response.json()
    callback(data.users.slice(0, 5)) // заносим данные с state
  } catch (error) {
    console.log(error)
  }
}

// Написать запрос, кот фетчит данные одного пользователя по id
// id в параметры передается и динамически добавляется в url
// асинхронная функция async await
export const getSingleUser = async (id, callback) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    if (!res.ok) throw new Error('не удалось получить юзера')
    const data = await res.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}
