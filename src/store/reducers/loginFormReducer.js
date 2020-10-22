  import {
    LOGIN_SUCCESS,
    LOADING,
    NOT_LOADING,
    CLEAR_ERROR,
    SET_ERROR,
    SET_EMAIL,
    SET_PASSWORD,
    SET_TOKEN,
  } from '../actions/types'
  
  const initialState = {
    error: null,
    loading: false,
    email: '',
    password: '',
    token: null,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload,
          loading: false,
        }
      case LOADING:
        return {
          ...state,
          loading: true,
        }
      case NOT_LOADING:
        return {
          ...state,
          loading: false,
        }
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        }
      case SET_EMAIL:
        return {
          ...state,
          email: action.payload,
        }
      case SET_PASSWORD:
        return {
          ...state,
          password: action.payload,
        }
      case SET_TOKEN:
        return {
          ...state,
          token: action.payload,
        }
      default:
        return state
    }
  }
  