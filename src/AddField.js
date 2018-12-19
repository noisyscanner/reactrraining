import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, handleInputChanged } from './actions'
import classes from './App.module.css'

const AddField = ({ todoFieldValue, handleInputChange, handleAdd, handleKeyUp }) =>
  <div className={classes.addTodoContainer}>
    <input type='text' value={todoFieldValue} onChange={handleInputChange} onKeyUp={handleKeyUp} data-test-id='todoInput' />
    <button onClick={handleAdd} data-test-id='addTodoButton'>Add</button>
  </div>

AddField.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  todoFieldValue: state.todoFieldValue
})

const mapDispatchToProps = dispatch => ({
  handleAdd: () => dispatch(addTodo()),
  handleInputChange: (e) => dispatch(handleInputChanged(e.target.value)),
  handleKeyUp: (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddField)
