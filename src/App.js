import { Post, Post1 } from './components/Post/Post'
import { Todo } from './components/Todo/Todo'
// экспорт дефолтный - без фигурных скобок
// экспорт обычный - с фигурными скобками

// могу прописать логику
// return всегда возвращает один тег
// один родительский элемент обарчивает все остальные
// JSX - смесь html + js - функция которая возвращает html

function App() {
  const postData = {
    title: 'Post number 1',
    description: 'Hello World',
    marked: true,
  }

  const postData1 = {
    title: 'Post number 2',
    description: 'Ину Ину',
    marked: true,
  }

  return (
    <div className="App">
      <Post title={postData.title} description={postData.description} marked={postData.marked} />
      <Post {...postData1} />
      <Post1 title="Inline" />
      <Post title="Post number 3" description="Oups" />
      <Todo title="DO something" description="NOW" />
    </div>
  )
}

export default App
