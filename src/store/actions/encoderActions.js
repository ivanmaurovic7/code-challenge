import axios from 'axios'
import {
    SET_ERROR,
    CLEAR_ERROR,
    LOADING,
    SET_ENCODER_INPUT,
    SET_ENCODER_OUTPUT,
} from './types'

export const encode = (inputString, authorization) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {
    if(inputString == "" || typeof inputString !== 'string' || /\d/.test(inputString))  {
        dispatch({
        type: SET_ERROR,
        payload: "Invalid input"
        })
        return
    }

    const encoder = await axios.post(`http://localhost:5000/encode`, {inputString}, {headers: {authorization}})
    console.log(encoder)
    dispatch({
        type: SET_ENCODER_OUTPUT,
        payload: encoder.data.outputString
    })

  } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message.includes(401) ? "Invalid credentials" : e.message
      })
  }
}

export const setEncoderInput = i => {
  return {
    type: SET_ENCODER_INPUT,
    payload: i
  }
}

export const setError = err => {
  return {
    type: SET_ERROR,
    payload: err
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}