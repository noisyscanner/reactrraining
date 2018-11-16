import { ADD_TODO, CHECK_TODO, INPUT_CHANGED } from './constants'

const initialState = {
  todos: [],
  todoFieldValue: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGED:
      return { ...state,
        todoFieldValue: action.newValue
      }
    case ADD_TODO:
      const todoId = state.todos.length
      const newTodo = { label: state.todoFieldValue, checked: false, id: todoId }
      return {
        todos: [ ...state.todos, newTodo ],
        todoFieldValue: ''
      }
    case CHECK_TODO:
      const { todo } = action
      const cloneTodos = [ ...state.todos ]
      cloneTodos.find(t => t.id === todo.id).checked = !todo.checked

      return { ...state,
        todos: cloneTodos
      }
    default: return state
  }
}
