import React from 'react'
import { connect } from 'react-redux'
import { checkTodo } from './actions'

const TodoItem = ({ todo, handleCheck }) =>
  <li>
    <input type='checkbox' id={`todo-${todo.id}`} checked={todo.checked} onChange={() => handleCheck(todo)} />
    <label htmlFor={`todo-${todo.id}`}>{ todo.label }</label>
  </li>

const TodoList = ({ todos, handleCheck }) => todos.length > 0 &&
  <ul>
    {
      todos.map(todo => <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck} />)
    }
  </ul>

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleCheck: todo => dispatch(checkTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
