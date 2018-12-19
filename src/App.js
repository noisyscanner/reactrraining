import React from 'react'
import TodoList from './TodoList'
import AddField from './AddField'
import { Provider } from 'react-redux'
import store from './store'
import classes from './App.module.css'

class App extends React.Component {
  render () {
    return <Provider store={store}>
      <div className={classes.todoContainer}>
        <AddField />
        <TodoList />
      </div>
    </Provider>
  }
}

export default App
