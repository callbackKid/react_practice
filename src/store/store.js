import { createStore } from 'redux'
import { counterReducer } from './counterReducer'
// наше состояние хранится в сторе
// каждый раз когда мы используем dispatch вызывается функция reducer
// reducer  возвр новое состояние(измененное)
// createStore(counterReducer) - благодаря этой строчке обновляется store
// в провайдере тоже обновляется значение
// компоненты перерисовываются
export const store = createStore(counterReducer)
