import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import PostPage from './pages/PostPage'
import TodosPage from './pages/TodosPage'
import UserPage from './pages/UserPage'

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
        element: <PostPage />,
      },
      {
        path: '/users',
        element: <UserPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
