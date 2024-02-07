import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import PostsPage from './pages/PostsPage'
import SingleUserPage from './pages/SingleUserPage'
import TodosPage from './pages/TodosPage'
import UserPage from './pages/UserPage'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: '/',
      //   element: <MainPage />,
      // },
      {
        path: '/todos',
        element: <TodosPage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
      {
        path: '/users',
        element: <UserPage />,
      },
      {
        path: '/users/:id',
        element: <SingleUserPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
