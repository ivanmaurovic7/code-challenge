import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setEmail, setPassword, clearError, login } from '../store/actions/loginFormActions'
import { TextField, Button } from '@material-ui/core'

const Login = ({
  loading,
  error,
  email,
  password,
  login,
  setEmail,
  setPassword,
  clearError,
}) => {
  useEffect(() => {
    clearError()
  }, [email, password])

  const hasError = error => error ? true : false

  return (
    <div className="loginForm">
        <TextField className="input" error={hasError(error)} value={email} onChange={e => setEmail(e.target.value)} label="Email" />
        <br></br>
        <TextField className="input" type="password" error={hasError(error)} value={password} onChange={e => setPassword(e.target.value)} label="Password" />
        <br></br>
        <span className="error">{error}</span>
        <Button 
          className="button login-button"
          variant="contained" color="primary"
          style={{backgroundColor: loading ? 'rgba(0, 0, 0, 0.12)' : '', color: loading ? '#333' : ''}} 
          disabled={loading} 
          onClick={() => login({email, password})}
        >Login</Button>
    </div>
  )
}

const mapStateToProps = state => ({
    loading: state.loginForm.loading,
    error: state.loginForm.error,
    email: state.loginForm.email,
    password: state.loginForm.password,
})

const mapActionsToProps = ({
    login,
    setEmail,
    setPassword,
    clearError,
})

export default connect(mapStateToProps, mapActionsToProps)(Login)
