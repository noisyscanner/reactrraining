import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkTodo } from './actions'

const TodoItem = ({ todo, handleCheck }) =>
  <li>
    <input type='checkbox' id={`todo-${todo.id}`} checked={todo.checked} onChange={() => handleCheck(todo)} />
    <label htmlFor={`todo-${todo.id}`}>{ todo.label }</label>
  </li>

const TodoList = ({ todos, handleCheck }) => todos.length > 0 &&
  <ul data-test-id='todoList'>
    {
      todos.map(todo => <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck} />)
    }
  </ul>

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleCheck: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleCheck: todo => dispatch(checkTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
