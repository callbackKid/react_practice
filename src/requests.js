// Создать функции
// экспортировать ее
// написать используя async await
// добавить обработку ошибок

export const getPosts = async (setPosts) => {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    if (!response.ok) throw new Error('Посты не найдены')
    const postData = await response.json()
    setPosts(postData)
  } catch (error) {
    console.log('ОШИБКА: ', error)
  }
}
