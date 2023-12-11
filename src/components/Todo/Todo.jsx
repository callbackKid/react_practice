import React from 'react'
// переписать ипользуя пропсы
// taskTitle, taskDescripttion
// импортируем в app
// сощздать два компонента с разными значениями/аргументами
export const Todo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

// создаем файл со стилям
// создаем класс - background, color
// импорутируем в наш файл с комонентом
// приминяем класс

// <></> Фрагмент используется для того что обернуть в родителя
// когда не нужен html тег
