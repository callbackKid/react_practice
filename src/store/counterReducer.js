const initialState = { counter: 0 }

// функция reducer она изменяет наше состояние и возвращает его
// ВСЕГДА ВОЗВРАЩАЕТ СОСТОЯНИЕ
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'RESET': {
      return {
        ...state,
        counter: action.payload,
      }
    }
    case 'INCREASE_BY_VALUE':
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    default:
      return state
  }
}

// action - type название ВЫЧТИ ПРИБАВЬ УМНОЖЬ ОБНУЛИ
// action - payload(нагрузка) - доп параметр, который добавляем в функцию
