// default может быть только один в файле
// могу переименовать при импорте

// экспорт дефолтный - без фигурных скобок
// экспорт обычный - с фигурными скобками

// могу прописать логику
// return всегда возвращает один тег
// один родительский элемент обарчивает все остальные
// JSX - смесь html + js - функция которая возвращает html

// hook специальный API который работает только с ФУНКЦИОНАЛЬНЫМИ компонентами
// use - начинаются с этого слова
// вызываются на верхнем уровне компонента
// не можем писать хуки вусловиях или циклах

//значение фунцкция кот меняет значение //первоначнальное значение
// состояние - динамическая часть(изщменяемая часть компонента)
// МЫ НЕ МОЖЕМ МЕНЯТЬ СОСТОЯНИЕ НАПРЯМУЮ
// изменяем состояние через функцию set
// React отслеживает изменение переменной и перерендр компонент

// значение состояние может быть любым типом данных
// строка число бул объект массив
// в initState можем передать функцию
// null

// все вычисления до return
// return возвращает всегда один элемент HTML
// не просто id а ключ элемента в списке
sf 4

// LS - хранилище данных в БРАУЗЕРЕ
// ключ - значение (строка)
// хранятся пока не удалим сами
// до 10 мб

// Todos Page
// выносим логику в компонент заносим todos в useState()
// передаем в TodoList пропс
// создаем отдельный компонент AddNewTodo в котором реализовываем логику добавления
// как сделали с user
