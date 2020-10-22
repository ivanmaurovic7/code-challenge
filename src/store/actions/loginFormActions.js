import axios from 'axios'
import {
    SET_ERROR,
    CLEAR_ERROR,
    LOADING,
    SET_EMAIL,
    SET_PASSWORD,
    LOGIN_SUCCESS,
    SET_TOKEN,
} from './types'

export const login = ({email, password}) => async dispatch => {
  dispatch({
    type: LOADING
  })

  try {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) {
      dispatch({
        type: SET_ERROR,
        payload: "Invalid email"
      })

      return
    }

    if(password.length < 6) {
      dispatch({
        type: SET_ERROR,
        payload: "Password must be atleast 6 characters long"
      })

      return
    }

    if(!/\d/.test(password)) {
      dispatch({
        type: SET_ERROR,
        payload: "Password must contain atleast one number"
      })

      return
    }

    const login = await axios.post(`http://localhost:5000/login`, {email, password})

    dispatch({
        type: LOGIN_SUCCESS,
        payload: login.data.token
    })

  } catch (e) {
      dispatch({
        type: SET_ERROR,
        payload: e.message.includes(401) ? "Invalid credentials" : e.message
      })
  }
}

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  }
}

export const setPassword = passwprd => {
  return {
    type: SET_PASSWORD,
    payload: passwprd
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

export const setToken = t => {
  return {
    type: SET_TOKEN,
    payload: t
  }
}