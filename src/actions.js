import { ADD_TODO, CHECK_TODO, INPUT_CHANGED } from './constants'

export const addTodo = () => ({
  type: ADD_TODO
})

export const checkTodo = todo => ({
  type: CHECK_TODO,
  todo
})

export const handleInputChanged = newValue => ({
  type: INPUT_CHANGED,
  newValue
})
