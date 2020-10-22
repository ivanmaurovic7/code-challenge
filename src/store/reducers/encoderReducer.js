import {
  SET_ENCODER_INPUT,
  SET_ENCODER_OUTPUT,
  CLEAR_ERROR,
  SET_ERROR,
  } from '../actions/types'
  
  const initialState = {
    input: '',
    output: '',
    loading: false,
    error: null,
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ENCODER_INPUT:
        return {
          ...state,
          input: action.payload,
        }
      case SET_ENCODER_OUTPUT:
        return {
          ...state,
          output: action.payload,
        }
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        }
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
        }
      default:
        return state
    }
  }
  