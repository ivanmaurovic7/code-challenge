import { combineReducers } from 'redux'
import loginFormReducer from './loginFormReducer'
import encoderReducer from './encoderReducer'

export default () => combineReducers({
  loginForm: loginFormReducer,
  encoder: encoderReducer,
})
