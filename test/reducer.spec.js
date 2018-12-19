import { describe, it } from 'mocha'
import reducer from '../src/reducer'
import * as constants from '../src/constants'

describe('reducer', () => {
  it('should set todoFieldValue for INPUT_CHANGED', () => {
      const state = { todoFieldValue: 'hi' }
      
      const action = { type: constants.INPUT_CHANGED, newValue: 'boo' }
      
      const newState = reducer(state, action)

      newState.todoFieldValue.should.equal(action.newValue)
  })
})
