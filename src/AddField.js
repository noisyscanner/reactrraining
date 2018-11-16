import React from 'react'
import { connect } from 'react-redux'
import { addTodo, handleInputChanged } from './actions'

const AddField = ({ todoFieldValue, handleInputChange, handleAdd, handleKeyUp }) =>
  <div className='addTodoContainer'>
    <input type='text' value={todoFieldValue} onChange={handleInputChange} onKeyUp={handleKeyUp} />
    <button onClick={handleAdd}>Add</button>
  </div>

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
